import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/data';

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Navigation({ scrolled, isMenuOpen, onMenuToggle }: NavigationProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSticky = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isSticky
          ? 'bg-white py-4 border-b-2 border-black shadow-sm'
          : 'bg-transparent py-10' 
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Unit - Increased Scale */}
        <Link to="/" className="flex items-center gap-6 group">
          <div className="relative overflow-visible">
            <img
              src="/images/Opal-logo.png"
              alt="Opal Media"
              /* Increased from h-12 to h-16/20 for better visibility */
              className={`h-10 sm:h-14 md:h-20 w-auto object-contain transition-all duration-500 ${
                !isSticky 
                  ? 'brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]' 
                  : 'brightness-100'
              } group-hover:scale-105 transition-transform`}
            />
          </div>
          
          <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase transition-all duration-500 ${
            isSticky 
              ? 'text-black opacity-100 translate-x-0' 
              : 'text-white opacity-0 -translate-x-4 pointer-events-none'
          }`}>
            OPAL MEDIA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              className={`relative text-[11px] tracking-[0.4em] uppercase font-black transition-all duration-500 group ${
                isSticky ? 'text-black hover:text-zinc-500' : 'text-white hover:text-white/60'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${
                isSticky ? 'bg-black' : 'bg-white'
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle - 44x44px minimum touch target */}
        <button
          onClick={onMenuToggle}
          className={`md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${isSticky ? 'text-black' : 'text-white'}`}
        >
          <div className="w-7 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full transition-all duration-300 ${isSticky ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full transition-all duration-300 ${isSticky ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full transition-all duration-300 ${isSticky ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-black shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              onClick={onMenuToggle}
              className="px-6 py-5 text-sm tracking-[0.2em] uppercase font-black text-black hover:bg-zinc-100 transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}