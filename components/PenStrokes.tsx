"use client";

import { useEffect } from "react";

// Draws each handwritten stroke once its SVG scrolls into view.
export default function PenStrokes() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll(".draw").forEach((p) => {
      const svg = p.closest("svg");
      if (svg) io.observe(svg);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
