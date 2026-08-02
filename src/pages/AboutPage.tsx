import React from 'react';
import { about } from '../constants/data';
import SEO from '../components/SEO';

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white animate-fade-in pt-28 sm:pt-36 pb-16 sm:pb-24">
      <SEO
        title="About Us"
        description="Learn about Opal Media, a UAE-based agency delivering media production and digital marketing solutions for brands."
        path="/about"
      />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        
        {/* Header Section */}
        <div className="border-b-2 border-black pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-none whitespace-nowrap">
                About Opal Media
              </h1>
            </div>
          </div>
        </div>

        {/* 2-Column Founder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-black">
          {about.slice(0, 2).map((person, idx) => (
            <div
              key={person.name || idx}
              className={`p-8 md:p-12 flex flex-col justify-between h-full space-y-8 ${
                idx === 0 ? 'border-b-2 md:border-b-0 md:border-r-2 border-black' : ''
              }`}
            >
              <div className="space-y-6">
                {/* Header Row: Scaled Image & Name/Role/Email details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 object-cover border-2 border-black grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-tight">
                      {person.name}
                    </h2>
                    {person.role && (
                      <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500 mt-1.5">
                        {person.role}
                      </span>
                    )}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="inline-block mt-3 text-xs sm:text-sm font-bold tracking-wider text-black underline underline-offset-4 hover:text-zinc-600 transition-colors lowercase"
                      >
                        {person.email}
                      </a>
                    )}
                  </div>
                </div>

                {/* Bio: Regular weight with matching size & tracking */}
                <p className="text-xs sm:text-sm font-normal tracking-wider text-black leading-relaxed pt-2">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}