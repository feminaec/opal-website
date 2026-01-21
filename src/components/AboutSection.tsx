import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  // Preview - just show highlights, link to full page
  const highlights = [
    { title: 'Live-to-Digital Mastery', iconColor: 'text-purple-300', bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20', borderColor: 'border-purple-500/30' },
    { title: 'UAE Insight Meets Global Standards', iconColor: 'text-amber-300', bgColor: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20', borderColor: 'border-amber-500/30' },
    { title: 'One Partner, Infinite Possibilities', iconColor: 'text-teal-300', bgColor: 'bg-gradient-to-br from-teal-500/20 to-blue-500/20', borderColor: 'border-teal-500/30' },
  ];

  return (
    <div id="about" className="relative z-10 bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-white mb-6 font-light">
            The Opal Advantage
          </h2>
          <p className="text-white/50 text-lg font-light max-w-3xl mx-auto">
            What sets us apart isn't just what we do—it's how we connect the dots.
          </p>
        </div>

        {/* Preview Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className={`w-16 h-16 rounded-full ${item.bgColor} border ${item.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-8 h-8 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg text-white font-light">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Learn More CTA */}
        <div className="text-center">
          <Link
            to="/about"
            className="group px-8 py-4 border border-white/20 text-white font-light rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-white/40 inline-block"
          >
            <span className="tracking-wider">Learn More About Us</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
