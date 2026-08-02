import HeroSection from './components/HeroSection';
import PortfolioServicesSection from './components/PortfolioServicesSection';
import SEO from './components/SEO';

export default function App() {
  return (
    <>
      <SEO
        title="Dubai Based Media Production & Digital Marketing Company"
        description="Opal Media is a Dubai-based media production and digital marketing agency offering video production, branding, social media, SEO, and paid advertising."
        path="/"
      />
      <HeroSection />
      <PortfolioServicesSection />
    </>
  );
}