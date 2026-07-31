import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTABanner from '../components/CTABanner';
import { certifications } from '../data/siteContent';

export default function AboutCertifications() {
  return (
    <>
      <PageBanner title={certifications.title} breadcrumb="Home / About Us / Certifications" />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {certifications.items.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover flex items-start gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
              >
                <div className="rounded-xl bg-brand-50 p-4 text-brand-500">
                  <Award className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-800">{cert.name}</h3>
                  <p className="mt-2 text-slate-600">{cert.number}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
                    View Certificate <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
