import React from 'react';
import { portfolioProjects } from '../constants/data';

export default function PortfolioPage(): React.JSX.Element {
  return (
    /* Added animate-fade-in to match ServicesPage */
    <div className="min-h-screen bg-white animate-fade-in pt-24 sm:pt-32 pb-16 sm:pb-24">
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
                  <span className="text-zinc-300 text-3xl font-black italic transition-colors duration-500 group-hover:text-black">
                    0{index + 1}
                  </span>
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

      </div>
    </div>
  );
}