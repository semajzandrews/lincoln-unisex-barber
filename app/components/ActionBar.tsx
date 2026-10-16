"use client";

import { BUSINESS } from "../lib/business";

/**
 * Thumb-zone action bar for phones (below 940px). Three one-tap actions a
 * customer actually wants: call, text a picture of the cut, get directions.
 * Each does exactly what its label says in one tap. Sits above the home
 * indicator via safe-area padding.
 */
const ICONS = {
  call: (
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
  ),
  text: (
    <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 5v2h10V9zm0 4v2h7v-2z" />
  ),
  map: (
    <path d="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5z" />
  ),
};

export default function ActionBar() {
  const items = [
    { k: "call", label: "Call", href: BUSINESS.phoneHref, primary: true },
    { k: "text", label: "Text", href: BUSINESS.smsHref },
    { k: "map", label: "Directions", href: BUSINESS.mapsCid, external: true },
  ] as const;

  return (
    <nav className="abar" aria-label="Quick actions">
      {items.map((it) => (
        <a
          key={it.k}
          href={it.href}
          className={"abar-btn" + ("primary" in it && it.primary ? " is-primary" : "")}
          {...("external" in it && it.external ? { target: "_blank", rel: "noopener" } : {})}
        >
          <svg viewBox="0 0 24 24" aria-hidden>{ICONS[it.k]}</svg>
          <span>{it.label}</span>
        </a>
      ))}
      <style>{`
        .abar { position: fixed; z-index: 70; left: 0; right: 0; bottom: 0; display: grid; grid-template-columns: 1.15fr 0.9fr 1.25fr; gap: 8px;
          padding: 10px 12px calc(10px + env(safe-area-inset-bottom)); background: rgba(11,12,14,0.9);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-top: 1px solid var(--line); }
        .abar-btn { display: flex; align-items: center; justify-content: center; gap: 8px; height: 50px; border-radius: 10px;
          background: var(--ink-2); border: 1px solid var(--line); color: var(--steel); text-decoration: none;
          font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap;
          transition: transform 0.15s ease, background 0.15s ease; }
        .abar-btn:active { transform: scale(0.97); }
        .abar-btn svg { width: 18px; height: 18px; fill: currentColor; }
        .abar-btn.is-primary { background: var(--orange); border-color: var(--orange); color: var(--ink); font-weight: 600; }
        @media (min-width: 940px) { .abar { display: none; } }
        @media (max-width: 939px) { body { padding-bottom: calc(72px + env(safe-area-inset-bottom)); } .fab-call { display: none !important; } }
      `}</style>
    </nav>
  );
}
