import { useEffect, useState } from 'react';

export default function ScrollTruck() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setOffset(Math.min(260, Math.max(0, progress * 260)));
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    return () => window.removeEventListener('scroll', updateOffset);
  }, []);

  return (
    <div className="scroll-truck">
      <div className="truck-card" style={{ transform: `translateY(${offset}px)` }}>
        <svg viewBox="0 0 64 44" className="truck-icon" aria-hidden="true">
          <path d="M4 28h40l6 8h6v-8h4V16H40l-4-6H4v18Zm38 0h-4V10h4v18Zm10 6h-4v-6h4v6Zm-20 0H8V30h24v4Zm18-16h-6V16h6v2Zm-30 0V14h26v2H22Z" fill="currentColor" />
        </svg>
        <div className="truck-label">Scroll</div>
      </div>
    </div>
  );
}
