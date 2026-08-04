"use client";

import { useEffect, useRef, useState } from "react";
import { BUSINESS } from "../lib/business";

/**
 * PHONE DOCTRINE — Call or Text chooser.
 *
 * Plenty of people will never dial a barbershop but will happily text a photo of
 * the fade they want. Call-only quietly loses them. Both hrefs come out of
 * lib/phone in E.164 form; the visible number is the (862) 339-9926 shape.
 *
 * Brand treatment for LINCOLN: line work. No radii anywhere, brushed-steel
 * panel on graphite, JB Mono uppercase labels, and each menu row carries the
 * site's fade-bar (skin -> full) as a 3px rail on its left edge that lights to
 * solid orange on hover — the clipper line being drawn.
 */

type Props = {
  variant?: "pill" | "inline" | "stack";
  /** pill only */
  tone?: "orange" | "ghost";
  label?: string;
  /** stack opens upward (floating button) */
  up?: boolean;
  style?: React.CSSProperties;
};

const SMS_HINT = "Send a pic of the cut";

export default function CallOrText({
  variant = "pill",
  tone = "orange",
  label,
  up = false,
  style,
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className="lcot-pair" style={style}>
        <a href={BUSINESS.phoneHref} className="btn-primary" data-hover>
          Call {BUSINESS.phoneDisplay}
        </a>
        <a href={BUSINESS.smsHref} className="lcot-text-btn" data-hover>
          <span className="lcot-rail" aria-hidden="true" />
          Text instead
        </a>
        <Styles />
      </div>
    );
  }

  return (
    <div
      className="lcot"
      ref={rootRef}
      style={{ position: "relative", ...style }}
    >
      <button
        type="button"
        className={tone === "ghost" ? "lcot-trigger lcot-ghost" : "lcot-trigger"}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text ${BUSINESS.name}`}
        data-hover
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" style={{ fontSize: "1rem", lineHeight: 1 }}>
          ✆
        </span>
        <span className="lcot-label">{label ?? BUSINESS.phoneDisplay}</span>
      </button>

      <div
        className={up ? "lcot-menu lcot-menu-up" : "lcot-menu"}
        data-open={open}
        role="menu"
      >
        <a
          href={BUSINESS.phoneHref}
          role="menuitem"
          onClick={() => setOpen(false)}
          data-hover
        >
          <span className="lcot-rail" aria-hidden="true" />
          <span>
            <strong>Call</strong>
            <em>Straight to the chair</em>
          </span>
        </a>
        <a
          href={BUSINESS.smsHref}
          role="menuitem"
          onClick={() => setOpen(false)}
          data-hover
        >
          <span className="lcot-rail" aria-hidden="true" />
          <span>
            <strong>Text</strong>
            <em>{SMS_HINT}</em>
          </span>
        </a>
      </div>

      <Styles />
    </div>
  );
}

function Styles() {
  return (
    <style>{`
      /* NOT .wrap — that is the global page container and the popover would be
         thrown off the right edge of the screen. */
      .lcot-pair { display: flex; flex-wrap: wrap; gap: 0.9rem; align-items: center; }

      .lcot-trigger {
        display: inline-flex; align-items: center; gap: 0.6rem;
        background: var(--orange); color: var(--ink);
        font-family: var(--font-mono);
        font-size: 0.82rem; letter-spacing: 0.14em; text-transform: uppercase;
        padding: 0.7rem 1.3rem;
        border: none; cursor: none;
        transition: background 0.3s var(--ease), transform 0.3s var(--ease);
      }
      .lcot-trigger:hover { background: var(--orange-d); transform: translateY(-2px); }
      .lcot-ghost {
        background: transparent; color: var(--steel);
        border: 1px solid var(--line);
      }
      .lcot-ghost:hover { background: var(--orange-dim); color: var(--orange); }
      .lcot-label { display: none; }

      .lcot-text-btn {
        display: inline-flex; align-items: center; gap: 0.7rem;
        position: relative;
        background: transparent; color: var(--steel);
        border: 1px solid var(--line);
        font-family: var(--font-mono);
        font-size: 0.82rem; letter-spacing: 0.14em; text-transform: uppercase;
        padding: 1rem 1.7rem;
        cursor: none;
        transition: color 0.3s var(--ease), border-color 0.3s var(--ease);
      }
      .lcot-text-btn:hover { color: var(--orange); border-color: var(--orange); }

      /* the fade bar as a rail — skin to full, the clipper line */
      .lcot-rail {
        width: 3px; align-self: stretch; min-height: 1.2em; flex: none;
        background: linear-gradient(180deg, var(--ink) 0%, #4a505b 48%, var(--steel) 100%);
        transition: background 0.3s var(--ease);
      }

      .lcot-menu {
        position: absolute; right: 0; top: calc(100% + 10px);
        z-index: 70;
        width: max-content; min-width: 246px;
        background: var(--ink-2);
        border: 1px solid var(--line);
        box-shadow: 0 18px 44px rgba(0,0,0,0.55);
        padding: 6px;
        display: grid; gap: 2px;
        opacity: 0; transform: translateY(-6px); pointer-events: none;
        transition: opacity 0.28s var(--ease), transform 0.28s var(--ease);
      }
      .lcot-menu-up { top: auto; bottom: calc(100% + 10px); transform: translateY(6px); }
      .lcot-menu[data-open="true"] { opacity: 1; transform: none; pointer-events: auto; }

      .lcot-menu a {
        display: flex; align-items: stretch; gap: 12px;
        padding: 0.75rem 0.85rem;
        color: var(--steel);
        background: transparent;
        transition: background 0.3s var(--ease), color 0.3s var(--ease);
      }
      .lcot-menu a:hover { background: var(--orange-dim); color: var(--orange); }
      .lcot-menu a:hover .lcot-rail,
      .lcot-text-btn:hover .lcot-rail { background: var(--orange); }
      .lcot-menu strong {
        display: block;
        font-family: var(--font-display); font-weight: 400;
        text-transform: uppercase; letter-spacing: 0.06em;
        font-size: 1.05rem; line-height: 1;
      }
      .lcot-menu em {
        display: block; font-style: normal;
        font-family: var(--font-mono);
        font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
        color: var(--steel-3); margin-top: 0.35rem;
      }

      /* ARSENAL mobile-first: collapse to a ~46px icon so a 375px viewport
         never overflows. */
      @media (min-width: 560px) {
        .lcot-label { display: inline; }
      }
      @media (max-width: 559px) {
        .lcot-trigger { padding: 0.8rem 0.95rem; min-width: 46px; justify-content: center; }
      }
    `}</style>
  );
}
