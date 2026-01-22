export default function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-amber-200 opacity-90"></div>
            <span className="text-white text-lg tracking-wide font-bold">Opal Media</span>
          </div>
          <p className="text-white/40 text-sm">© 2026 Opal Media UAE. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white/80 transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white/80 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
