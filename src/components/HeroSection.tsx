import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-0 overflow-hidden bg-black">
      {/* Video Background - Full Opacity */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover" // Removed opacity-60 to show full color
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Only a subtle bottom vignette to lift the buttons, leaving the rest untouched */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Headline - Added a subtle text-shadow for readability without darkening the video */}
        <h1 className="mb-6 px-4">
          <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.85] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            Opal Media
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white text-sm sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          From viral social campaigns to broadcast-quality productions and
          immersive live experiences—your premium storytelling partner in the
          UAE.
        </p>

        {/* CTA Buttons - Using slight glassmorphism to let video peek through */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/connect"
            className="group px-8 sm:px-10 py-4 bg-white text-black font-bold rounded-none transition-all duration-300 hover:scale-105 tracking-widest uppercase text-sm min-h-[48px] flex items-center"
          >
            Book a Consultation
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            to="/portfolio"
            className="group px-8 sm:px-10 py-4 border-2 border-white bg-black/20 backdrop-blur-sm text-white font-bold rounded-none transition-all duration-300 hover:bg-white hover:text-black tracking-widest uppercase text-sm min-h-[48px] flex items-center"
          >
            View Our Work
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}