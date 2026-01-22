import { Link } from 'react-router-dom';
import { portfolioProjects } from '../constants/data';

export default function PortfolioSection() {
  // Show only first 3 projects as preview
  const previewProjects = portfolioProjects.slice(0, 3);

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

        {/* Portfolio Grid - Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-10 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                ></div>
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
          <Link
            to="/portfolio"
            className="group px-8 py-4 border border-white/20 text-white font-light rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-white/40 inline-block"
          >
            <span className="tracking-wider">View Full Archive</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
