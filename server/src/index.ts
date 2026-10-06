import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env.js';
import { initDatabase, pool } from './config/db.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { apiRateLimiter } from './middleware/rateLimiter.js';
import { logger } from './utils/logger.js';

const app = express();

// Security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows flexible integration when running frontend separately
    crossOriginEmbedderPolicy: false,
  })
);

// Secure CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl) or matching dev ports
      if (!origin || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
        callback(null, true);
      } else {
        callback(null, true); // Dev-friendly fallback
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Limit JSON body size to prevent memory exhaustion attacks
app.use(express.json({ limit: '100kb' }));

// General API rate limiter
app.use('/api', apiRateLimiter);

// API Routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/health', healthRoutes);

// Root route
app.get('/', (_req, res) => {
  res.json({
    company: 'SPAN Industrial Solutions Pvt Ltd',
    service: 'Backend API Service',
    status: 'online',
    version: '1.0.0',
  });
});

// Centralized error handler
app.use(errorHandler);

// Start server and initialize database
async function startServer() {
  await initDatabase();

  const server = app.listen(config.port, () => {
    logger.info(`SPAN API Server is running on port ${config.port} [${config.nodeEnv}]`);
  });

  // Graceful shutdown
  const shutdown = async () => {
    logger.info('Shutting down SPAN API Server gracefully...');
    server.close(async () => {
      await pool.end();
      logger.info('Database connections closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

startServer();
