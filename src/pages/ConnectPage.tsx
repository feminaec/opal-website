import React from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ConnectPage(): React.JSX.Element {
  return (
    <div className="bg-white animate-fade-in pt-20 sm:pt-28">
      <SEO
        title="Contact Us"
        description="Get in touch with Opal Media by phone, email, or WhatsApp to discuss your video production or digital marketing project."
        path="/connect"
      />
      <Footer />
    </div>
  );
}