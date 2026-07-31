import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTABanner from '../components/CTABanner';
import { galleryCategories, galleryImages } from '../data/siteContent';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageBanner title="Gallery" subtitle="A glimpse of our packing, shifting, and transportation work" breadcrumb="Home / Gallery" />
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setActiveCategory('All')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === 'All' ? 'bg-brand-600 text-white' : 'bg-white text-slate-700 shadow-sm'}`}>
              All
            </button>
            {galleryCategories.map((category) => (
              <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'bg-brand-600 text-white' : 'bg-white text-slate-700 shadow-sm'}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredImages.map((image, index) => (
              <motion.div key={`${image.src}-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-500">{image.category}</p>
                  <p className="mt-2 text-lg font-semibold text-brand-800">{image.alt}</p>
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
