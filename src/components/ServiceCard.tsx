import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
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
  
  // Forces a clean break for "Digital & Social"
  const formattedTitle = service.title.includes('&') 
    ? service.title.replace(' & ', ' &\n') 
    : service.title;

  return (
    <Link 
      to={`/services/${service.id}`} 
      className="group relative flex flex-col items-start justify-end p-6 md:p-8 border border-black/[0.05] h-full w-full overflow-hidden bg-white transition-all duration-500 hover:bg-black"
    >
      {/* Background Watermark: Subtly shunted to the top right corner */}
      <span className="absolute top-4 -right-2 text-[6rem] sm:text-[10rem] md:text-[14rem] font-black uppercase text-black/[0.015] group-hover:text-white/[0.02] pointer-events-none select-none leading-none transition-all duration-700">
        {service.title.charAt(0)}
      </span>

      <div className="relative z-10 w-full">
        {/* Title: whitespace-pre-line handles the forced line break */}
        <h3 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] text-black group-hover:text-white transition-colors duration-500 mb-4 whitespace-pre-line">
          {formattedTitle}
        </h3>
        
        {/* Description: Expands slightly on hover */}
        <p className="text-xs uppercase tracking-[0.1em] leading-relaxed text-zinc-400 font-bold max-w-[200px] h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {service.description}
        </p>
      </div>

      {/* Subtle Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-700 group-hover:w-full" />
    </Link>
  );
}