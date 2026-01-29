import { Link } from 'react-router-dom';
import AdvantagesGrid from '../components/AdvantagesGrid';
import { advantages } from '../constants/data';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-12">
          <span>←</span> Back to Home
        </Link>

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl text-black mb-6 font-light">The Opal Advantage</h1>
          <p className="text-black/60 text-xl font-light max-w-3xl mx-auto">
            What sets us apart isn't just what we do—it's how we connect the dots.
          </p>
        </div>

        <div className="mb-16">
          <AdvantagesGrid items={advantages} showDescription={true} size="md" />
        </div>

        <div className="bg-gray-50 border border-black/10 rounded-sm p-12 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-6 font-light">Ready to Work Together?</h2>
          <p className="text-black/60 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary. From viral social campaigns to cinematic productions and unforgettable live experiences.
          </p>
          <Link
            to="/connect"
            className="inline-block px-12 py-4 bg-black text-white font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
