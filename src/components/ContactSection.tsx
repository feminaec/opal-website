import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <div id="connect" className="relative z-10 bg-gradient-to-b from-black via-gray-900 to-black py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl text-white mb-6 font-light">
          Ready to Elevate Your Story?
        </h2>
        <p className="text-white/60 text-lg font-light mb-12 leading-relaxed max-w-2xl mx-auto">
          Let's create something extraordinary together. From viral social campaigns to cinematic productions and unforgettable live experiences.
        </p>

        {/* CTA Button */}
        <Link
          to="/connect"
          className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
        >
          Book a Free Consultation
        </Link>

        {/* Contact Info Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm max-w-2xl mx-auto">
          <div>
            <p className="text-white/40 uppercase tracking-wider mb-2">Email</p>
            <p className="text-white/80">info@opalmediauae.com</p>
          </div>
          <div>
            <p className="text-white/40 uppercase tracking-wider mb-2">Location</p>
            <p className="text-white/80">Dubai, UAE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
