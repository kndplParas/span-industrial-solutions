import { Pool } from 'pg';
import { config } from './env.js';
import { logger } from '../utils/logger.js';
import type { InquiryInput, InquiryRecord } from '../types/inquiry.js';

let isPgConnected = false;
let memoryInquiries: InquiryRecord[] = [];
let nextId = 1;

export const pool = new Pool({
  connectionString: config.databaseUrl,
  connectionTimeoutMillis: 3000,
  idleTimeoutMillis: 10000,
});

pool.on('error', (err) => {
  logger.error('Unexpected error on idle PostgreSQL client:', err.message);
});

export async function initDatabase(): Promise<void> {
  try {
    const client = await pool.connect();
    isPgConnected = true;
    logger.info('Successfully connected to PostgreSQL database.');

    const schemaQuery = `
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        company VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
      CREATE INDEX IF NOT EXISTS idx_inquiries_service ON inquiries(service);
      CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
    `;

    await client.query(schemaQuery);
    client.release();
    logger.info('Database schema verified: `inquiries` table is ready.');
  } catch (err: any) {
    isPgConnected = false;
    logger.warn(
      `PostgreSQL connection could not be established (${err.message}). ` +
      'Falling back to secure in-memory storage mode for inquiries so website remains fully operational.'
    );
  }
}

export async function insertInquiry(data: InquiryInput): Promise<InquiryRecord> {
  if (isPgConnected) {
    try {
      const query = `
        INSERT INTO inquiries (name, company, email, phone, service, message)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, name, company, email, phone, service, message, created_at;
      `;
      const values = [
        data.name,
        data.company,
        data.email,
        data.phone,
        data.service,
        data.message,
      ];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err: any) {
      logger.error('Database insertion error, falling back to memory store:', err.message);
    }
  }

  // In-memory fallback
  const record: InquiryRecord = {
    id: nextId++,
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    created_at: new Date().toISOString(),
  };
  memoryInquiries.push(record);
  return record;
}

export function isDatabaseConnected(): boolean {
  return isPgConnected;
}
