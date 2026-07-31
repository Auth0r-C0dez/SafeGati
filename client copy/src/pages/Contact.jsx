import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import QuoteForm from '../components/QuoteForm';
import CTABanner from '../components/CTABanner';
import { company } from '../data/siteContent';

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch for a free moving quote" breadcrumb="Home / Contact Us" />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {[company.headOffice, company.northOffice].map((office) => (
                <motion.div
                  key={office.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
                >
                  <h3 className="text-xl font-bold text-brand-800">{office.title}</h3>
                  <div className="mt-4 space-y-3 text-slate-600">
                    <div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brand-500" /><p>{office.address}</p></div>
                    <div className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-brand-500" />
                      <div>{company.emails.map((e) => <a key={e} href={`mailto:${e}`} className="block hover:text-brand-600">{e}</a>)}</div>
                    </div>
                    <div className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-brand-500" />
                      <div>{company.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-brand-600">{p}</a>)}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-brand-800">Enquire Now</h3>
              <QuoteForm enquiryFrom="Contact Page" />
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
