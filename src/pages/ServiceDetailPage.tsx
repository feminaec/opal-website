import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { services } from '../constants/data';

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

  const getIconPath = (icon: string) => {
    const paths = {
      lightning: 'M13 10V3L4 14h7v7l9-11h-7z',
      film: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    };
    return paths[icon as keyof typeof paths] || paths.lightning;
  };

  const getIconClasses = (color: string) => {
    const classes = {
      teal: { bg: 'bg-teal-500/20', border: 'border-teal-500/30', text: 'text-teal-300', bullet: 'text-teal-400' },
      amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-300', bullet: 'text-amber-400' },
      violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-300', bullet: 'text-violet-400' },
      rose: { bg: 'bg-rose-500/20', border: 'border-rose-500/30', text: 'text-rose-300', bullet: 'text-rose-400' },
    };
    return classes[color as keyof typeof classes] || classes.teal;
  };

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
