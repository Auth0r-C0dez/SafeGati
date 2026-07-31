import { Phone, MessageCircle } from 'lucide-react';
import { company } from '../data/siteContent';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:bottom-8 md:right-6">
      <a
        href={`https://api.whatsapp.com/send?phone=91${company.whatsapp}&text=Hello%20Safegati%20Packers`}
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition hover:scale-110 hover:bg-green-600"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${company.primaryPhone.replace(/\s/g, '')}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40 transition hover:scale-110 hover:bg-brand-600 md:hidden"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
