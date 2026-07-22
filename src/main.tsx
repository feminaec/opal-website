import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import './index.css'

// Lazy-load every page — each becomes its own small JS chunk
const App = React.lazy(() => import('./App'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'))
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ConnectPage = React.lazy(() => import('./pages/ConnectPage'))

function AppLayout() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isConnectPage = location.pathname === '/connect';

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </Suspense>

      {!isConnectPage && <Footer />}

      <WhatsAppButton />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);