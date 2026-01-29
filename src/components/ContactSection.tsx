import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section className="bg-black py-16 sm:py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
          
          {/* Left Side: White Typography & Details */}
          <div className="space-y-12">
            <div className="border-b border-white/20 pb-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                Start Your <br /> Production
              </h2>
            </div>
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Email Us</p>
                <a href="mailto:info@opalmediauae.com" className="text-sm font-bold uppercase tracking-wider text-white hover:text-zinc-400 transition-colors">
                  info@opalmediauae.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">WhatsApp</p>
                <a href="https://wa.me/971554773618" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-wider text-white hover:text-zinc-400 transition-colors">
                  +971 55 477 3618
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Location</p>
                <p className="text-sm font-bold uppercase tracking-wider text-white">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: High-Contrast White CTA Box */}
          <div className="w-full">
            <Link 
              to="/connect" 
              className="group relative flex flex-col items-center justify-center aspect-[4/3] sm:aspect-video p-6 sm:p-8 bg-white text-black overflow-hidden transition-all duration-500 hover:bg-zinc-200"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 opacity-40">
                Next Steps
              </span>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-center">
                Book a <br /> Consultation
              </h3>
              
              <div className="mt-8 flex items-center gap-4 transform group-hover:translate-x-2 transition-transform duration-500">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Direct Connect</span>
                <span className="text-2xl">→</span>
              </div>

              {/* Viewfinder corner accents for that cinematic touch */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/10 group-hover:border-black/30 transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/10 group-hover:border-black/30 transition-colors" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}