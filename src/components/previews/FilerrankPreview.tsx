import { useEffect, useState } from "react";

const ROWS = [
  { rank: 1, ticker: "VXRT", score: 64.7, runway: "14.5 mo" },
  { rank: 2, ticker: "TNXP", score: 62.1, runway: "16.6 mo" },
  { rank: 3, ticker: "CLOV", score: 50.9, runway: "26.6 mo" }
] as const;

/** Mini FILERANK leaderboard with animated score highlight. */
export function FilerrankPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % ROWS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="preview preview--filerrank">
      <p className="fr-kicker">Filing-backed rankings</p>
      <p className="fr-brand">FILERANK</p>
      <p className="fr-tagline">Fundamentals from SEC filings. Social buzz excluded.</p>
      <div className="fr-table" role="presentation">
        <div className="fr-head">
          <span>#</span>
          <span>Score</span>
          <span>Ticker</span>
          <span>Runway</span>
        </div>
        {ROWS.map((row, i) => (
          <div key={row.ticker} className={`fr-row${active === i ? " fr-row--active" : ""}`}>
            <span>{row.rank}</span>
            <span className="fr-score">{row.score.toFixed(1)}</span>
            <span className="fr-ticker">{row.ticker}</span>
            <span>{row.runway}</span>
          </div>
        ))}
      </div>
      <p className="fr-note">Research only. Not financial advice.</p>
    </div>
  );
}
