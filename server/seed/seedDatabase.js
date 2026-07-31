/**
 * DATABASE SEED SCRIPT
 * ====================
 * Run: npm run seed (from server folder)
 * Creates sample tracking records for testing the Track Status page.
 */

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Tracking from '../models/Tracking.js';

dotenv.config();

const sampleRecords = [
  {
    trackingId: 'SG2026001',
    customerName: 'Demo Customer',
    movingFrom: 'Hyderabad',
    movingTo: 'Bangalore',
    status: 'in-transit',
    statusHistory: [
      { status: 'booked', note: 'Booking confirmed', date: new Date('2026-01-15') },
      { status: 'packed', note: 'Goods packed and loaded', date: new Date('2026-01-18') },
      { status: 'in-transit', note: 'Shipment en route to Bangalore', date: new Date('2026-01-20') },
    ],
    estimatedDelivery: new Date('2026-01-25'),
  },
  {
    trackingId: 'SG2026002',
    customerName: 'Test User',
    movingFrom: 'Pune',
    movingTo: 'Mumbai',
    status: 'delivered',
    statusHistory: [
      { status: 'booked', note: 'Booking confirmed', date: new Date('2026-01-10') },
      { status: 'packed', note: 'Packing completed', date: new Date('2026-01-12') },
      { status: 'in-transit', note: 'In transit', date: new Date('2026-01-14') },
      { status: 'delivered', note: 'Delivered successfully', date: new Date('2026-01-16') },
    ],
  },
];

async function seed() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/safegati-packers';
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  await Tracking.deleteMany({});
  await Tracking.insertMany(sampleRecords);
  console.log('✅ Seeded tracking records. Try tracking ID: SG2026001');

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
