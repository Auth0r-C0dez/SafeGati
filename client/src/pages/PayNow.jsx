import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTABanner from '../components/CTABanner';
import { company } from '../data/siteContent';

export default function PayNow() {
  return (
    <>
      <PageBanner title="Pay Now" subtitle="Secure and transparent payment support for your move" breadcrumb="Home / Pay Now" />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="section-shell p-8 md:p-10">
              <div className="flex items-center gap-3 text-brand-600">
                <div className="rounded-2xl bg-brand-50 p-3">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-500">Secure Payment</p>
                  <h2 className="text-2xl font-bold text-brand-800">Make your moving payment safely</h2>
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">We offer transparent payment support for booking, packing, transport, and service charges. Our team will confirm every expense clearly before your move begins.</p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-semibold">Trusted payment assistance</span>
                </div>
                <p className="mt-3 text-slate-600">Share your booking details with us and we will guide you on the most convenient payment method for your relocation plan.</p>
              </div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-brand-900 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Need payment help?</h3>
              <p className="mt-4 text-white/75">Call our support team directly and we will walk you through the process in simple steps.</p>
              <a href={`tel:${company.primaryPhone.replace(/\s/g, '')}`} className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-semibold text-accent-400"><Phone className="h-5 w-5" /> {company.primaryPhone}</a>
            </motion.aside>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
