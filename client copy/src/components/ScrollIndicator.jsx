import { useEffect, useRef, useState } from 'react';

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const updateTarget = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      if (frameRef.current === null) animateProgress();
    };

    const animateProgress = () => {
      setProgress((current) => {
        const next = current + (targetRef.current - current) * 0.18;
        if (Math.abs(next - targetRef.current) < 0.001) {
          frameRef.current = null;
          return targetRef.current;
        }
        frameRef.current = window.requestAnimationFrame(animateProgress);
        return next;
      });
    };

    updateTarget();
    window.addEventListener('scroll', updateTarget, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateTarget);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const lineHeight = 16 + progress * 128;
  const translateY = Math.min(160, Math.max(0, progress * (160 - lineHeight)));
  const lineWidth = 16 + progress * 6;

  return (
    <div className="scroll-indicator">
      <div className="scroll-indicator-track">
        <div
          className="scroll-indicator-dot"
          style={{
            height: `${lineHeight}px`,
            width: `${lineWidth}px`,
            transform: `translate(-50%, ${translateY}px)`,
          }}
        />
      </div>
    </div>
  );
}
