import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PackageCheck, Clock3, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTABanner from '../components/CTABanner';
import { company } from '../data/siteContent';

export default function TrackStatus() {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setResult({ type: 'error', message: 'Please enter a tracking ID to continue.' });
      return;
    }

    setResult({
      type: 'success',
      message: `Your shipment is currently in transit and being coordinated by our relocation team.`,
      details: [
        'Pickup confirmation completed',
        'Packing materials loaded safely',
        'Vehicle dispatched for destination',
      ],
    });
  };

  return (
    <>
      <PageBanner title="Track Your Move" subtitle="Monitor your relocation progress with a quick and simple status check" breadcrumb="Home / Track Status" />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="section-shell p-8 md:p-10">
              <div className="flex items-center gap-3 text-brand-600">
                <div className="rounded-2xl bg-brand-50 p-3">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-500">Live Update</p>
                  <h2 className="text-2xl font-bold text-brand-800">Check your relocation status</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <label className="text-sm font-semibold text-slate-700" htmlFor="trackingId">Enter tracking ID</label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input id="trackingId" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="Example: SAFE-1024" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
                  <button type="submit" className="btn-primary whitespace-nowrap">Check Status</button>
                </div>
              </form>

              {result && (
                <div className={`mt-6 rounded-2xl border p-5 ${result.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-rose-200 bg-rose-50 text-rose-800'}`}>
                  <p className="font-semibold">{result.message}</p>
                  {result.details && (
                    <ul className="mt-3 space-y-2 text-sm">
                      {result.details.map((item) => (
                        <li key={item} className="flex items-center gap-2"><PackageCheck className="h-4 w-4" /> {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </motion.div>

            <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-2 text-brand-600">
                  <Clock3 className="h-5 w-5" />
                  <h3 className="text-lg font-bold text-brand-800">Need a quick update?</h3>
                </div>
                <p className="mt-4 text-slate-600">Our relocation support team remains available round the clock for status updates, route changes, and delivery support.</p>
              </div>
              <div className="rounded-3xl bg-brand-900 p-7 text-white shadow-lg">
                <h3 className="text-lg font-bold">Call our experts</h3>
                <a href={`tel:${company.primaryPhone.replace(/\s/g, '')}`} className="mt-4 flex items-center gap-3 text-lg font-semibold text-accent-400"><Phone className="h-5 w-5" /> {company.primaryPhone}</a>
                <p className="mt-4 text-sm text-white/70">We can guide you about your shipment’s latest checkpoint and the best next move.</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
