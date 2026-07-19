"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const slowScrollTo = (targetY: number) => {
  const startY = window.scrollY;
  const dist = targetY - startY;
  const dur = Math.min(2200, Math.max(900, Math.abs(dist) * 1.2));
  const t0 = performance.now();
  const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / dur);
    window.scrollTo(0, startY + dist * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

export default function RightRail() {
  const rail = site.rightRail;
  const [wide, setWide] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const [scroll, setScroll] = useState(0);
  const [caught, setCaught] = useState(false);
  const catchTime = useRef(0);

  useEffect(() => {
    const onResize = () => setWide(window.innerWidth >= 1340);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (rail !== "location clock") return;
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 20000);
    return () => clearInterval(t);
  }, [rail]);

  useEffect(() => {
    if (rail !== "fly-line doodle") return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        setScroll((prev) => (Math.abs(p - prev) > 0.002 ? p : prev));
        if (p >= 0.97) {
          catchTime.current = Date.now();
          setCaught(true);
        } else if (p < 0.85) {
          setCaught((c) => (c && Date.now() - catchTime.current > 3500 ? false : c));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rail]);

  if (!wide || rail === "off") return null;

  if (rail === "fly-line doodle") {
    const lineLen = Math.round(90 + scroll * Math.max(120, window.innerHeight - 250));
    return (
      <div className="flyrig">
        <div className="flyrig-line" style={{ height: lineLen }} />
        <div className="flyrig-end">
          <svg className="flyrig-hook" viewBox="0 0 34 42">
            <circle cx="14" cy="4" r="3.2" fill="none" stroke="#c06a35" strokeWidth="2" />
            <path
              d="M14 7 L14 22 C 14 33, 27 33, 27 23 L 27 19"
              fill="none"
              stroke="#c06a35"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M27 19 l-3 2.6 M27 19 l3.2 2.2"
              fill="none"
              stroke="#c06a35"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg className={`flyrig-fish${caught ? " caught" : ""}`} viewBox="0 0 80 44">
            <path
              d="M68 22 C 58 8, 32 6, 20 18 L 8 8 L 12 22 L 8 36 L 20 26 C 32 38, 58 36, 68 22 Z"
              fill="#5c7a6a"
              stroke="#41584c"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="M46 12 C 40 16, 40 28, 46 32" fill="none" stroke="#41584c" strokeWidth="1.3" opacity=".55" />
            <path d="M40 20 C 34 14, 28 14, 25 18" fill="none" stroke="#41584c" strokeWidth="1.3" opacity=".4" />
            <circle cx="60" cy="19" r="2.2" fill="#f4f6f4" stroke="#2b2f2c" strokeWidth="1" />
            <path d="M68 22 l3 2" stroke="#41584c" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  let localTime = "";
  if (rail === "location clock") {
    try {
      localTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/Los_Angeles",
      }).format(now ?? new Date());
    } catch {
      localTime = "";
    }
  }

  return (
    <div className="rail">
      {rail === "now status" && (
        <div className="rail-col rail-now">
          <span className="rail-now-dot" />
          <span className="rail-vert rail-now-label">Open to work</span>
          <span className="rail-vert rail-now-loc">San Diego, CA</span>
        </div>
      )}
      {rail === "location clock" && (
        <div className="rail-col rail-clock">
          <svg viewBox="0 0 24 24">
            <g fill="none" stroke="#9db3a6" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </g>
          </svg>
          <span className="rail-vert rail-clock-city">San Diego</span>
          <span className="rail-vert rail-clock-time">{localTime}</span>
        </div>
      )}
      {rail === "back-to-top bobber" && (
        <button className="rail-bobber" onClick={() => slowScrollTo(0)} aria-label="Back to top">
          <svg viewBox="0 0 36 50">
            <line x1="18" y1="2" x2="18" y2="14" stroke="#7f8c84" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="30" r="14" fill="#f4f6f4" stroke="#cbd6cd" strokeWidth="1.5" />
            <path d="M4 30 A14 14 0 0 1 32 30 Z" fill="#d95b47" />
            <line x1="4" y1="30" x2="32" y2="30" stroke="#b8462f" strokeWidth="1.5" />
            <circle cx="18" cy="30" r="2.4" fill="#fff" />
          </svg>
          <span className="rail-vert rail-bobber-label">Top</span>
        </button>
      )}
    </div>
  );
}
