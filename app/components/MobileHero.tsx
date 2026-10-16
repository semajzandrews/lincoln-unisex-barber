"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BUSINESS } from "../lib/business";
import { openStatus, type OpenStatus } from "../lib/openNow";

const PHOTO =
  "https://images.pexels.com/photos/7697226/pexels-photo-7697226.jpeg?auto=compress&cs=tinysrgb&w=900";

/**
 * Phone-first hero (below 940px). The cut is the first thing the eye lands on,
 * full bleed; the name and the live open status sit on it; the fade bar draws
 * up the left edge like a clipper line. Desktop keeps the editorial Hero.
 */
export default function MobileHero() {
  const [status, setStatus] = useState<OpenStatus | null>(null);
  useEffect(() => {
    const tick = () => setStatus(openStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="mtop" className="mhero" aria-label="Lincoln Unisex Barber Shop">
      <div className="mhero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTO} alt="A barber giving a fresh fade" fetchPriority="high" />
        <div className="mhero-shade" aria-hidden />
        <motion.span
          className="mhero-rail"
          aria-hidden
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="mhero-body">
        <motion.div
          className="mhero-status"
          data-open={status?.open ? "1" : "0"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: status ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i aria-hidden />
          {status?.label ?? " "}
        </motion.div>

        <h1 className="display mhero-title">
          {["A sharp", "line.", "A clean", "fade."].map((l, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "block", color: i % 2 ? "var(--orange)" : "var(--steel)" }}
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mhero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          11 N Harrison St, East Orange. Fades, tapers, line ups and beard work. Walk-ins welcome, seven days a week.
        </motion.p>

        <motion.a
          href="#proof"
          className="mhero-proof"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="mhero-stars" aria-hidden>
            {"★★★★★"}
          </span>
          <b>{BUSINESS.rating}</b>
          <span>from {BUSINESS.reviewCount} Google reviews · Ask for Alex</span>
        </motion.a>
      </div>

      <style>{`
        .mhero { display: block; position: relative; background: var(--ink); }
        @media (min-width: 940px) { .mhero { display: none; } }
        .mhero-photo { position: relative; height: 62svh; min-height: 380px; max-height: 560px; overflow: hidden; }
        .mhero-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 60% 25%;
          filter: grayscale(0.15) contrast(1.06) brightness(0.9); }
        .mhero-shade { position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(11,12,14,0.55) 0%, transparent 22%, transparent 55%, var(--ink) 100%); }
        .mhero-rail { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; transform-origin: bottom;
          background: linear-gradient(180deg, var(--orange) 0%, rgba(255,106,43,0.25) 100%); }
        .mhero-body { position: relative; margin-top: -132px; padding: 0 20px 28px; }
        .mhero-status { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px;
          background: rgba(18,20,24,0.82); border: 1px solid var(--line); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.08em; color: var(--steel); }
        .mhero-status i { width: 8px; height: 8px; border-radius: 50%; background: var(--steel-3); }
        .mhero-status[data-open="1"] i { background: #3ddc84; box-shadow: 0 0 0 0 rgba(61,220,132,0.6); animation: mpulse 2.2s infinite; }
        @keyframes mpulse { 70% { box-shadow: 0 0 0 9px rgba(61,220,132,0); } 100% { box-shadow: 0 0 0 0 rgba(61,220,132,0); } }
        .mhero-title { font-size: clamp(3.6rem, 19vw, 5.4rem); line-height: 0.9; margin: 14px 0 14px; text-transform: uppercase; }
        .mhero-sub { color: var(--steel-2); font-size: 1rem; line-height: 1.55; max-width: 34ch; }
        .mhero-proof { margin-top: 18px; display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; padding: 14px 14px;
          border-radius: 12px; background: var(--ink-2); border: 1px solid var(--line); text-decoration: none; }
        .mhero-stars { color: var(--orange); letter-spacing: 2px; font-size: 0.95rem; }
        .mhero-proof b { font-family: var(--font-display); font-weight: 400; font-size: 1.5rem; color: var(--steel); line-height: 1; }
        .mhero-proof span:last-child { font-family: var(--font-mono); font-size: 0.72rem; color: var(--steel-3); letter-spacing: 0.04em; }
        @media (prefers-reduced-motion: reduce) { .mhero-status[data-open="1"] i { animation: none; } }
      `}</style>
    </section>
  );
}
