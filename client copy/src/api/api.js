/**
 * SIMPLE SITE HELPER
 * ==================
 * This file keeps the website self-contained.
 * Instead of connecting to a database, it returns a friendly success message.
 */

export async function submitEnquiry(formData) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: `Thanks ${formData.name || 'there'}! We have received your request and will contact you shortly.`,
  };
}

export async function trackShipment(trackingId) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    success: true,
    trackingId,
    status: 'In transit',
    message: 'Your move is being coordinated by our team. Please call us for detailed updates.',
  };
}
