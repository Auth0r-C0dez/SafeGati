import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, animation = 'fade-up', threshold = 0.15, rootMargin = '-20% 0px -20% 0px', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`scroll-reveal scroll-reveal-${animation} ${visible ? 'visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
