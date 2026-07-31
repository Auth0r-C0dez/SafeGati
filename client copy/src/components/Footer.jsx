import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company, services, cities } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent-400">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-white/70 transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent-400">Cities We Serve</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <span className="text-sm text-white/70">Packers and Movers in {city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent-400">Get In Touch</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <p><strong className="text-white">{company.name}</strong><br />Survey No.136, Anjaiah Nagar, Opp. Jayabheri Enclave Lane, Gachibowli, Hyderabad-500081</p>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-400" />
                <div>
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-white">{p}</a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-400" />
                <div>
                  {company.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-white">{e}</a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand-400" />
                <p>Working Hours: {company.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-accent-400">Location Map</h3>
            <iframe
              src={company.mapEmbed}
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Safegati location"
            />
          </div>
        </div>

        {/* Social + copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-4">
            <a href={company.social.facebook} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold transition hover:bg-brand-500">f</a>
            <a href={company.social.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold transition hover:bg-brand-500">i</a>
            <a href={company.social.youtube} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold transition hover:bg-brand-500">y</a>
          </div>
          <p className="text-sm text-white/50">{company.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
