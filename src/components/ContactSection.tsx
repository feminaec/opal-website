import { Link } from 'react-router-dom';
import { contactInfo } from '../constants/data';

export default function ContactSection() {
  return (
    <div id="connect" className="relative z-10 bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl text-black mb-6 font-light">
          Ready to Elevate Your Story?
        </h2>
        <p className="text-black/60 text-lg font-light mb-12 leading-relaxed max-w-2xl mx-auto">
          Let's create something extraordinary together. From viral social campaigns to cinematic productions and unforgettable live experiences.
        </p>

        {/* CTA Button */}
        <Link
          to="/connect"
          className="inline-block px-12 py-4 bg-black text-white font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          Book a Free Consultation
        </Link>

        {/* Contact Info Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm max-w-2xl mx-auto">
          <div>
            <p className="text-black/40 uppercase tracking-wider mb-2">Email</p>
            <a href={`mailto:${contactInfo.email}`} className="text-black/80 hover:text-black transition-colors">
              {contactInfo.email}
            </a>
          </div>
          <div>
            <p className="text-black/40 uppercase tracking-wider mb-2">Location</p>
            <p className="text-black/80">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
