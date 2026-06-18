"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const PHOTO =
  "https://images.pexels.com/photos/7697661/pexels-photo-7697661.jpeg?auto=compress&cs=tinysrgb&w=1000";

const STATS = [
  { k: "5.0", v: "Star rating" },
  { k: "Mon–Fri", v: "Open 9 to 6" },
  { k: "All ages", v: "Unisex chairs" },
];

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="story" ref={ref} className="section">
      <div className="wrap story-grid">
        {/* photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              right: "-16px",
              bottom: "-16px",
              border: "1px solid rgba(255,106,43,0.35)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, aspectRatio: "4 / 5", overflow: "hidden", background: "var(--ink-2)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO}
              alt="Barber tools and a clean chair inside the shop"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(0.2) contrast(1.05) brightness(0.9) saturate(0.88)",
              }}
            />
          </div>
        </motion.div>

        {/* copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <span className="tag">The shop</span>
          <h2 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", color: "var(--steel)", marginTop: "1rem", marginBottom: "1.4rem" }}>
            On Harrison Street, A Chair For Everybody
          </h2>
          <p style={{ color: "var(--steel-2)", fontSize: "1.04rem", marginBottom: "1.1rem" }}>
            Lincoln Unisex sits right at 11 North Harrison, a short walk from the
            station. It is a neighborhood shop in the truest sense: men, women,
            and kids in the same room, good music on, and barbers who actually
            care how you walk out.
          </p>
          <p style={{ color: "var(--steel-2)", fontSize: "1.04rem", marginBottom: "2rem" }}>
            The regulars come back for one reason. The work is sharp and the
            prices are fair. Ask for Alex if you want the young hand the reviews
            keep talking about, or take whoever is open. Either way you leave
            lined up.
          </p>

          <div className="story-stats">
            {STATS.map((s) => (
              <div key={s.v} style={{ borderLeft: "2px solid var(--orange)", paddingLeft: "0.9rem" }}>
                <div className="display" style={{ fontSize: "1.5rem", color: "var(--steel)" }}>{s.k}</div>
                <div className="mono" style={{ fontSize: "0.68rem", color: "var(--steel-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.2rem" }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .story-grid { display: grid; grid-template-columns: 1fr; gap: clamp(3.5rem, 7vw, 5rem); align-items: center; }
        @media (min-width: 900px) { .story-grid { grid-template-columns: 0.85fr 1.1fr; } }
        .story-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
        @media (max-width: 420px) { .story-stats { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
