import { Link } from 'react-router-dom';
import { services } from '../constants/data';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-12">
          <span>←</span> Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl text-black mb-6 font-light">Our Services</h1>
          <p className="text-black/60 text-xl font-light max-w-3xl">
            From concept to delivery, we transform ideas into unforgettable experiences across every platform and medium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} showFeatures={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
