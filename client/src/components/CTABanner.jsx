import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { company } from '../data/siteContent';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-brand-800 via-brand-600 to-brand-500 py-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Ready to get moving? Get your free quote</h3>
            <p className="mt-2 text-lg text-white/80">Feel Free to Call Us For More Information</p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a href={`tel:${company.primaryPhone.replace(/\s/g, '')}`} className="btn-accent text-lg">
              <Phone className="h-5 w-5" />
              Call Us: {company.primaryPhone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
