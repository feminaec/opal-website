import { Link } from 'react-router-dom';
import { navLinks } from '../constants/data';

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Navigation({ scrolled, isMenuOpen, onMenuToggle }: NavigationProps) {
  const getNavLink = (linkId: string) => {
    const routes: Record<string, string> = {
      home: '/',
      services: '/services',
      portfolio: '/portfolio',
      about: '/about',
      connect: '/connect',
    };
    return routes[linkId] || '/';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-7 h-10 rounded-full bg-black opacity-90"></div>
          <span className={`text-black text-3xl tracking-wide font-bold transition-all duration-300 ${
            scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}>
            Opal Media
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={getNavLink(link.id)}
              className="text-black/70 hover:text-black transition-colors duration-300 text-sm tracking-wider uppercase font-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-black/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={getNavLink(link.id)}
              onClick={onMenuToggle}
              className="block w-full text-left text-black/70 hover:text-black transition-colors duration-300 text-sm tracking-wider uppercase font-light"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
