import { Link } from 'react-router-dom';
import AdvantagesGrid from '../components/AdvantagesGrid';
import { advantages } from '../constants/data';

export default function AboutPage() {
  return (
    /* 1. h-[calc(100vh-100px)]: Shrinks the page height to stop before the WhatsApp button.
       2. mb-[100px]: Creates a physical gap so the button doesn't float over your content.
    */
    <div className="min-h-screen lg:h-[calc(100vh-100px)] bg-white pt-24 pb-8 lg:pb-0 lg:mb-[100px] flex flex-col lg:overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex-1 flex flex-col">
        
        {/* Compressed Header Section */}
        <div className="border-b-2 border-black pb-4 mb-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <span className="text-black text-xs tracking-[0.2em] uppercase font-black block border-l-4 border-black pl-4">
                Our Philosophy
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-[70px] font-black uppercase tracking-tighter text-black leading-[0.8]">
                The Opal<br />Advantage
              </h1>
            </div>
            <div className="max-w-xs">
              <p className="text-black text-xs font-black uppercase tracking-wider leading-tight border-t-2 border-black pt-4">
                We connect cinematic vision with digital strategy in one seamless execution.
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Section: flex-1 ensures it fills the gap between header and CTA */}
        <div className="flex-1 min-h-0 mb-4">
          <div className="h-full border-t-2 border-black">
             <AdvantagesGrid items={advantages} showDescription={true} size="sm" />
          </div>
        </div>

        {/* Minimal Footer CTA: Squeezed slightly to stay clear of the bottom right corner */}
        <div className="border-2 border-black p-4 md:p-6 flex flex-col md:flex-row items-center justify-between bg-white group">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-black leading-none mb-4 md:mb-0">
            Ready to Create?
          </h2>
          
          <Link
            to="/connect"
            /* Increased z-index to ensure it stays on top of any low-level background elements */
            className="relative z-10 inline-block px-6 sm:px-8 py-4 bg-black text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors min-h-[48px]"
          >
            Connect With Us →
          </Link>
        </div>
      </div>
    </div>
  );
}