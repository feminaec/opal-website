import { Link } from 'react-router-dom';
import { portfolioProjects } from '../constants/data';

export default function PortfolioPage() {
  return (
    /* Reduced top padding from pt-48 to pt-32 */
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Header Section: Compacted for immediate project visibility */}
        <div className="border-b-2 border-black pb-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <span className="text-black text-[12px] tracking-[0.3em] uppercase font-black block border-l-4 border-black pl-4">
                Archive / Selected Works
              </span>
              <h1 className="text-6xl md:text-[90px] font-black uppercase tracking-tighter text-black leading-[0.8]">
                Our Work
              </h1>
            </div>
            <p className="text-black text-[11px] uppercase font-black tracking-widest leading-tight max-w-[280px] md:text-right pb-2">
              A curation of cinematic short films, music videos, and theatrical productions.
            </p>
          </div>
        </div>

        {/* Portfolio Grid: Optimized gap to pull images higher */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {portfolioProjects.map((project, index) => {
            const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]/g, '-');

            return (
              <Link
                to={`/portfolio/${projectSlug}`}
                key={index}
                className="group relative block w-full overflow-hidden"
              >
                {/* Image Container: High contrast and sharp */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 border border-black/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white text-[10px] font-black uppercase px-3 py-1.5 tracking-[0.2em]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info: Tightened spacing */}
                <div className="mt-6 flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black leading-none">
                      {project.title}
                    </h3>
                    <span className="text-zinc-200 text-3xl font-black italic group-hover:text-black transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center border-t-2 border-black pt-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[12px] font-black uppercase tracking-[0.1em] text-black">
                        Role: {project.mood}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black border-b-2 border-black pb-0.5 transition-all">
                      View Project <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}