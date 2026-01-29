interface FormSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormSuccessModal({ isOpen, onClose }: FormSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Main Container: Sharp borders, no rounding, high contrast */}
      <div className="bg-white border-2 border-black p-8 md:p-16 max-w-2xl w-full relative overflow-hidden">
        
        {/* Background Watermark */}
        <span className="absolute -bottom-10 -right-10 text-[12rem] font-black uppercase text-black/[0.03] pointer-events-none select-none leading-none">
          OK
        </span>

        {/* Viewfinder corner accents */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-black/20" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-black/20" />

        <div className="relative z-10">
          {/* Status Label */}
          <span className="text-black text-[12px] tracking-[0.4em] uppercase font-black block border-l-4 border-black pl-4 mb-8">
            Submission / Confirmed
          </span>

          {/* Success Message */}
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-[0.8] mb-6">
            Thank <br /> You.
          </h3>
          
          <p className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-black/60 mb-12 max-w-md leading-tight">
            We have received your vision. Our production team will connect with you within 24 hours to schedule your consultation.
          </p>

          {/* Action Buttons: Stacked for mobile, side-by-side for desktop */}
          <div className="flex flex-col md:flex-row gap-0 border-2 border-black">
            <button
              onClick={onClose}
              className="flex-1 px-8 py-6 bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-zinc-800 transition-colors border-b-2 md:border-b-0 md:border-r-2 border-black"
            >
              Continue Browsing
            </button>
            <a
              href="/"
              className="flex-1 px-8 py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] hover:bg-zinc-100 transition-colors text-center"
            >
              Back to Home
            </a>
          </div>

          {/* Footer Contact */}
          <div className="mt-12 flex justify-between items-center text-zinc-400">
            <p className="text-[9px] font-black uppercase tracking-[0.3em]">Direct Support:</p>
            <a href="mailto:info@opalmediauae.com" className="text-[9px] font-black uppercase tracking-[0.3em] text-black hover:underline">
              info@opalmediauae.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}