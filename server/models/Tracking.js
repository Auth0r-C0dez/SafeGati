/**
 * TRACKING MODEL
 * ==============
 * Stores shipment tracking records so customers can check status via "Track Status" page.
 */

import mongoose from 'mongoose';

const trackingSchema = new mongoose.Schema(
  {
    trackingId: { type: String, required: true, unique: true, uppercase: true, trim: true },
    customerName: { type: String, required: true, trim: true },
    movingFrom: { type: String, required: true },
    movingTo: { type: String, required: true },
    status: {
      type: String,
      enum: ['booked', 'packed', 'in-transit', 'delivered'],
      default: 'booked',
    },
    statusHistory: [
      {
        status: String,
        note: String,
        date: { type: Date, default: Date.now },
      },
    ],
    estimatedDelivery: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Tracking', trackingSchema);
