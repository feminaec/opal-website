import React from 'react';
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
            const colorClasses: Record<string, string> = {
              teal: 'from-teal-900/20 to-gray-900/40 hover:border-teal-500/30 bg-teal-500/10 group-hover:bg-teal-500/20 w-12 h-12 rounded-sm bg-teal-500/20 border border-teal-500/30 w-6 h-6 text-teal-300 text-teal-400',
              amber: 'from-amber-900/20 to-gray-900/40 hover:border-amber-500/30 bg-amber-500/10 group-hover:bg-amber-500/20 w-12 h-12 rounded-sm bg-amber-500/20 border border-amber-500/30 w-6 h-6 text-amber-300 text-amber-400',
              violet: 'from-violet-900/20 to-gray-900/40 hover:border-violet-500/30 bg-violet-500/10 group-hover:bg-violet-500/20 w-12 h-12 rounded-sm bg-violet-500/20 border border-violet-500/30 w-6 h-6 text-violet-300 text-violet-400',
              rose: 'from-rose-900/20 to-gray-900/40 hover:border-rose-500/30 bg-rose-500/10 group-hover:bg-rose-500/20 w-12 h-12 rounded-sm bg-rose-500/20 border border-rose-500/30 w-6 h-6 text-rose-300 text-rose-400',
            };

            const iconColor = {
              teal: 'text-teal-300',
              amber: 'text-amber-300',
              violet: 'text-violet-300',
              rose: 'text-rose-300',
            };

            const featureColor = {
              teal: 'text-teal-400',
              amber: 'text-amber-400',
              violet: 'text-violet-400',
              rose: 'text-rose-400',
            };

            return (
              <div key={service.id} className={`group relative overflow-hidden rounded-sm bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} border border-white/5 hover:border-${service.color}-500/30 transition-all duration-500 p-8`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-500/10 blur-3xl group-hover:bg-${service.color}-500/20 transition-all duration-500`}></div>
                <div className="relative">
                  <div className={`w-12 h-12 rounded-sm bg-${service.color}-500/20 border border-${service.color}-500/30 flex items-center justify-center mb-6`}>
                    <svg className={`w-6 h-6 ${iconColor[service.color as keyof typeof iconColor]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white mb-3 font-light">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-white/50 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`${featureColor[service.color as keyof typeof featureColor]} mt-1`}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
            <span className="relative z-10 tracking-wide">Let's Discuss Your Project</span>
          </button>
        </div>
      </div>
    </div>
  );
}
