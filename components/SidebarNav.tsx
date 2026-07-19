"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { name: "top", label: "Top" },
  { name: "about", label: "About" },
  { name: "stack", label: "Stack" },
  { name: "experience", label: "Experience" },
  { name: "projects", label: "Projects" },
];

export default function SidebarNav() {
  const [active, setActive] = useState("top");
  const [wide, setWide] = useState(false);
  const navScrolling = useRef(false);
  const navTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const slowScrollTo = (targetY: number) => {
    navScrolling.current = true;
    clearTimeout(navTimer.current);
    const startY = window.scrollY;
    const dist = targetY - startY;
    const dur = Math.min(2200, Math.max(900, Math.abs(dist) * 1.2));
    navTimer.current = setTimeout(() => {
      navScrolling.current = false;
    }, dur + 150);
    const t0 = performance.now();
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, startY + dist * ease(p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const goNav = (name: string) => {
    setActive(name);
    if (name === "top") return slowScrollTo(0);
    const el = document.querySelector(`[data-section="${name}"]`);
    if (el) slowScrollTo(el.getBoundingClientRect().top + window.scrollY - 24);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (navScrolling.current) return;
        const y = window.scrollY + window.innerHeight * 0.35;
        let current = "top";
        for (const n of ["about", "stack", "experience", "projects"]) {
          const el = document.querySelector(`[data-section="${n}"]`);
          if (el && el.getBoundingClientRect().top + window.scrollY <= y) current = n;
        }
        setActive(current);
      });
    };
    const onResize = () => setWide(window.innerWidth >= 1340);
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (!wide) return null;

  return (
    <nav className="sidenav">
      <div className="sidenav-inner">
        <div className="sidenav-line" />
        {sections.map((s) => (
          <button
            key={s.name}
            className={`sidenav-item${active === s.name ? " active" : ""}`}
            onClick={() => goNav(s.name)}
          >
            <span className="sidenav-dot-wrap">
              <span className="sidenav-dot" />
            </span>
            <span className="sidenav-label">{s.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
