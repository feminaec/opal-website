import { Link, useParams, useNavigate } from 'react-router-dom';
import { services } from '../constants/data';
import SEO from '../components/SEO';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white pt-32 flex items-center justify-center">
        <h1 className="text-2xl font-black uppercase tracking-tighter text-black">Service Not Found</h1>
      </div>
    );
  }

  // Handle the specific line break for titles with "&"
  const formattedTitle = service.title.includes('&') 
    ? service.title.replace(' & ', ' &\n') 
    : service.title;

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 animate-fade-in">
      <SEO
        title={service.title}
        description={service.seoDescription}
        path={`/services/${service.id}`}
      />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center border-b-2 border-black pb-6 sm:pb-8 mb-10 sm:mb-16">
          <button 
            onClick={() => navigate('/services')} 
            className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black hover:text-zinc-500 transition-colors min-h-[44px]"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> 
            Back to Services
          </button>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-300 hidden sm:block">
            Service / 0{services.indexOf(service) + 1}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">
          
          {/* Left Side: Massive Title */}
          <div className="lg:col-span-7 space-y-10">
            {/* The icon div was removed from here */}
            <h1 className="text-4xl sm:text-6xl md:text-[120px] font-black uppercase tracking-tighter text-black leading-[0.85] whitespace-pre-line">
              {formattedTitle}
            </h1>
          </div>

          {/* Right Side: Capabilities & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between border-l-0 lg:border-l-2 lg:pl-16 border-black">
            <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-12">
                Core Capabilities
              </h2>
              <ul className="space-y-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="group flex items-baseline gap-6">
                    <span className="text-black font-black text-xs">0{idx + 1}</span>
                    <span className="text-black text-xl md:text-2xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-20">
              <Link
                to="/connect"
                className="group relative inline-flex items-center justify-between w-full p-6 sm:p-8 bg-black text-white text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] transition-all duration-300 hover:bg-zinc-900 min-h-[56px]"
              >
                <span>Start Your Production</span>
                <span className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}