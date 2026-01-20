import React from 'react';
import { portfolioProjects, awards, featuredFilm } from '../constants/data';

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="relative z-10 bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50"></div>
            <span className="text-amber-300/60 text-xs tracking-[0.3em] uppercase font-light">
              Archive
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-4 font-light">
            Cinema Selects
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl">
            Stories that linger. Films that drift between reality and dream.
          </p>
        </div>

        {/* Featured Film - Carnitapu */}
        <div className="mb-16 group">
          <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-white/5 hover:border-white/20 transition-all duration-500">
            {/* Image Container */}
            <div className="relative aspect-[21/9] overflow-hidden">
              {/* Main Image */}
              <img
                src={featuredFilm.image}
                alt={featuredFilm.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Film grain overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              ></div>

              {/* Vignette effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>

              {/* Featured Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-sm border border-amber-500/30 rounded-sm">
                <span className="text-amber-300 text-xs tracking-widest uppercase font-light">
                  Featured Film
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-sm">
                <span className="text-white/70 text-xs tracking-widest font-mono">
                  {featuredFilm.year}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="px-8 py-3 border-2 border-white/80 text-white text-sm tracking-wider uppercase font-light rounded-sm hover:bg-white/10 transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>

            {/* Film Details */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* Left Column - Title & Description */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl text-white mb-3 font-light">
                    {featuredFilm.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs tracking-wider uppercase rounded-sm">
                      {featuredFilm.category}
                    </span>
                    <span className="text-white/40 text-sm">•</span>
                    <span className="text-white/60 text-sm font-light">
                      {featuredFilm.mood}
                    </span>
                  </div>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed italic max-w-2xl">
                    {featuredFilm.tagline}
                  </p>
                  <p className="text-white/40 text-sm font-light leading-relaxed mt-4 max-w-2xl">
                    {featuredFilm.description}
                  </p>
                </div>

                {/* Right Column - Awards */}
                <div className="md:w-80">
                  <h4 className="text-white/50 text-xs tracking-widest uppercase mb-4">
                    Recognition
                  </h4>
                  <div className="space-y-3">
                    {awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white/80 text-sm font-light">{award.title}</p>
                          <p className="text-white/40 text-xs mt-1">{award.festival}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                {/* Main Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Film grain */}
                <div
                  className="absolute inset-0 opacity-10 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                ></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider uppercase font-light">
                    View Project →
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-white text-lg mb-2 group-hover:text-amber-300 transition-colors duration-300 font-light">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-white/60 font-light">{project.category}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/40 italic">{project.mood}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 border border-white/20 text-white font-light rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-white/40">
            <span className="tracking-wider">View Full Archive</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
