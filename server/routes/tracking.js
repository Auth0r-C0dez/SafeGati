/**
 * TRACKING ROUTES
 * =================
 * GET /api/tracking/:id  → Look up shipment status by tracking ID
 */

import express from 'express';
import mongoose from 'mongoose';
import Tracking from '../models/Tracking.js';

const router = express.Router();

router.get('/:trackingId', async (req, res) => {
  try {
    const { trackingId } = req.params;

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database unavailable. Please call +91 9160000312 for status.',
      });
    }

    const record = await Tracking.findOne({ trackingId: trackingId.toUpperCase() });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Tracking ID not found. Please verify and try again.',
      });
    }

    res.json({ success: true, data: record });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
