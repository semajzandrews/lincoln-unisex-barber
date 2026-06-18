"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BUSINESS } from "../lib/business";

const SERVICES = [
  {
    n: "01",
    title: "The Fade",
    body: "Skin, low, mid, or high. Blended clean from the skin up so the line never jumps. The cut Lincoln is known for.",
    tags: ["Skin Fade", "Taper", "Burst"],
  },
  {
    n: "02",
    title: "The Line Up",
    body: "A crisp edge on the hairline and temples. Sharp enough to hold the week, soft enough to grow in right.",
    tags: ["Edge Up", "Shape Up", "Razor Finish"],
  },
  {
    n: "03",
    title: "Beard Work",
    body: "Shaped, lined, and balanced to the cut. Hot towel and a clean razor finish so it sits the way it should.",
    tags: ["Beard Sculpt", "Hot Towel", "Razor Line"],
  },
  {
    n: "04",
    title: "Kids & Family",
    body: "Unisex chairs for every age. First cuts, school-day trims, and the whole family in one room. Patient hands, no rush.",
    tags: ["Kids' Cut", "Unisex", "Family"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section id="services" ref={ref} className="section">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.4rem", marginBottom: "3.4rem" }}>
          <div>
            <span className="tag">What we do</span>
            <h2 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--steel)", marginTop: "1rem" }}>
              The Service Menu
            </h2>
          </div>
          <p className="mono" style={{ color: "var(--steel-3)", fontSize: "0.78rem", maxWidth: "20rem", lineHeight: 1.8 }}>
            Pricing is honest and set at the chair. Call {BUSINESS.phoneDisplay} for a quote on your cut.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="svc-card"
              data-hover
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="mono" style={{ color: "var(--orange)", fontSize: "0.8rem", letterSpacing: "0.2em" }}>
                  {s.n}
                </span>
                <span
                  className="display"
                  style={{ fontSize: "3.4rem", color: "var(--ink-4)", lineHeight: 1, userSelect: "none" }}
                  aria-hidden
                >
                  {s.n}
                </span>
              </div>
              <h3 className="display" style={{ fontSize: "1.9rem", color: "var(--steel)", marginTop: "1.4rem" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--steel-2)", marginTop: "0.8rem", fontSize: "0.96rem" }}>{s.body}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.4rem" }}>
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="mono"
                    style={{
                      fontSize: "0.66rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--steel-2)",
                      border: "1px solid var(--line)",
                      padding: "0.32rem 0.6rem",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="svc-bar" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-grid { display: grid; grid-template-columns: 1fr; gap: 1.1rem; }
        @media (min-width: 720px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
        .svc-card {
          position: relative; overflow: hidden;
          background: var(--ink-2); border: 1px solid var(--line);
          padding: 1.8rem; transition: background 0.35s ease, border-color 0.35s ease;
        }
        .svc-card:hover { background: var(--ink-3); border-color: rgba(255,106,43,0.3); }
        .svc-bar {
          position: absolute; left: 0; bottom: 0; height: 3px; width: 100%;
          background: var(--orange); transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s var(--ease);
        }
        .svc-card:hover .svc-bar { transform: scaleX(1); }
      `}</style>
    </section>
  );
}
