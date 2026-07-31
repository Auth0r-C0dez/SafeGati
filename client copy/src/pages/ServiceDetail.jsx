import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import QuoteForm from '../components/QuoteForm';
import CTABanner from '../components/CTABanner';
import { services } from '../data/siteContent';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link to="/" className="btn-primary mt-4">Go Home</Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={service.title} breadcrumb={`Home / Services / ${service.title}`} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-600">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={service.image}
                alt={service.title}
                className="mb-8 w-full rounded-2xl shadow-xl"
              />
              <h2 className="mb-2 text-2xl font-bold text-brand-800">
                <span className="text-brand-500">SAFEGATI</span> {service.title} Services in Hyderabad
              </h2>
              {service.content.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-4 text-justify leading-relaxed text-slate-600"
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <div>
              <QuoteForm enquiryFrom={`Service: ${service.title}`} />
              <div className="mt-8 rounded-2xl bg-slate-100 p-6">
                <h4 className="font-bold text-brand-800">Other Services</h4>
                <ul className="mt-4 space-y-2">
                  {services.filter((s) => s.slug !== slug).map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="text-sm text-brand-600 hover:underline">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
