import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 leading-tight font-bold px-4">
          <span className="text-white/70 tracking-wider">
            Opal Media
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4">
          From viral social campaigns to broadcast-quality productions and
          immersive live experiences—your premium storytelling partner in the
          UAE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/connect"
            className="group px-8 py-4 border border-white/30 text-white font-light rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 tracking-wide"
          >
            Book a Consultation
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            to="/portfolio"
            className="group px-8 py-4 border border-white/30 text-white font-light rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 tracking-wide"
          >
            View Our Work
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white/10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10"></div>
    </div>
  );
}
