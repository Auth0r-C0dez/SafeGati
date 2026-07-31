import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTABanner from '../components/CTABanner';
import { aboutProfile } from '../data/siteContent';

export default function AboutProfile() {
  return (
    <>
      <PageBanner title={aboutProfile.title} subtitle="Learn about Safegati Packers and Movers" breadcrumb="Home / About Us / Our Profile" />
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {aboutProfile.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mb-6 text-lg leading-relaxed text-slate-600"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
