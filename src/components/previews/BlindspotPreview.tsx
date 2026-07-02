import { useEffect, useState } from "react";

/** Mini Blindspot Tracker UI with animated bias meter. */
export function BlindspotPreview() {
  const [bias, setBias] = useState(42);

  useEffect(() => {
    const id = setInterval(() => {
      setBias(28 + Math.floor(Math.random() * 44));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="preview preview--blindspot">
      <div className="bt-header">
        <div className="bt-logo" aria-hidden>
          <span className="sq sq-r" />
          <span className="sq sq-b" />
          <span className="sq sq-g" />
          <span className="sq sq-o" />
        </div>
        <span className="bt-brand">Blindspot</span>
      </div>
      <p className="bt-kicker">Article bias analyzer</p>
      <p className="bt-headline">Per-article bias — not just the publication.</p>
      <div className="bt-input">
        <span className="bt-tab bt-tab--on">From URL</span>
        <span className="bt-tab">Paste text</span>
      </div>
      <div className="bt-bar-wrap">
        <div className="bt-bar-labels">
          <span>Left</span>
          <span>Center</span>
          <span>Right</span>
        </div>
        <div className="bt-bar">
          <div className="bt-bar-fill" style={{ width: `${bias}%` }} />
          <div className="bt-bar-marker" style={{ left: `${bias}%` }} />
        </div>
      </div>
      <div className="bt-scan" aria-hidden />
    </div>
  );
}
