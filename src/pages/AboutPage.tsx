import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const advantages = [
    {
      title: 'Live-to-Digital Mastery',
      description: 'We transform your live events and theatrical productions into compelling digital content—capturing the energy, repackaging highlights, and extending reach across social platforms with cinematic polish.',
      iconColor: 'text-purple-300',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'UAE Insight Meets Global Standards',
      description: 'Deeply rooted in the Emirates with an understanding of local culture, audiences, and market dynamics—yet operating with international production excellence and creative ambition.',
      iconColor: 'text-amber-300',
      bgColor: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
    },
    {
      title: 'One Partner, Infinite Possibilities',
      description: 'No juggling multiple vendors. From your Instagram Reels to your annual corporate summit, we handle it all—ensuring brand consistency, creative cohesion, and effortless collaboration.',
      iconColor: 'text-teal-300',
      bgColor: 'bg-gradient-to-br from-teal-500/20 to-blue-500/20',
      borderColor: 'border-teal-500/30',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12">
          <span>←</span> Back to Home
        </Link>

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl text-white mb-6 font-light">The Opal Advantage</h1>
          <p className="text-white/60 text-xl font-light max-w-3xl mx-auto">
            What sets us apart isn't just what we do—it's how we connect the dots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className={`w-20 h-20 rounded-full ${advantage.bgColor} border ${advantage.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-10 h-10 ${advantage.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl text-white mb-3 font-light">{advantage.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-sm p-12 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-light">Ready to Work Together?</h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary. From viral social campaigns to cinematic productions and unforgettable live experiences.
          </p>
          <Link
            to="/connect"
            className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
