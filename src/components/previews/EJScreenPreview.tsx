import { useEffect, useState } from "react";

const ROWS = [
  { label: "Indexes", status: "Match", tone: "ok" },
  { label: "Demographics", status: "Match", tone: "ok" },
  { label: "Ozone / NO2 / PM2.5", status: "Match", tone: "ok" },
  { label: "Hazardous waste", status: "Gap", tone: "gap" },
  { label: "RMP / Drinking water", status: "Gap", tone: "gap" }
] as const;

/** Mini EJScreen rebuild status board. */
export function EJScreenPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % ROWS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="preview preview--ejscreen">
      <p className="ej-kicker">SQL reconstruction</p>
      <p className="ej-brand">EJScreen 2.3</p>
      <p className="ej-tagline">Independent rebuild. Not affiliated with EPA.</p>
      <div className="ej-table" role="presentation">
        <div className="ej-head">
          <span>Family</span>
          <span>Check</span>
        </div>
        {ROWS.map((row, i) => (
          <div key={row.label} className={`ej-row${active === i ? " ej-row--active" : ""}`}>
            <span>{row.label}</span>
            <span className={`ej-status ej-status--${row.tone}`}>{row.status}</span>
          </div>
        ))}
      </div>
      <p className="ej-note">Public files where possible. Gaps disclosed.</p>
    </div>
  );
}
