import React from 'react';
import { about } from '../constants/data';

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white animate-fade-in pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        
        {/* Header Section */}
        <div className="border-b-2 border-black pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
                About <br /> Opal Media
              </h1>
            </div>
          </div>
        </div>

        {/* 2-Column Founder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-black">
          {about.slice(0, 2).map((person, idx) => (
            <div
              key={person.title || idx}
              className={`p-8 md:p-12 flex flex-col justify-between space-y-8 ${
                idx === 0 ? 'border-b-2 md:border-b-0 md:border-r-2 border-black' : ''
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                  {person.title}
                </h2>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 leading-relaxed">
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