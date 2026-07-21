import React from 'react';
import { about } from '../constants/data';

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16 flex flex-col justify-between">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        
        {/* Header Block */}
        <div className="border-2 border-black p-8 md:p-12 mb-8 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-3">
            <span className="text-black text-xs tracking-[0.3em] uppercase font-black block border-l-4 border-black pl-4">
              Leadership
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              About <br /> Opal Media
            </h1>
          </div>
        </div>

        {/* 2-Column Founder Grid (Fills 100% Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-black">
          {about.slice(0, 2).map((person, idx) => (
            <div
              key={person.title || idx}
              className={`p-8 md:p-12 flex flex-col justify-between space-y-8 ${
                idx === 0 ? 'border-b-2 md:border-b-0 md:border-r-2 border-black' : ''
              }`}
            >
              <div className="space-y-6">
                <span className="text-4xl font-black text-zinc-300 block">
                  0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                  {person.title}
                </h2>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 leading-relaxed">
                  {person.description}
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 flex justify-end">
                <span className="text-xl font-black">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}