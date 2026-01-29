import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSuccessModal from '../components/FormSuccessModal';
import { contactInfo } from '../constants/data';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Select Service Interest',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: 'Select Service Interest', message: '' });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <FormSuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-12">
          <span>←</span> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl text-black mb-6 font-light">
            Ready to Elevate Your Story?
          </h1>
          <p className="text-black/60 text-xl font-light leading-relaxed">
            Let's create something extraordinary together. From viral social campaigns to cinematic productions and unforgettable live experiences—Opal Media is your partner in premium brand storytelling.
          </p>
        </div>

        <div className="bg-gray-50 border border-black/10 rounded-sm p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border border-black/20 rounded-sm px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-black/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-black/20 rounded-sm px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-black/50 transition-colors"
            />
          </div>
          <div className="mb-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white border border-black/20 rounded-sm px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-black/50 transition-colors"
            />
          </div>
          <div className="mb-6">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white border border-black/20 rounded-sm px-4 py-3 text-black/60 focus:outline-none focus:border-black/50 transition-colors"
            >
              <option>Select Service Interest</option>
              <option>Digital & Social</option>
              <option>Full Film Production</option>
              <option>Live Events & Theatre Arts</option>
              <option>Talent Incubator</option>
              <option>Multiple Services</option>
            </select>
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white border border-black/20 rounded-sm px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:border-black/50 transition-colors resize-none"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto px-12 py-4 bg-black text-white font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Book a Free Consultation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="bg-gray-50 border border-black/10 rounded-sm p-6 text-center">
            <p className="text-black/40 uppercase tracking-wider mb-2">Email</p>
            <a href={`mailto:${contactInfo.email}`} className="text-black/80 hover:text-black transition-colors">
              {contactInfo.email}
            </a>
          </div>
          <div className="bg-gray-50 border border-black/10 rounded-sm p-6 text-center">
            <p className="text-black/40 uppercase tracking-wider mb-2">Location</p>
            <p className="text-black/80">{contactInfo.location}</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:text-black hover:border-black/40 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:text-black hover:border-black/40 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:text-black hover:border-black/40 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
