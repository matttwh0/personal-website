"use client";

import { useEffect } from "react";

/** Fades cards in with a staggered rise as they enter the viewport. */
export default function RevealManager() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-anim]"));
    let batch = 0;
    let lastTime = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        const now = performance.now();
        if (now - lastTime > 300) batch = 0;
        lastTime = now;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const delay = batch++ * 90;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("revealed");
          timers.push(
            setTimeout(() => {
              el.style.removeProperty("transition-delay");
              el.classList.add("settled");
            }, 800 + delay)
          );
          io.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
