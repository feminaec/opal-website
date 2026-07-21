import { Link, useLocation } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  icon: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'black';
  showFeatures?: boolean;
}

export default function ServiceCard({ 
  service, 
  variant = 'default',
  showFeatures = false 
}: ServiceCardProps) {
  
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  // Forces a clean break for "Digital & Social"
  const formattedTitle = service.title.includes('&') 
    ? service.title.replace(' & ', ' &\n') 
    : service.title;

  return (
    <Link 
      to={`/services/${service.id}`} 
      className={`group relative flex flex-col items-start justify-end border border-black/[0.05] w-full bg-white transition-all duration-500 hover:bg-black ${
        isServicesPage 
          ? 'min-h-[220px] h-auto py-10 lg:py-12 px-6 md:px-8 overflow-visible' 
          : 'h-full w-full p-4 overflow-hidden z-10'
      }`}
    >
      {/* Background Watermark: Subtly shunted to the top right corner */}
      <span className="absolute top-4 -right-2 text-[6rem] sm:text-[10rem] md:text-[10rem] lg:text-[14rem] font-black uppercase text-black/[0.015] group-hover:text-white/[0.02] pointer-events-none select-none leading-none transition-all duration-700">
        {service.title.charAt(0)}
      </span>

      <div className="relative z-10 w-full">
        {/* Title: whitespace-pre-line handles the forced line break */}
        <h3 className={`font-black uppercase tracking-tighter leading-[1.1] text-black group-hover:text-white transition-colors duration-500 mb-2 whitespace-pre-line ${
          isServicesPage 
            ? 'text-2xl md:text-3xl lg:text-4xl' 
            : 'text-lg md:text-xl lg:text-2xl'
        }`}>
          {formattedTitle}
        </h3>
        
        {/* Features: single reveal on hover, no internal scroll — clamped to keep the expand smooth */}
        {showFeatures && (
          <ul className="max-w-[240px] h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden space-y-1">
            {service.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="text-xs uppercase tracking-[0.1em] leading-relaxed text-zinc-400 font-bold line-clamp-2"
              >
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Subtle Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-700 group-hover:w-full" />
    </Link>
  );
}
