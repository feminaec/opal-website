import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection(): React.JSX.Element {
  return (
    <div id="home" className="relative min-h-screen flex items-end justify-start pb-6 sm:pb-8 overflow-hidden bg-black">
      {/* Video Background - Full Opacity */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content Container (Left Aligned) */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 text-left">
        <div className="max-w-2xl">
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6 mb-4">
            <Link
              to="/portfolio"
              className="group px-8 sm:px-10 py-4 border-2 border-white bg-black/20 backdrop-blur-sm text-white font-bold rounded-none transition-all duration-300 hover:bg-white hover:text-black tracking-widest uppercase text-sm min-h-[48px] flex items-center justify-center sm:justify-start"
            >
              View Our Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/connect"
              className="group px-8 sm:px-10 py-4 bg-white text-black font-bold rounded-none transition-all duration-300 hover:scale-105 tracking-widest uppercase text-sm min-h-[48px] flex items-center justify-center sm:justify-start"
            >
              Book a Free Consultation
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Subheadline */}
          <p className="text-white text-sm sm:text-lg md:text-xl font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Metaphorizing and condensing experiences. We live to create stories.
          </p>

        </div>
      </div>
    </div>
  );
}