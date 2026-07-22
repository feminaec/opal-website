import HeroSection from './components/HeroSection';
import PortfolioServicesSection from './components/PortfolioServicesSection';
import SEO from './components/SEO';

export default function App() {
  return (
    <>
      <SEO
        title="Media Production & Digital Marketing Agency in UAE"
        description="Opal Media is a UAE-based media production and digital marketing agency offering video production, branding, social media, SEO, and paid advertising."
        path="/"
      />
      <HeroSection />
      <PortfolioServicesSection />
    </>
  );
}