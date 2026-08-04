"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BUSINESS } from "../lib/business";
import CallOrText from "./CallOrText";

export default function Visit() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section id="visit" ref={ref} className="section">
      <div className="wrap">
        <span className="tag">Find the chair</span>
        <h2 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--steel)", marginTop: "1rem", marginBottom: "2.8rem" }}>
          Pull Up On Harrison
        </h2>

        <div className="visit-grid">
          {/* details + hours */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <div className="mono" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.6rem" }}>
                Where
              </div>
              <a
                href={BUSINESS.mapsCid}
                target="_blank"
                rel="noopener noreferrer"
                className="display"
                style={{ fontSize: "1.5rem", color: "var(--steel)", textTransform: "none", display: "block", lineHeight: 1.2 }}
              >
                {BUSINESS.address}
                <br />
                {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
              </a>
            </div>

            <div>
              <div className="mono" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.6rem" }}>
                Call or text
              </div>
              <a href={BUSINESS.phoneHref} className="display" style={{ fontSize: "1.5rem", color: "var(--steel)", textTransform: "none", display: "block" }}>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.smsHref}
                className="mono"
                style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--steel-3)", marginTop: "0.5rem", display: "inline-block" }}
              >
                Or text us a pic of the cut →
              </a>
            </div>

            <div>
              <div className="mono" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.8rem" }}>
                Hours
              </div>
              <div style={{ borderTop: "1px solid var(--line)" }}>
                {BUSINESS.hours.map((h) => {
                  const closed = h.open === "Closed";
                  return (
                    <div
                      key={h.day}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.6rem 0",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <span className="mono" style={{ fontSize: "0.82rem", color: closed ? "var(--steel-3)" : "var(--steel)", letterSpacing: "0.08em" }}>
                        {h.day}
                      </span>
                      <span className="mono" style={{ fontSize: "0.82rem", color: closed ? "var(--steel-3)" : "var(--steel-2)" }}>
                        {closed ? "Closed" : `${h.open} — ${h.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>
              <CallOrText variant="inline" style={{ marginTop: "1.6rem" }} />
            </div>
          </motion.div>

          {/* map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ position: "relative", minHeight: "420px", border: "1px solid var(--line)", overflow: "hidden", background: "var(--ink-2)" }}
          >
            <iframe
              title={`Map to ${BUSINESS.name}`}
              src={BUSINESS.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0, filter: "grayscale(0.4) contrast(1.05) brightness(0.85) invert(0.92) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        .visit-grid { display: grid; grid-template-columns: 1fr; gap: 2.6rem; }
        @media (min-width: 880px) { .visit-grid { grid-template-columns: 0.9fr 1.1fr; gap: 3.4rem; } }
      `}</style>
    </section>
  );
}
