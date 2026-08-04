"use client";

import { motion } from "motion/react";
import { BUSINESS } from "../lib/business";
import CallOrText from "./CallOrText";

const HEAD_LINES = ["A SHARP", "LINE.", "A CLEAN", "FADE."];
const PHOTO =
  "https://images.pexels.com/photos/7697226/pexels-photo-7697226.jpeg?auto=compress&cs=tinysrgb&w=1100";

export default function Hero() {
  return (
    <section
      id="top"
      style={{ position: "relative", overflow: "hidden", paddingTop: "112px" }}
    >
      {/* ambient orbs */}
      <div
        className="orb-float"
        aria-hidden
        style={{
          position: "absolute",
          top: "8%",
          right: "-6%",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--orange-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="wrap hero-grid"
        style={{ position: "relative", zIndex: 1, paddingBottom: "clamp(3rem,7vw,6rem)" }}
      >
        {/* left: editorial type */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.7rem" }}
          >
            <span className="tag">Est. East Orange, NJ</span>
            <span style={{ width: "44px", height: "1px", background: "var(--line)" }} />
            <span className="mono" style={{ fontSize: "0.72rem", color: "var(--steel-3)" }}>
              Unisex · Walk-ins welcome
            </span>
          </motion.div>

          <h1 className="display" style={{ fontSize: "clamp(3.2rem, 9vw, 6.2rem)", color: "var(--steel)", marginBottom: "1.8rem" }}>
            {HEAD_LINES.map((line, i) => (
              <span key={i} style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "block",
                    color: i % 2 === 1 ? "var(--orange)" : "var(--steel)",
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ maxWidth: "30rem", color: "var(--steel-2)", fontSize: "1.05rem", marginBottom: "2.2rem" }}
          >
            A neighborhood barbershop on Harrison Street where the line up is
            taken seriously. Fades, tapers, beard work, and kids&apos; cuts for
            the whole family. Young hands, steady precision, fair prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}
          >
            <CallOrText variant="inline" />
            <a
              href="#services"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See the Cuts
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{ marginTop: "2.4rem", display: "flex", alignItems: "center", gap: "1.1rem" }}
          >
            <span className="mono" style={{ color: "var(--orange)", fontSize: "1.05rem", letterSpacing: "0.06em" }}>
              ★ {BUSINESS.rating}
            </span>
            <span className="mono" style={{ color: "var(--steel-3)", fontSize: "0.78rem" }}>
              {BUSINESS.reviewCount} verified reviews · Ask for Alex
            </span>
          </motion.div>
        </div>

        {/* right: photo with fade-bar frame */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          <div style={{ position: "relative", display: "flex", gap: "0" }}>
            <span
              className="fadebar"
              aria-hidden
              style={{ width: "10px", flexShrink: 0, borderRadius: "2px 0 0 2px" }}
            />
            <div
              style={{
                position: "relative",
                flex: 1,
                aspectRatio: "4 / 5",
                overflow: "hidden",
                background: "var(--ink-2)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTO}
                alt="A barber giving a fresh fade in the chair at Lincoln Unisex Barber Shop"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(0.18) contrast(1.05) brightness(0.92) saturate(0.9)",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(11,12,14,0.55) 100%)",
                }}
              />
            </div>
          </div>
          {/* corner data chip */}
          <div
            style={{
              position: "absolute",
              bottom: "-18px",
              left: "-12px",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              padding: "0.8rem 1.1rem",
            }}
          >
            <div className="mono" style={{ fontSize: "0.66rem", color: "var(--steel-3)", letterSpacing: "0.16em" }}>
              MON–FRI
            </div>
            <div className="display" style={{ fontSize: "1.3rem", color: "var(--orange)" }}>
              9 — 6
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: clamp(3rem, 6vw, 4.5rem); }
        @media (min-width: 940px) {
          .hero-grid { grid-template-columns: 1.05fr 0.85fr; gap: 4rem; }
        }
      `}</style>
    </section>
  );
}
