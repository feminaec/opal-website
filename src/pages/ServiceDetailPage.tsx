import { Link, useParams } from 'react-router-dom';
import { services } from '../constants/data';
import { getIconPath, getIconClasses } from '../components/ServiceCard';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-amber-400 hover:text-amber-300">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const iconClasses = getIconClasses(service.color);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12">
          <span>←</span> Back to Services
        </Link>

        <div className="mb-12">
          <div className={`w-20 h-20 rounded-sm ${iconClasses.bg} border ${iconClasses.border} flex items-center justify-center mb-8`}>
            <svg className={`w-10 h-10 ${iconClasses.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={getIconPath(service.icon)} />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-6 font-light">{service.title}</h1>
          <p className="text-white/70 text-xl font-light leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 mb-12">
          <h2 className="text-3xl text-white mb-6 font-light">What We Offer</h2>
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className={`${iconClasses.bullet} mt-1.5 text-xl`}>•</span>
                <span className="text-white/70 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Link
            to="/connect"
            className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            Get Started with {service.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
