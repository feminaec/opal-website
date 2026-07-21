import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../constants/data';

const CONSULTATION_MESSAGE: string = "Hello, I'm interested in booking a free consultation.";

const mailtoHref: string = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
  'Free Consultation Inquiry'
)}&body=${encodeURIComponent(CONSULTATION_MESSAGE)}`;

const phoneDigits: string = contactInfo.phone.replace(/\D/g, '');
const whatsappHref: string = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`;
const telHref: string = `tel:+${phoneDigits}`;

export default function Footer(): React.JSX.Element {
  return (
    /* Removed 'border-t-2 border-black' from the footer tag */
    <footer className="relative z-10 bg-white text-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 lg:py-16">
        
        {/* Main Boxed Layout matching Connect Page */}
        <div className="border-2 border-black flex flex-col">
          
          {/* Header Section */}
          <div className="p-6 md:p-12 border-b-2 border-black space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-[1.05]">
              Book Your <br /> Free Consultation & <br /> Marketing Audit
            </h2>
          </div>

          {/* Contact Actions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Email Tile */}
            <a
              href={mailtoHref}
              className="group p-6 md:p-8 border-b-2 sm:border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between hover:bg-black transition-colors duration-500"
            >
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-500 transition-colors duration-500">
                  Email
                </p>
                <p className="text-base sm:text-lg font-black text-black group-hover:text-white break-words transition-colors duration-500">
                  {contactInfo.email}
                </p>
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-black group-hover:text-white transition-colors duration-500">
                Click to Email →
              </p>
            </a>

            {/* WhatsApp Tile */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 border-b-2 sm:border-b-2 sm:border-l-2 lg:border-l-0 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between hover:bg-black transition-colors duration-500"
            >
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-500 transition-colors duration-500">
                  WhatsApp
                </p>
                <p className="text-base sm:text-lg font-black text-black group-hover:text-white break-words transition-colors duration-500">
                  +{phoneDigits}
                </p>
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-black group-hover:text-white transition-colors duration-500">
                Click to Chat →
              </p>
            </a>

            {/* Call Tile */}
            <a
              href={telHref}
              className="group p-6 md:p-8 border-b-2 sm:border-b-0 lg:border-r-2 border-black flex flex-col justify-between hover:bg-black transition-colors duration-500"
            >
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-500 transition-colors duration-500">
                  Call
                </p>
                <p className="text-base sm:text-lg font-black text-black group-hover:text-white break-words transition-colors duration-500">
                  +{phoneDigits}
                </p>
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-black group-hover:text-white transition-colors duration-500">
                Click to Call →
              </p>
            </a>

            {/* Location Tile */}
            <div className="p-6 md:p-8 sm:border-l-2 lg:border-l-0 border-black flex flex-col justify-between">
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                  HQ
                </p>
                <p className="text-base sm:text-lg font-black uppercase text-black">
                  {contactInfo.location}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Bar: Branding, Social Links & Copyright */}
        <div className="pt-8 mt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-5 h-7 rounded-full bg-black" />
            <span className="text-black text-lg tracking-wide font-black uppercase">
              Opal Media
            </span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href={contactInfo.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black/60 hover:text-black transition-colors p-2 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black/60 hover:text-black transition-colors p-2 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-black/70 text-sm font-bold uppercase tracking-wider">
            © 2026 Opal Media UAE
          </p>
        </div>

      </div>
    </footer>
  );
}