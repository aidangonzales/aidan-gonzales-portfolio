"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay (ms) before the reveal transition starts — useful for staggering. */
  delay?: number;
  className?: string;
};

/**
 * Scroll-triggered reveal wrapper.
 * Fades and slides its children into view when they enter the viewport.
 *
 * Accessibility & robustness:
 * - Respects `prefers-reduced-motion` (shows content immediately, no motion).
 * - Falls back to visible if IntersectionObserver is unavailable.
 * - Content is always in the DOM (only visually transitioned), so it stays
 *   crawlable and accessible.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced-motion and lack of observer support.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      // Show immediately (no motion). Defer to the next frame so we don't
      // call setState synchronously inside the effect body.
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // reveal once, then stop observing
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
