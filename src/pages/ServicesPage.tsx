import { services } from '../constants/data';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    /* 1. h-[calc(100vh-100px)]: Forces the page to end above the WhatsApp button.
       2. mb-[100px]: Ensures no content is rendered in the button's "hitbox".
    */
    <div className="min-h-screen lg:h-[calc(100vh-100px)] bg-white lg:overflow-hidden flex flex-col lg:mb-[100px] animate-fade-in">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full lg:h-full flex flex-col pt-24 sm:pt-32 pb-8 sm:pb-6">

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

        {/* Grid Area: flex-grow ensures cards fill the remaining vertical height */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 min-h-0">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="h-full min-h-0">
              {/* Note: Ensure ServiceCard uses h-full internal containers */}
              <ServiceCard 
                service={service} 
                variant="black" 
              />
            </div>
          ))}
        </div>

        {/* Compact Bottom Navigation Bar */}
        <div className="mt-4 pt-4 border-t-2 border-black flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">
              Next Step
            </p>
            <p className="text-sm font-black uppercase tracking-wider text-black">
              Ready to collaborate?
            </p>
          </div>
          
          <Link 
            to="/connect" 
            /* Shorter padding (py-3) to keep the button clear of the WhatsApp bubble */
            className="group inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-800 min-h-[48px]"
          >
            Start Project
            <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}