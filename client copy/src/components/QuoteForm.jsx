import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function QuoteForm({ enquiryFrom = 'Website', compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    window.setTimeout(() => {
      setStatus({
        type: 'success',
        message: `Thanks ${form.name || 'there'}! We have received your request and our team will contact you shortly.`,
      });
      setForm({ name: '', email: '', phone: '', movingFrom: '', movingTo: '', message: '' });
      setLoading(false);
    }, 800);
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-800 placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`overflow-hidden rounded-2xl bg-linear-to-br from-brand-800 via-brand-700 to-brand-600 p-1 shadow-2xl shadow-brand-800/30 ${compact ? '' : ''}`}
    >
      <div className="rounded-[14px] bg-white p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-brand-800 md:text-2xl">Get Free Quote</h3>
          <p className="mt-1 text-sm text-slate-500">Fill the form and we&apos;ll contact you shortly</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name *" required value={form.name} onChange={handleChange} className={inputClass} />
          <input type="email" name="email" placeholder="Email *" required value={form.email} onChange={handleChange} className={inputClass} />
          <input type="tel" name="phone" placeholder="Phone *" required value={form.phone} onChange={handleChange} className={inputClass} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input type="text" name="movingFrom" placeholder="Moving From *" required value={form.movingFrom} onChange={handleChange} className={inputClass} />
            <input type="text" name="movingTo" placeholder="Moving To *" required value={form.movingTo} onChange={handleChange} className={inputClass} />
          </div>
          <textarea name="message" placeholder="Message" rows={3} value={form.message} onChange={handleChange} className={inputClass} />
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            {loading ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>

        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 flex items-start gap-2 rounded-xl p-4 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
          >
            {status.type === 'success' ? <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" /> : <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />}
            {status.message}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
