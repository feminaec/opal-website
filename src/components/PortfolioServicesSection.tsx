import { Link } from 'react-router-dom';
import { portfolioProjects, services } from '../constants/data';
import ServiceCard from './ServiceCard';

export default function PortfolioServicesSection() {
  const previewProjects = portfolioProjects.slice(0, 4);
  const previewServices = services.slice(0, 4);

  return (
    <div className="relative z-10 bg-white py-16 sm:py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-start">
          
          {/* Left Side: OUR WORK (Cinematic 16:9) */}
          <div id="portfolio" className="space-y-10">
            <div className="flex items-end justify-between border-b-2 border-black pb-4">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
                Our Work
              </h2>
              <Link to="/portfolio" className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-all pb-1">
                View All →
              </Link>
            </div>

            {/* Changed to 1 column or tight 2-column to let the 16:9 images breathe */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {previewProjects.map((project, index) => (
                <Link to="/portfolio" key={index} className="group block">
                  <div className="relative aspect-video overflow-hidden bg-zinc-100 border border-black/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                       <p className="text-white text-xs font-bold uppercase tracking-[0.15em]">
                        {project.title}
                       </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: WHAT WE DO (Matching Scale) */}
          <div id="services" className="space-y-10">
            <div className="flex items-end justify-between border-b-2 border-black pb-4">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
                What We Do
              </h2>
              <Link to="/services" className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-all pb-1">
                Services →
              </Link>
            </div>

            {/* Grid matches the spacing and height feel of the 16:9 videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100"> 
              {previewServices.map((service) => (
                <div key={service.id} className="bg-white aspect-video flex flex-col items-center justify-center">
                  <ServiceCard service={service} variant="default" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}