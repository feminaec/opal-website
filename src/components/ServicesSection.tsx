import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../constants/data';

export default function ServicesSection() {
  return (
    <div id="services" className="relative z-10 bg-gradient-to-b from-black via-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            <span className="text-amber-300/60 text-xs tracking-[0.3em] uppercase font-light">
              Services
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6 font-light">
            The 360° Creative Engine
          </h2>
          <p className="text-white/50 text-lg font-light max-w-3xl mx-auto">
            From concept to delivery, we transform ideas into unforgettable experiences across every platform and medium.
          </p>
        </div>

        {/* Four Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const getGradientClasses = (color: string) => {
              const classes = {
                teal: 'from-teal-900/20 to-gray-900/40 border-teal-500/30',
                amber: 'from-amber-900/20 to-gray-900/40 border-amber-500/30',
                violet: 'from-violet-900/20 to-gray-900/40 border-violet-500/30',
                rose: 'from-rose-900/20 to-gray-900/40 border-rose-500/30',
              };
              return classes[color as keyof typeof classes] || classes.teal;
            };

            const getIconClasses = (color: string) => {
              const classes = {
                teal: { bg: 'bg-teal-500/20', border: 'border-teal-500/30', text: 'text-teal-300', bullet: 'text-teal-400', glow: 'bg-teal-500/10 group-hover:bg-teal-500/20' },
                amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-300', bullet: 'text-amber-400', glow: 'bg-amber-500/10 group-hover:bg-amber-500/20' },
                violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-300', bullet: 'text-violet-400', glow: 'bg-violet-500/10 group-hover:bg-violet-500/20' },
                rose: { bg: 'bg-rose-500/20', border: 'border-rose-500/30', text: 'text-rose-300', bullet: 'text-rose-400', glow: 'bg-rose-500/10 group-hover:bg-rose-500/20' },
              };
              return classes[color as keyof typeof classes] || classes.teal;
            };

            const getIconPath = (icon: string) => {
              const paths = {
                lightning: 'M13 10V3L4 14h7v7l9-11h-7z',
                film: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
                lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
              };
              return paths[icon as keyof typeof paths] || paths.lightning;
            };

            const gradientClasses = getGradientClasses(service.color);
            const iconClasses = getIconClasses(service.color);

            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className={`group relative overflow-hidden rounded-sm bg-gradient-to-br ${gradientClasses} border border-white/5 hover:border-${service.color}-500/30 transition-all duration-500 p-8 block`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${iconClasses.glow} blur-3xl transition-all duration-500`}></div>
                <div className="relative">
                  <div className={`w-12 h-12 rounded-sm ${iconClasses.bg} border ${iconClasses.border} flex items-center justify-center mb-6`}>
                    <svg className={`w-6 h-6 ${iconClasses.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={getIconPath(service.icon)} />
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white mb-3 font-light">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-white/50 text-sm mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`${iconClasses.bullet} mt-1`}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                    Learn more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/connect"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            <span className="relative z-10 tracking-wide">Let's Discuss Your Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
