import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0">
      {/* Video Background - Placeholder with animated gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-amber-900/20 animate-pulse"></div>
        {/* Simulated film grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated light streaks */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent animate-pulse delay-150"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight font-light px-4">
          Where Social Trends
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-amber-200 bg-clip-text text-transparent">
            Meet Cinematic
          </span>
          <br />
          Excellence
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4">
          From viral social campaigns to broadcast-quality productions and
          immersive live experiences—your premium storytelling partner in the
          UAE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/connect"
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            <span className="relative z-10 tracking-wide">
              Book a Consultation
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>

          <Link
            to="/portfolio"
            className="group px-8 py-4 border border-white/30 text-white font-light rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 tracking-wide"
          >
            View Our Work
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white/10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10"></div>
    </div>
  );
}
