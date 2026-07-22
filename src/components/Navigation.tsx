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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSticky
          ? 'bg-white py-4 border-b-2 border-black shadow-sm'
          : 'bg-transparent py-8' 
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Unit */}
        <Link to="/" className="flex items-center gap-6 group">
          <div className="relative overflow-visible">
            <img
              src="/images/Opal-logo.webp"
              alt="Opal Media"
              width={500}
              height={139}
              className="h-10 sm:h-14 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase transition-all duration-500 ${
            isSticky 
              ? 'text-black opacity-100 translate-x-0' 
              : 'text-white opacity-0 -translate-x-4 pointer-events-none'
          }`}>
          </span>
        </Link>

        {/* Desktop Navigation - Boxed & Larger */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => {
            const targetPath = link.id === 'home' ? '/' : `/${link.id}`;
            const isActive = location.pathname === targetPath;

            return (
              <Link
                key={link.id}
                to={targetPath}
                className={`px-5 py-2.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-black border-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : isSticky
                    ? 'text-black border-black hover:bg-black hover:text-white'
                    : 'text-white border-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
        <div className="flex flex-col py-4 px-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              onClick={onMenuToggle}
              className="px-6 py-4 text-sm tracking-[0.2em] uppercase font-black text-black border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}