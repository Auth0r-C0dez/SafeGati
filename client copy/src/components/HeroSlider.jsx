import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/siteContent';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[70vh] min-h-[360px] md:h-[85vh] md:min-h-[520px] max-h-[800px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_35%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative flex h-full items-center px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-semibold text-accent-400 backdrop-blur-sm">
              India&apos;s Trusted Movers
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-6 text-lg text-white/85 md:text-xl">{slide.subtitle}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link to="/contact" className="btn-accent w-full justify-center sm:w-auto">
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+919160000312" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto">
                Call +91 9160000312
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button type="button" onClick={() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length)} className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30" aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} type="button" onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-accent-400' : 'w-2 bg-white/50'}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <button type="button" onClick={() => setCurrent((c) => (c + 1) % heroSlides.length)} className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30" aria-label="Next slide">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
