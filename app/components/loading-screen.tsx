"use client";

import { useEffect, useState } from "react";

// 5-pointed star: center(100,100), outer r=50, inner r=20
const STAR =
  "100,50 111.76,83.82 147.55,84.55 119.02,106.18 129.39,140.45 100,120 70.61,140.45 80.98,106.18 52.45,84.55 88.24,83.82";

// approximate perimeter
const PERIM = 358;

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [gone,   setGone]   = useState(false);

  useEffect(() => {
    const MIN = 800;
    const start = Date.now();
    const done = () => {
      const wait = Math.max(0, MIN - (Date.now() - start));
      setTimeout(() => setFading(true), wait);
      setTimeout(() => setGone(true), wait + 700);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width="320"
        height="320"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="glow-cyn" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          <style>{`
            @keyframes race {
              from { stroke-dashoffset: 0; }
              to   { stroke-dashoffset: -${PERIM}; }
            }
          `}</style>
        </defs>

        {/* static cyan outline */}
        <polygon
          points={STAR}
          fill="none"
          stroke="#00d4ff"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeOpacity="0.35"
        />

        {/* racing cyan segment */}
        <polygon
          points={STAR}
          fill="none"
          stroke="#00d4ff"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeDasharray={`70 ${PERIM - 70}`}
          strokeDashoffset="0"
          filter="url(#glow-cyn)"
          style={{ animation: "race 2s linear infinite" }}
        />

      </svg>
    </div>
  );
}
