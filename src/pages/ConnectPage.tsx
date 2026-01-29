import React, { useState } from 'react';
import FormSuccessModal from '../components/FormSuccessModal';
import { contactInfo } from '../constants/data';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SERVICE INTEREST',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData({ name: '', email: '', phone: '', service: 'SERVICE INTEREST', message: '' });
      }
    } catch {
      // Form submission failed silently
    }
  };

  return (
    <>
      <FormSuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      
      {/* Mobile: auto height with scroll. Desktop: fixed viewport height */}
      <div className="min-h-screen lg:h-[calc(100vh-140px)] lg:mb-[140px] bg-white pt-24 lg:overflow-hidden flex items-center animate-fade-in">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full lg:h-full flex flex-col py-6 lg:py-0">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-black lg:flex-1">
            
            {/* LEFT SIDE: Scaled down to fit one screen */}
            <div className="p-6 md:p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
              <div className="space-y-4">
                <span className="text-black text-xs tracking-[0.3em] uppercase font-black block border-l-4 border-black pl-4">
                  Inquiry / Production
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-[0.85]">
                  Ready to <br /> Elevate <br /> Your Story?
                </h1>
              </div>

              {/* Minimal Bottom Grid */}
              <div className="grid grid-cols-2 gap-4 border-t-2 border-black pt-6">
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Direct</p>
                  <p className="text-xs sm:text-sm font-black uppercase text-black break-words">{contactInfo.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">HQ</p>
                  <p className="text-xs sm:text-sm font-black uppercase text-black">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Tightened Form Grid */}
            <form onSubmit={handleSubmit} className="flex flex-col lg:h-full bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-4 sm:p-5 border-b-2 md:border-r-2 border-black text-sm font-black uppercase tracking-wider focus:bg-zinc-50 outline-none placeholder:text-zinc-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 sm:p-5 border-b-2 border-black text-sm font-black uppercase tracking-wider focus:bg-zinc-50 outline-none placeholder:text-zinc-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-4 sm:p-5 border-b-2 md:border-r-2 border-black text-sm font-black uppercase tracking-wider focus:bg-zinc-50 outline-none placeholder:text-zinc-300"
                />
                <div className="relative border-b-2 border-black">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-full p-4 sm:p-5 text-sm font-black uppercase tracking-wider focus:bg-zinc-50 outline-none appearance-none cursor-pointer text-black bg-transparent"
                  >
                    <option>SERVICE INTEREST</option>
                    <option>Digital & Social</option>
                    <option>Full Film Production</option>
                    <option>Live Events & Theatre Arts</option>
                    <option>Talent Incubator</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="PROJECT DETAILS..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="md:col-span-2 p-4 sm:p-5 border-b-2 border-black text-sm font-black uppercase tracking-wider focus:bg-zinc-50 outline-none resize-none lg:flex-1 min-h-[100px] placeholder:text-zinc-300"
                ></textarea>
              </div>

              {/* CTA: Moves higher up and stays out of the bottom-right corner */}
              <div className="p-0 flex">
                <button
                  type="submit"
                  className="w-full py-6 sm:py-8 bg-black text-white text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] hover:bg-zinc-800 transition-colors duration-500 min-h-[56px]"
                >
                  Send Inquiry →
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}