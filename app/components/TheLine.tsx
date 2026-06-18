"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Signature moment — "THE LINE."
 * A barber's defining skill is the line up: the crisp edge.
 * On view, a single clipper line sweeps across the panel left to right,
 * a fade ramps from skin to full beneath it, and the edge marker snaps
 * crisp at the end. One-shot on view (not scroll-coupled, not a loop),
 * so it reads as a single decisive pass of the clippers.
 *
 * Implemented with plain inline-style transforms toggled by one state flag,
 * wrapped in HTML over the SVG so transforms are bulletproof across engines
 * (no Framer pathLength, no SVG dashoffset quirks, no rAF throttling).
 * Degrades to the finished state under prefers-reduced-motion.
 */
export default function TheLine() {
  const ref = useRef<HTMLElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      setReduce(true);
      setDrawn(true);
      return;
    }

    let done = false;
    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        done = true;
        setDrawn(true);
        window.removeEventListener("scroll", check);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    const t = setTimeout(check, 60);
    return () => {
      window.removeEventListener("scroll", check);
      clearTimeout(t);
    };
  }, []);

  const ease = "cubic-bezier(0.22,1,0.36,1)";
  const T = (extra: string, delay: number, dur: number) =>
    reduce ? "none" : `${extra} ${dur}s ${ease} ${delay}s`;

  return (
    <section
      id="the-line"
      ref={ref}
      className="section"
      style={{ background: "var(--ink-2)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
          <span className="tag">The signature</span>
          <h2 className="display" style={{ fontSize: "clamp(2.6rem, 8vw, 5rem)", color: "var(--steel)", marginTop: "1rem" }}>
            It Lives And Dies <span style={{ color: "var(--orange)" }}>By The Line.</span>
          </h2>
          <p style={{ color: "var(--steel-2)", maxWidth: "34rem", margin: "1.2rem auto 0", fontSize: "1.02rem" }}>
            Anyone can run clippers. The skill is the edge: one steady pass, dead
            straight, blended so clean you cannot tell where the skin ends and the
            cut begins. That is the whole craft, and it is the whole shop.
          </p>
        </div>

        {/* The line art — HTML/CSS so transforms are bulletproof */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            position: "relative",
            height: "200px",
          }}
        >
          {/* annotation */}
          <div
            className="mono"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              color: "var(--steel-2)",
              opacity: drawn ? 1 : 0,
              transition: T("opacity", 1.45, 0.6),
            }}
          >
            ONE PASS · DEAD STRAIGHT · NO RESHAPING
          </div>

          {/* the fade field beneath the line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "44px",
              height: "120px",
              opacity: 0.7,
              background:
                "linear-gradient(0deg, #0b0c0e 0%, #20242c 35%, #5b626d 70%, #c7cdd6 100%)",
              transform: drawn ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "bottom",
              transition: T("transform", 0.55, 1.1),
            }}
          />

          {/* the clipper line — sweeps left to right */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "42px",
              height: "5px",
              borderRadius: "3px",
              background: "var(--orange)",
              transform: drawn ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: T("transform", 0, 1.3),
            }}
          />

          {/* the crisp edge marker that snaps at the end */}
          <div
            style={{
              position: "absolute",
              right: "-6px",
              top: "32px",
              width: "18px",
              height: "26px",
              borderRadius: "50%",
              border: "3px solid var(--orange)",
              opacity: drawn ? 1 : 0,
              transform: drawn ? "scale(1)" : "scale(0.6)",
              transition: reduce
                ? "none"
                : `opacity 0.4s ease 1.4s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) 1.4s`,
            }}
          />

          {/* baseline tick ruler */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "14px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                style={{ width: "2px", height: "14px", background: "var(--steel-3)", opacity: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
