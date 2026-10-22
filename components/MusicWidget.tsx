"use client";

import { useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number } | null;
const KEY = "music-widget-pos";

// Floating, draggable Spotify player. Minimising only hides the card, so the music keeps playing.
export default function MusicWidget({ url }: { url: string }) {
  const id = url.match(/playlist\/([A-Za-z0-9]+)/)?.[1];
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number; moved: boolean } | null>(null);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pos, setPos] = useState<Pos>(null);
  const latest = useRef<Pos>(null);
  latest.current = pos;

  const clamp = (x: number, y: number) => {
    const el = box.current;
    const w = el?.offsetWidth ?? 0;
    const h = el?.offsetHeight ?? 0;
    return {
      x: Math.min(Math.max(8, x), innerWidth - w - 8),
      y: Math.min(Math.max(8, y), innerHeight - h - 8),
    };
  };

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "null");
      if (saved) setPos(saved);
    } catch {}
    const keepInside = () => setPos((p) => (p ? clamp(p.x, p.y) : p));
    addEventListener("resize", keepInside);
    return () => removeEventListener("resize", keepInside);
  }, []);

  // Opening or closing changes the size, so pull it back on screen if needed.
  useEffect(() => {
    setPos((p) => (p ? clamp(p.x, p.y) : p));
  }, [open]);

  if (!id) return null;

  const down = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect();
    drag.current = { dx: e.clientX - r.left, dy: e.clientY - r.top, moved: false };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const move = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const r = box.current!.getBoundingClientRect();
    if (!d.moved && Math.hypot(e.clientX - d.dx - r.left, e.clientY - d.dy - r.top) < 4) return;
    d.moved = true;
    const next = clamp(e.clientX - d.dx, e.clientY - d.dy);
    latest.current = next;
    setPos(next);
  };
  const up = () => {
    const moved = drag.current?.moved;
    drag.current = null;
    if (moved && latest.current) {
      try {
        localStorage.setItem(KEY, JSON.stringify(latest.current));
      } catch {}
    }
    return moved;
  };

  const toggle = () => {
    setOpen((o) => !o);
    setLoaded(true);
  };

  return (
    <div
      ref={box}
      className={`mw${open ? " open" : ""}`}
      style={pos ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" } : undefined}
    >
      <div
        className="mw-bar"
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={() => {
          if (!up() && !open) toggle();
        }}
      >
        <svg className="mw-disc" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3.2" className="mw-label" />
          <path d="M12 5.5a6.5 6.5 0 0 1 6.5 6.5" className="mw-groove" />
        </svg>
        <span className="mw-title">On repeat</span>
        {open ? (
          <button
            type="button"
            className="mw-btn"
            aria-label="Minimise player"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={toggle}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M3.5 8h9" />
            </svg>
          </button>
        ) : (
          <button type="button" className="mw-sr" onClick={toggle}>Open music player</button>
        )}
      </div>
      <div className="mw-body" aria-hidden={!open}>
        {loaded && (
          <iframe
            title="Vaibhav's Spotify playlist"
            src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        )}
      </div>
    </div>
  );
}
