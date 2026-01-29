import { Link } from 'react-router-dom';
import { services } from '../constants/data';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  // Show only first 2 services as preview
  const previewServices = services.slice(0, 2);

  return (
    <div id="services" className="relative z-10 bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
            <span className="text-black/40 text-xs tracking-[0.3em] uppercase font-light">
              Services
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-black mb-6 font-light">
            The 360° Creative Engine
          </h2>
          <p className="text-black/50 text-lg font-light max-w-3xl mx-auto">
            From concept to delivery, we transform ideas into unforgettable experiences across every platform and medium.
          </p>
        </div>

        {/* Service Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {previewServices.map((service) => (
            <ServiceCard key={service.id} service={service} showFeatures={false} />
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="group px-8 py-4 border border-black/20 text-black font-light rounded-sm transition-all duration-300 hover:bg-black/5 hover:border-black/40 inline-block"
          >
            <span className="tracking-wider">View All Services</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
