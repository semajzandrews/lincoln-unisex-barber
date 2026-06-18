"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS } from "../lib/business";

export default function CallButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`tel:${BUSINESS.phoneE164}`}
          aria-label={`Call ${BUSINESS.name}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          data-hover
          style={{
            position: "fixed",
            bottom: "1.4rem",
            right: "1.4rem",
            zIndex: 60,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "var(--orange)",
            color: "var(--ink)",
            fontFamily: "var(--font-jbmono), monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.95rem 1.3rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          }}
        >
          <span style={{ fontSize: "1rem" }}>✆</span>
          Call the Shop
        </motion.a>
      )}
    </AnimatePresence>
  );
}
