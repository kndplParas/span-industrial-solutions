import { insertInquiry } from '../config/db.js';
import type { InquiryInput, InquiryRecord } from '../types/inquiry.js';
import { logger } from '../utils/logger.js';

export async function processInquiry(data: InquiryInput): Promise<InquiryRecord> {
  logger.info(`Processing inquiry for service vertical: ${data.service} (${data.company})`);
  const record = await insertInquiry(data);
  return record;
}
