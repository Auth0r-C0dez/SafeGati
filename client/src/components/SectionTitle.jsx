import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className={`mb-2 inline-block text-sm font-semibold uppercase tracking-widest ${light ? 'text-accent-400' : 'text-brand-500'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl font-bold md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-brand-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-lg ${light ? 'text-white/80' : 'text-slate-600'} ${center ? '' : 'mx-0'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
