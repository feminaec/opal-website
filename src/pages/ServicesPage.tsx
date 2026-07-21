import { services } from '../constants/data';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    /* 1. h-[calc(100vh-100px)]: Forces the page to end above the WhatsApp button.
       2. mb-[100px]: Ensures no content is rendered in the button's "hitbox".
    */
    <div className="min-h-screen bg-white flex flex-col lg:mb-[100px] animate-fade-in">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col pt-24 sm:pt-32 pb-32 sm:pb-40">

        {/* Compressed Header */}
        <div className="mb-4 border-b-2 border-black pb-3">
          <div className="flex justify-between items-end">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none">
              Services
            </h1>
            <p className="hidden md:block text-zinc-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-1">
              Vision to Perfection
            </p>
          </div>
        </div>

        {/* Grid Area: no internal scroll — the page itself scrolls as one unit */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-0 border-t border-l border-black/[0.05] pb-4">
          {services.map((service) => (
            <div key={service.id} className="h-auto min-h-[200px] flex">
              <ServiceCard service={service} variant="black" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}