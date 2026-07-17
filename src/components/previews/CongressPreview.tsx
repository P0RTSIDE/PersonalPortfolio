import { useEffect, useState } from "react";

const TRADES = [
  { days: 35, buy: true, large: true },
  { days: 42, buy: true, large: false },
  { days: 5, buy: false, large: true },
  { days: 77, buy: true, large: false },
  { days: 11, buy: false, large: false },
  { days: 3, buy: true, large: false }
] as const;

/** Mini congressional stock timing chart with animated trade dots. */
export function CongressPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % TRADES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="preview preview--congress">
      <p className="cg-kicker">Pre-vote disclosure timing</p>
      <p className="cg-headline">SPACE Act of 2025 · 228 signals</p>
      <div className="cg-chart" aria-hidden>
        <div className="cg-axis">
          <span>365d</span>
          <span>Vote</span>
        </div>
        <div className="cg-line">
          <div className="cg-vote" />
          {TRADES.map((t, i) => (
            <span
              key={i}
              className={`cg-dot${t.buy ? " cg-dot--buy" : " cg-dot--sell"}${t.large ? " cg-dot--large" : ""}${active === i ? " cg-dot--active" : ""}`}
              style={{ left: `${100 - (t.days / 365) * 88}%` }}
            />
          ))}
        </div>
      </div>
      <ul className="cg-legend">
        <li><span className="cg-swatch cg-swatch--buy" /> Purchases</li>
        <li><span className="cg-swatch cg-swatch--sell" /> Sales</li>
        <li><span className="cg-swatch cg-swatch--large" /> $50k+</li>
      </ul>
      <p className="cg-note">Timing overlaps only. Not proof of insider trading.</p>
    </div>
  );
}
