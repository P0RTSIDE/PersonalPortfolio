import { useEffect, useState } from "react";

const FLAGS = [
  { label: "No permit", color: "#e74c3c", count: 6 },
  { label: "Needs review", color: "#f39c12", count: 228 },
  { label: "In permit", color: "#3498db", count: 16 }
] as const;

/** Mini map UI with animated clearing polygons and status legend. */
export function DeforestationPreview() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % 3), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="preview preview--deforestation">
      <div className="df-map" aria-hidden>
        <div className="df-study-box" />
        <div className="df-poly df-poly--1" />
        <div className="df-poly df-poly--2" />
        <div className={`df-poly df-poly--3${pulse === 0 ? " df-poly--pulse" : ""}`} />
        <div className="df-poly df-poly--4" />
        <div className="df-grid" />
      </div>
      <div className="df-overlay">
        <p className="df-kicker">Southern Pará · Sentinel-2</p>
        <p className="df-headline">250 flagged areas · 14,908 ha cleared</p>
        <ul className="df-legend">
          {FLAGS.map((f) => (
            <li key={f.label}>
              <span className="df-swatch" style={{ background: f.color }} />
              <span>{f.label}</span>
              <span className="df-count">{f.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
