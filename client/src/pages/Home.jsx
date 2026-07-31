import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, Wallet, Headphones, ClipboardList, Package, Check, ChevronRight, Play } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import QuoteForm from '../components/QuoteForm';
import SectionTitle from '../components/SectionTitle';
import CTABanner from '../components/CTABanner';
import ScrollReveal from '../components/ScrollReveal';
import {
  welcome,
  services,
  whyChooseUs,
  visionMission,
  testimonials,
  workProcess,
  youtubeVideoId,
  stats,
} from '../data/siteContent';

const iconMap = { truck: Truck, wallet: Wallet, headphones: Headphones, clipboard: ClipboardList, package: Package, check: Check };

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="section-padding bg-white/80">
        <div className="container-custom">
          <div className="section-shell soft-grid p-6 md:p-8 lg:p-10">
            <ScrollReveal animation="fade-up" className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                  <p className="text-3xl font-bold text-brand-700">{item.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fade-left" className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">Family-first moving</span>
              <h2 className="text-3xl font-bold text-brand-900 md:text-4xl">We move families, not just boxes.</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Every move is handled by experienced people who understand how stressful relocation can be. We make it simple, safe, and deeply caring.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                  <h3 className="font-semibold text-brand-800">Trusted crew</h3>
                  <p className="mt-2 text-slate-600">Our team uses gentle packing, sturdy boxes, and clear communication on every move.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                  <h3 className="font-semibold text-brand-800">Transparent pricing</h3>
                  <p className="mt-2 text-slate-600">No surprise costs. Just reliable service and a smooth delivery experience from door to door.</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
              <img src="https://www.safegatipackers.org/img/service/packing-and-moving.jpg" alt="Team handling moving boxes" className="w-full max-h-[500px] min-h-[240px] object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Welcome section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fade-right" className="grid items-start gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="text-brand-500 font-semibold">{welcome.label}</span>
              <h2 className="mt-2 text-3xl font-bold text-brand-800 md:text-4xl">{welcome.title}</h2>
              <p className="mt-4 text-lg font-medium text-slate-600">{welcome.subtitle}</p>
              <img src={welcome.image} alt="Safegati Packers" className="my-6 rounded-2xl shadow-xl" />
              {welcome.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-slate-600 leading-relaxed">{p}</p>
              ))}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {welcome.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="lg:col-span-2">
              <QuoteForm enquiryFrom="Home Page" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-slate-100">
        <div className="container-custom">
          <SectionTitle title="Affordable Services" subtitle="We are packaging your products in high-quality packaging material and keeping them safe." />
          <ScrollReveal animation="fade-up" className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover group overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-800">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.shortDesc}</p>
                  <Link to={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-500 hover:text-brand-600">
                    Read more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <SectionTitle title="Why Choose Us" />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:border-brand-200 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-4 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-800">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video + Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 sm:grid-cols-1">
            <ScrollReveal animation="fade-right" className="space-y-6">
              <SectionTitle title="Watch Video" center={false} />
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  width="100%"
                  height="370"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Safegati Packers and Movers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" className="space-y-3">
              <SectionTitle title="Vision, Mission, Strength & Values" center={false} />
              <div className="space-y-3">
                {visionMission.map((item, i) => (
                  <details key={item.title} className="group rounded-xl border border-slate-200 bg-white" open={i === 0}>
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-brand-800">
                      {item.title}
                      <Play className="h-4 w-4 text-brand-500 transition group-open:rotate-90" />
                    </summary>
                    <p className="border-t border-slate-100 px-5 pb-5 pt-3 text-slate-600">{item.content}</p>
                  </details>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-linear-to-br from-brand-900 to-brand-700">
        <div className="container-custom">
          <ScrollReveal animation="zoom-in">
            <SectionTitle title="What Our Client's Say" light />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <p className="text-lg italic text-white/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 font-bold text-white">
                    {t.author[0]}
                  </div>
                  <div>
                    <cite className="font-semibold text-white not-italic">{t.author}</cite>
                    <p className="text-sm text-white/60">{t.location}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <SectionTitle title="Our Work Process" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {workProcess.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30">
                    <Icon className="h-9 w-9" />
                  </div>
                  <span className="text-sm font-bold text-brand-500">Step {step.step}</span>
                  <h4 className="mt-1 font-bold text-brand-800">{step.title}</h4>
                  {i < workProcess.length - 1 && (
                    <ChevronRight className="absolute right-0 top-10 hidden h-6 w-6 text-brand-300 md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
