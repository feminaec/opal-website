type Advantage = {
  title: string;
  description?: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
};

export default function AdvantagesGrid({
  items,
  showDescription = false,
  size = 'sm',
}: {
  items: Advantage[];
  showDescription?: boolean;
  size?: 'sm' | 'md';
}) {
  const circleClasses = size === 'md' ? 'w-20 h-20' : 'w-16 h-16';
  const svgClasses = size === 'md' ? 'w-10 h-10' : 'w-8 h-8';
  const titleClass = size === 'md' ? 'text-xl' : 'text-lg';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
      {items.map((item, index) => (
        <div key={index} className="text-center group">
          <div className="mb-6 flex justify-center">
            <div className={`${circleClasses} rounded-full bg-gray-100 border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <svg className={`${svgClasses} text-black/60`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
          </div>
          <h3 className={`${titleClass} text-black ${showDescription ? 'mb-3' : ''} font-light`}>{item.title}</h3>
          {showDescription && item.description ? (
            <p className="text-black/50 text-sm leading-relaxed">{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
