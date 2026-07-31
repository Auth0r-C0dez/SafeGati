import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Truck } from 'lucide-react';
import { company, navLinks } from '../data/siteContent';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-brand-900 text-sm text-white/90 md:block">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex gap-4">
            <span>GST No. {company.gst}</span>
            <a href="https://www.safegatipackers.org/images/Certificate.pdf" target="_blank" rel="noreferrer" className="hover:text-accent-400">
              Trademark Certificate
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${company.primaryPhone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-accent-400">
              <Phone className="h-3.5 w-3.5" /> {company.primaryPhone}
            </a>
            <a href={`mailto:${company.emails[0]}`} className="flex items-center gap-1 hover:text-accent-400">
              <Mail className="h-3.5 w-3.5" /> {company.emails[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white shadow-sm'}`}>
        <div className="container-custom flex items-center justify-between py-3 md:py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg">
              <Truck className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold leading-tight text-brand-800">Safegati</p>
              <p className="text-xs text-slate-500">Packers & Movers</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative group">
                  <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-600">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.path}>
                  <Link to={link.path} className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-600 ${location.pathname === link.path ? 'bg-brand-50 text-brand-600' : 'text-slate-700'}`}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link to="/pay-now" className="btn-accent ml-2 !py-2 !px-4 text-sm">Pay Now</Link>
            </li>
          </ul>

          <button type="button" className="rounded-lg p-2 text-brand-800 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >
              <div className="container-custom space-y-1 py-4">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-medium text-slate-700"
                      >
                        {link.label} <ChevronDown className={`h-4 w-4 transition ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 space-y-1 border-l-2 border-brand-200 pl-3">
                          {link.children.map((child) => (
                            <Link key={child.path} to={child.path} className="block rounded-lg px-3 py-2 text-sm text-slate-600">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={link.path} to={link.path} className="block rounded-lg px-3 py-3 font-medium text-slate-700">
                      {link.label}
                    </Link>
                  )
                )}
                <Link to="/pay-now" className="btn-accent mt-2 block text-center">Pay Now</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
