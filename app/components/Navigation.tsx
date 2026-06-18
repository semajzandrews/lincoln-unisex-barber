"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS } from "../lib/business";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "The Line", href: "#the-line" },
  { label: "The Shop", href: "#story" },
  { label: "Visit", href: "#visit" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled ? "rgba(11,12,14,0.78)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        {/* wordmark with fade-bar accent */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
        >
          <span
            className="fadebar"
            style={{
              width: "5px",
              height: "30px",
              display: "inline-block",
              borderRadius: "1px",
            }}
            aria-hidden
          />
          <span
            className="display"
            style={{ fontSize: "1.5rem", color: "var(--steel)", letterSpacing: "0.02em" }}
          >
            Lincoln
          </span>
        </a>

        {/* desktop nav */}
        <nav className="nav-desk" style={{ alignItems: "center", gap: "2.4rem" }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="mono"
              style={{
                fontSize: "0.76rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--steel-2)",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--steel-2)")}
            >
              {l.label}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phoneE164}`} className="btn-primary" style={{ padding: "0.7rem 1.3rem" }}>
            Book a Chair
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="nav-burger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <div style={{ width: "26px", display: "grid", gap: "6px" }}>
            <span style={{ height: "2px", background: "var(--steel)", transform: open ? "translateY(8px) rotate(45deg)" : "none", transition: "transform 0.3s ease" }} />
            <span style={{ height: "2px", background: "var(--steel)", opacity: open ? 0 : 1, transition: "opacity 0.2s ease" }} />
            <span style={{ height: "2px", background: "var(--steel)", transform: open ? "translateY(-8px) rotate(-45deg)" : "none", transition: "transform 0.3s ease" }} />
          </div>
        </button>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              background: "rgba(11,12,14,0.97)",
              borderTop: "1px solid var(--line)",
            }}
          >
            <div className="wrap" style={{ paddingBlock: "1.6rem", display: "grid", gap: "0.3rem" }}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="display"
                  style={{ fontSize: "2rem", color: "var(--steel)", paddingBlock: "0.5rem" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                className="btn-primary"
                style={{ marginTop: "1rem", justifyContent: "center" }}
              >
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desk { display: none; }
        @media (min-width: 880px) {
          .nav-desk { display: flex; }
          .nav-burger { display: none; }
        }
      `}</style>
    </motion.header>
  );
}
