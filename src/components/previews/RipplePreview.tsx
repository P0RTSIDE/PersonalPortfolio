import { useEffect, useState } from "react";

const PADS = ["Pt 3", "Pt 5", "Kick", "Snare", "Hat", "Tone"] as const;

/** Mini Ripple pond with ripples, fish, and rhythm studio strip. */
export function RipplePreview() {
  const [activePad, setActivePad] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePad((p) => (p + 1) % PADS.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="preview preview--ripple">
      <div className="rp-pond" aria-hidden>
        <div className="rp-ripple rp-ripple--1" />
        <div className="rp-ripple rp-ripple--2" />
        <span className="rp-fish rp-fish--1" />
        <span className="rp-fish rp-fish--2" />
        <span className="rp-fish rp-fish--3" />
      </div>
      <div className="rp-overlay">
        <p className="rp-kicker">Interactive pond</p>
        <p className="rp-headline">Fish, ripples, and procedural sound</p>
        <div className="rp-studio">
          <span className="rp-studio-label">Rhythm studio</span>
          <div className="rp-pads">
            {PADS.map((pad, i) => (
              <span key={pad} className={`rp-pad${activePad === i ? " rp-pad--on" : ""}`}>
                {pad}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
