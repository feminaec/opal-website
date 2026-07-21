type About = {
  title: string;
  description?: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
};

export default function AboutGrid({
  items,
  showDescription = false,
  size = 'sm',
}: {
  items: About[];
  showDescription?: boolean;
  size?: 'sm' | 'md';
}) {
  // We use a bold, numbered approach instead of circles for a cleaner look
  const titleClass = size === 'md' ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l-2 border-black">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="p-5 sm:p-8 md:p-12 border-r-2 border-b-2 border-black group hover:bg-black transition-colors duration-500"
        >
          {/* Index Number: Large and striking */}
          <div className="mb-4 sm:mb-8 flex items-center justify-between">
            <span className="text-3xl sm:text-4xl font-black italic text-zinc-200 group-hover:text-white transition-colors duration-500">
              0{index + 1}
            </span>
            {/* Minimal Icon */}
            <svg 
              className="w-6 h-6 text-black group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>

          {/* Title: Bold & Uppercase */}
          <h3 className={`${titleClass} font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors duration-500 ${showDescription ? 'mb-6' : ''}`}>
            {item.title}
          </h3>

          {/* Description: High legibility */}
          {showDescription && item.description ? (
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">
              {item.description}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}