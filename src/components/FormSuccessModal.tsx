interface FormSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormSuccessModal({ isOpen, onClose }: FormSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-amber-500/30 rounded-sm p-8 md:p-12 max-w-lg w-full mx-4 shadow-2xl shadow-amber-500/20 animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h3 className="text-2xl md:text-3xl text-white text-center mb-4 font-light">
          Thank You!
        </h3>
        <p className="text-white/70 text-center mb-8 leading-relaxed">
          We've received your consultation request and will get back to you within 24 hours.
          Our team is excited to discuss your project!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50"
          >
            Continue Browsing
          </button>
          <a
            href="/"
            className="px-8 py-3 border border-white/30 text-white text-center font-light rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Back to Home
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm mb-2">Need immediate assistance?</p>
          <a href="mailto:info@opalmediauae.com" className="text-amber-500 hover:text-amber-400 transition-colors text-sm">
            info@opalmediauae.com
          </a>
        </div>
      </div>
    </div>
  );
}
