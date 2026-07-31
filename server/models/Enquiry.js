/**
 * ENQUIRY MODEL (MongoDB Schema)
 * ==============================
 * Defines the shape of "enquiry" documents stored in MongoDB.
 * When a visitor fills the quote form on the website, we save their details here.
 */

import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    movingFrom: { type: String, required: true, trim: true },
    movingTo: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
    enquiryFrom: { type: String, default: 'Website' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'quoted', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Enquiry', enquirySchema);
