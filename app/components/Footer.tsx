"use client";

import { BUSINESS } from "../lib/business";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "The Line", href: "#the-line" },
  { label: "The Shop", href: "#story" },
  { label: "Visit", href: "#visit" },
];

export default function Footer() {
  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--ink-2)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap" style={{ paddingBlock: "clamp(3.5rem, 7vw, 5rem)" }}>
        <div className="foot-grid">
          {/* brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.1rem" }}>
              <span className="fadebar" aria-hidden style={{ width: "5px", height: "30px", borderRadius: "1px" }} />
              <span className="display" style={{ fontSize: "1.6rem", color: "var(--steel)" }}>Lincoln</span>
            </div>
            <p style={{ color: "var(--steel-2)", fontSize: "0.94rem", maxWidth: "22rem" }}>
              {BUSINESS.tagline} A unisex barbershop on Harrison Street. Walk in,
              line up, walk out sharp.
            </p>
          </div>

          {/* explore */}
          <div>
            <div className="mono" style={{ fontSize: "0.66rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel-3)", marginBottom: "1.1rem" }}>
              Explore
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: "0.7rem" }}>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => go(e, n.href)}
                    style={{ color: "var(--steel-2)", fontSize: "0.92rem", transition: "color 0.25s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--steel-2)")}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* connect */}
          <div>
            <div className="mono" style={{ fontSize: "0.66rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel-3)", marginBottom: "1.1rem" }}>
              Visit
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: "0.7rem", color: "var(--steel-2)", fontSize: "0.92rem" }}>
              <li>
                <a href={BUSINESS.mapsCid} target="_blank" rel="noopener noreferrer" style={{ color: "var(--steel-2)" }}>
                  {BUSINESS.address}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phoneE164}`} style={{ color: "var(--steel-2)" }}>
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="mono" style={{ fontSize: "0.8rem", color: "var(--steel-3)" }}>
                Mon to Fri · 9 to 6
              </li>
            </ul>
          </div>
        </div>

        <div className="hr" style={{ marginBlock: "2.4rem" }} />

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.8rem" }}>
          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--steel-3)" }}>
            © {new Date().getFullYear()} {BUSINESS.name}
          </span>
          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--steel-3)" }}>
            Sharp lines. Clean fades. East Orange. · <a href="https://bysemaj.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline transition-opacity hover:opacity-80">Built · bysemaj.com</a>
          </span>
        </div>
      </div>

      <style>{`
        .foot-grid { display: grid; grid-template-columns: 1fr; gap: 2.6rem; }
        @media (min-width: 760px) { .foot-grid { grid-template-columns: 1.6fr 1fr 1.2fr; gap: 3rem; } }
      `}</style>
    </footer>
  );
}
