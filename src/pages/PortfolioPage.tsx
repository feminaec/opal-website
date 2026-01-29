import { Link } from 'react-router-dom';
import { portfolioProjects } from '../constants/data';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-12">
          <span>←</span> Back to Home
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-black/30"></div>
            <span className="text-black/40 text-xs tracking-[0.3em] uppercase font-light">
              Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-black mb-6 font-light">Our Work</h1>
          <p className="text-black/60 text-xl font-light max-w-3xl">
            A showcase of our creative productions and collaborations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-sm bg-gray-50 border border-black/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-black text-lg mb-2 font-light">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-black/60 font-light">{project.category}</span>
                  <span className="text-black/30">•</span>
                  <span className="text-black/40 italic">{project.mood}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
