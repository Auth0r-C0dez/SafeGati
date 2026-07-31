import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTABanner from '../components/CTABanner';
import { branches } from '../data/siteContent';

export default function Branches() {
  return (
    <>
      <PageBanner title="Our Branches" subtitle="Find Safegati Packers and Movers near you across India" breadcrumb="Home / Our Branches" />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
              >
                <h3 className="text-xl font-bold text-brand-800">{branch.name}</h3>
                <div className="mt-4 space-y-4 text-slate-600">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <p>{branch.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-brand-500" />
                    <div>
                      {branch.emails.map((e) => (
                        <a key={e} href={`mailto:${e}`} className="block hover:text-brand-600">{e}</a>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                    <div>
                      {branch.phones.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
