import React, { useState, useEffect, useRef } from 'react';
import { portfolioProjects } from '../constants/data';
import SEO from '../components/SEO';

export default function PortfolioPage(): React.JSX.Element {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const bottomSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hides badge as soon as the bottom sentinel near footer enters viewport
        setIsNearFooter(entry.isIntersecting);
      },
      { rootMargin: '0px 0px -50px 0px' }
    );

    if (bottomSentinelRef.current) {
      observer.observe(bottomSentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white animate-fade-in pt-24 sm:pt-32 pb-16 sm:pb-24 relative">
      <SEO
        title="Our Work"
        description="See our portfolio of video production, branding, and digital marketing projects delivered for clients across the UAE."
        path="/portfolio"
      />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Header Section */}
        <div className="border-b-2 border-black pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
                Our Work
              </h1>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 sm:gap-y-16">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title || index}
              className="group relative block w-full overflow-hidden cursor-default"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 border border-black/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black text-white text-xs font-black uppercase px-3 py-1.5 tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-black leading-none transition-colors duration-300 group-hover:text-zinc-600">
                    {project.title}
                  </h3>
                </div>
                
                <div className="border-t-2 border-black pt-4">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.1em] text-black">
                    Role: {project.mood}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sentinel Marker */}
        <div ref={bottomSentinelRef} className="h-1 w-full mt-12" />

      </div>

      {/* Floating Screen Indicator Badge */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500 z-30 ${
          isNearFooter ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="bg-black text-white text-xs font-black uppercase px-6 py-3 tracking-[0.2em] shadow-2xl border border-white/20 flex items-center gap-2 animate-bounce">
          Scroll For More <span className="text-sm">↓</span>
        </span>
      </div>
    </div>
  );
}