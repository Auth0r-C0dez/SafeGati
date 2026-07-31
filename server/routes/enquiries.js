/**
 * ENQUIRY ROUTES
 * ==============
 * POST /api/enquiries  → Save a new quote/enquiry form submission
 * GET  /api/enquiries  → List all enquiries (for admin use)
 */

import express from 'express';
import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, movingFrom, movingTo, message, enquiryFrom } = req.body;

    if (!name || !email || !phone || !movingFrom || movingTo === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database is temporarily unavailable. Please call us at +91 9160000312.',
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      movingFrom,
      movingTo,
      message: message || '',
      enquiryFrom: enquiryFrom || 'Website',
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been submitted. We will contact you shortly.',
      data: { id: enquiry._id },
    });
  } catch (error) {
    console.error('Enquiry error:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

router.get('/', async (_req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database unavailable' });
    }
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
