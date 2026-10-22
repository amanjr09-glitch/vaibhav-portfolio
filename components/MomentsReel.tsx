"use client";

import { useEffect, useRef, useState } from "react";
import { moments } from "@/lib/content";

export default function MomentsReel() {
  const reel = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = () => {
    const el = reel.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    sync();
    addEventListener("resize", sync);
    return () => removeEventListener("resize", sync);
  }, []);

  const go = (dir: number) => {
    const el = reel.current;
    if (!el) return;
    const instant = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: instant ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="reel-bar">
        <span className="hand" aria-hidden="true">
          swipe through
          <svg viewBox="0 0 46 20">
            <path className="ink draw" pathLength={1} d="M2 12 C 14 4, 28 16, 42 9 M34 4 L 43 9 L 36 16" />
          </svg>
        </span>
        <div className="arrows">
          <button type="button" aria-label="Previous photos" disabled={atStart} onClick={() => go(-1)}>
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 4 6 9l5 5" />
            </svg>
          </button>
          <button type="button" aria-label="Next photos" disabled={atEnd} onClick={() => go(1)}>
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m7 4 5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
      <div className="reel" ref={reel} onScroll={sync} tabIndex={0} aria-label="Personal photos, scroll sideways">
        {moments.map((m) => (
          <figure
            key={m.src}
            className={`snap${m.tape ? " tape" : ""}${m.tall ? " tall" : ""}`}
            style={{ "--r": `${m.tilt}deg` } as React.CSSProperties}
          >
            <img
              src={`/img/moments/${m.src}`}
              alt={m.alt}
              width={m.width}
              height={m.height}
              loading="lazy"
              decoding="async"
              style={m.focus ? { objectPosition: m.focus } : undefined}
            />
            <figcaption className="hand">{m.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
