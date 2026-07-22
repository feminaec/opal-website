import React, { useState, useEffect, useRef } from 'react';
import { services } from '../constants/data';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';

export default function ServicesPage(): React.JSX.Element {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const bottomSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hides the badge as soon as the bottom sentinel (near footer) comes into view
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
    <div className="min-h-screen bg-white animate-fade-in pt-24 sm:pt-32 pb-24 relative">
      <SEO
        title="Our Services"
        description="Explore Opal Media's full range of services: video production, branding, social media management, SEO, and paid advertising."
        path="/services"
      />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">

        {/* Header Section */}
        <div className="mb-8 border-b-2 border-black pb-4 flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              Services
              </h1>
          </div>
        </div>

        {/* Full Page Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t-2 border-black pt-8">
          {services.map((service) => (
            <div key={service.id} className="h-full flex">
              <ServiceCard service={service} variant="black" />
            </div>
          ))}
        </div>

        {/* Bottom Sentinel Marker to detect when reaching footer */}
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