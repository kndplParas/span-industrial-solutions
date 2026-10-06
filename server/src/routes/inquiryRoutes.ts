import { Router } from 'express';
import { createInquiry } from '../controllers/inquiryController.js';
import { inquiryRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/inquiries
router.post('/', inquiryRateLimiter, createInquiry);

export default router;
