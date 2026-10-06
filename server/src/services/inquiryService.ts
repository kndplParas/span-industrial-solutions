import { insertInquiry } from '../config/db.js';
import type { InquiryInput, InquiryRecord } from '../types/inquiry.js';
import { logger } from '../utils/logger.js';

export async function processInquiry(data: InquiryInput): Promise<InquiryRecord> {
  logger.info(`Processing inquiry from ${data.company} (${data.email}) for: ${data.service}`);
  const record = await insertInquiry(data);
  return record;
}
