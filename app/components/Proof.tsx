"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { REVIEWS, BUSINESS } from "../lib/business";

export default function Proof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section id="proof" ref={ref} className="section" style={{ background: "var(--orange)", color: "var(--ink)" }}>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.8rem", flexWrap: "wrap" }}>
          <span className="display" style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)", color: "var(--ink)" }}>
            {BUSINESS.rating}
          </span>
          <div>
            <div style={{ fontSize: "1.3rem", letterSpacing: "0.1em" }}>★★★★★</div>
            <div className="mono" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {BUSINESS.reviewCount} verified reviews
            </div>
          </div>
        </div>

        <div className="proof-grid">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderTop: "2px solid var(--ink)", paddingTop: "1.2rem" }}
            >
              <blockquote className="display" style={{ fontSize: "1.4rem", lineHeight: 1.1, color: "var(--ink)", textTransform: "none" }}>
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mono" style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "1rem", opacity: 0.7 }}>
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .proof-grid { display: grid; grid-auto-flow: column; grid-auto-columns: 84%; gap: 12px; overflow-x: auto;
          scroll-snap-type: x mandatory; margin-inline: -20px; padding: 4px 20px 8px; scrollbar-width: none; }
        .proof-grid::-webkit-scrollbar { display: none; }
        .proof-grid > figure { scroll-snap-align: start; background: rgba(11,12,14,0.08); border-radius: 12px; padding: 1.2rem 1.1rem 1.3rem !important; border-top: 0 !important; }
        @media (min-width: 760px) { .proof-grid { grid-auto-flow: row; grid-auto-columns: auto; overflow: visible; margin-inline: 0; padding: 0; }
          .proof-grid > figure { background: none; border-radius: 0; padding: 1.2rem 0 0 !important; border-top: 2px solid var(--ink) !important; } }
        @media (min-width: 760px) { .proof-grid { grid-template-columns: repeat(3, 1fr); gap: 2.4rem; } }
      `}</style>
    </section>
  );
}
