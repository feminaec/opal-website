import { Link } from 'react-router-dom';
import { portfolioProjects } from '../constants/data';

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
              Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 font-light">Our Work</h1>
          <p className="text-white/60 text-xl font-light max-w-3xl">
            A showcase of our creative productions and collaborations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-sm bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div
                  className="absolute inset-0 opacity-10 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>

              <div className="p-5">
                <h3 className="text-white text-lg mb-2 font-light">
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
