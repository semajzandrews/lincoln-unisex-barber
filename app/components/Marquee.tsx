"use client";

const ITEMS = [
  "Skin Fades",
  "Line Ups",
  "Beard Sculpts",
  "Kids' Cuts",
  "Tapers",
  "Hot Towel Finish",
  "Walk-Ins Welcome",
  "Ask For Alex",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      style={{
        background: "var(--orange)",
        color: "var(--ink)",
        overflow: "hidden",
        borderBlock: "1px solid var(--ink)",
        paddingBlock: "0.9rem",
      }}
    >
      <div className="marquee-track" style={{ animationDuration: "26s" }}>
        {row.map((item, i) => (
          <span
            key={i}
            className="display"
            style={{
              fontSize: "1.25rem",
              padding: "0 1.6rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "1.6rem",
            }}
          >
            {item}
            <span style={{ fontSize: "0.7rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
