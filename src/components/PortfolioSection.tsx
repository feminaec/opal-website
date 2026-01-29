import { Link } from 'react-router-dom';
import { portfolioProjects } from '../constants/data';

export default function PortfolioSection() {
  // Show only first 3 projects as preview
  const previewProjects = portfolioProjects.slice(0, 3);

  return (
    <div id="portfolio" className="relative z-10 bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-black/30"></div>
            <span className="text-black/40 text-xs tracking-[0.3em] uppercase font-light">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl text-black mb-4 font-light">
            Our Work
          </h2>
          <p className="text-black/50 text-lg font-light max-w-2xl">
            A showcase of our creative productions and collaborations.
          </p>
        </div>

        {/* Portfolio Grid - Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-sm bg-gray-50 border border-black/5"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
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

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            to="/portfolio"
            className="group px-8 py-4 border border-black/20 text-black font-light rounded-sm transition-all duration-300 hover:bg-black/5 hover:border-black/40 inline-block"
          >
            <span className="tracking-wider">View All Projects</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
