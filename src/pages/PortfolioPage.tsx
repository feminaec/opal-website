import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioProjects, awards } from '../constants/data';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12">
          <span>←</span> Back to Home
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50"></div>
            <span className="text-amber-300/60 text-xs tracking-[0.3em] uppercase font-light">
              Archive
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 font-light">Cinema Selects</h1>
          <p className="text-white/60 text-xl font-light max-w-3xl">
            Stories that linger. Films that drift between reality and dream.
          </p>
        </div>

        {/* Featured Film - Carnitapu */}
        <div className="mb-16 group">
          <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-white/5 hover:border-white/20 transition-all duration-500">
            <div className="relative aspect-[21/9] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/60 to-pink-900/40"></div>
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-sm border border-amber-500/30 rounded-sm">
                <span className="text-amber-300 text-xs tracking-widest uppercase font-light">Featured Film</span>
              </div>
              <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-sm">
                <span className="text-white/70 text-xs tracking-widest font-mono">2021</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="px-8 py-3 border-2 border-white/80 text-white text-sm tracking-wider uppercase font-light rounded-sm hover:bg-white/10 transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl text-white mb-3 font-light">Carnitapu</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs tracking-wider uppercase rounded-sm">
                      Short Film
                    </span>
                    <span className="text-white/40 text-sm">•</span>
                    <span className="text-white/60 text-sm font-light">Hazy, Melancholic</span>
                  </div>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed italic max-w-2xl">
                    "For the light leaks and long silences"
                  </p>
                  <p className="text-white/40 text-sm font-light leading-relaxed mt-4 max-w-2xl">
                    A dreamlike exploration of memory and loss, shot on 16mm with practical effects.
                    Carnitapu drifts between moments of quiet reflection and visceral emotion.
                  </p>
                </div>

                <div className="md:w-80">
                  <h4 className="text-white/50 text-xs tracking-widest uppercase mb-4">Recognition</h4>
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
              <div className="relative aspect-video overflow-hidden">
                <div
                  className={`absolute inset-0 ${
                    index % 3 === 0
                      ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/60'
                      : index % 3 === 1
                      ? 'bg-gradient-to-br from-pink-900/40 to-orange-900/60'
                      : 'bg-gradient-to-br from-teal-900/40 to-indigo-900/60'
                  }`}
                ></div>
                <div
                  className="absolute inset-0 opacity-10 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider uppercase font-light">
                    View Project →
                  </span>
                </div>
              </div>

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
      </div>
    </div>
  );
}
