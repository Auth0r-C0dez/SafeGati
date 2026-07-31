import { motion } from 'framer-motion';

export default function PageBanner({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-900 via-brand-700 to-brand-500 py-20 md:py-28">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container-custom relative text-center">
        {breadcrumb && <p className="mb-3 text-sm font-medium text-white/60">{breadcrumb}</p>}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
