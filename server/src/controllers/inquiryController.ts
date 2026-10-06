import { Request, Response } from 'express';
import { validateInquiry } from '../validators/inquiryValidator.js';
import { processInquiry } from '../services/inquiryService.js';
import { isDatabaseConnected } from '../config/db.js';
import type { ApiResponse, InquiryRecord } from '../types/inquiry.js';
import { logger } from '../utils/logger.js';

export async function createInquiry(
  req: Request,
  res: Response<ApiResponse<InquiryRecord>>
): Promise<void> {
  try {
    const validation = validateInquiry(req.body);

    if (!validation.isValid || !validation.sanitizedData) {
      res.status(400).json({
        success: false,
        message: 'Please resolve the highlighted errors before submitting.',
        errors: validation.errors,
      });
      return;
    }

    const savedRecord = await processInquiry(validation.sanitizedData);

    res.status(201).json({
      success: true,
      message: 'Thank you. Your inquiry has been received. Our solutions team will contact you shortly.',
      data: savedRecord,
    });
  } catch (error: any) {
    logger.error('Error handling inquiry submission:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again or contact us directly at sales@spansol.com.',
    });
  }
}

export function getHealthStatus(
  _req: Request,
  res: Response
): void {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: isDatabaseConnected() ? 'connected' : 'memory_fallback',
    company: 'SPAN Industrial Solutions Pvt Ltd',
  });
}
