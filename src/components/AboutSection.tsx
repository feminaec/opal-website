import { Link } from 'react-router-dom';
import AdvantagesGrid from './AdvantagesGrid';
import { advantages } from '../constants/data';

export default function AboutSection() {
  // Preview - just show highlights without descriptions
  const highlights = advantages.map(({ title, iconColor, bgColor, borderColor }) => ({
    title,
    iconColor,
    bgColor,
    borderColor,
  }));

  return (
    <div id="about" className="relative z-10 bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-black mb-6 font-light">
            The Opal Advantage
          </h2>
          <p className="text-black/50 text-lg font-light max-w-3xl mx-auto">
            What sets us apart isn't just what we do—it's how we connect the dots.
          </p>
        </div>

        {/* Preview Highlights */}
        <div className="mb-12">
          <AdvantagesGrid items={highlights} showDescription={false} size="sm" />
        </div>

        {/* Learn More CTA */}
        <div className="text-center">
          <Link
            to="/about"
            className="group px-8 py-4 border border-black/20 text-black font-light rounded-sm transition-all duration-300 hover:bg-black/5 hover:border-black/40 inline-block"
          >
            <span className="tracking-wider">Learn More About Us</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
