import { useEffect, useState } from "react";

const WORDS = ["Tiger", "Eagle", "Summit", "Velocity", "Anchor"];

/** Mini Toes Down card game UI with cycling prompts. */
export function ToesDownPreview() {
  const [wordIdx, setWordIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIdx((i) => (i + 1) % WORDS.length);
    }, 2800);
    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => {
      setTimer((t) => (t <= 1 ? 60 : t - 1));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const scoreBump = setInterval(() => {
      setScore((s) => (s >= 9 ? 0 : s + 1));
    }, 3200);
    return () => clearInterval(scoreBump);
  }, []);

  const progress = ((60 - timer) / 60) * 100;

  return (
    <div className="preview preview--toes">
      <div className="td-top">
        <div className="td-progress">
          <div className="td-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="td-timer">{timer}s</span>
      </div>
      <div className="td-card" key={wordIdx}>
        <span className="td-word">{WORDS[wordIdx]}</span>
      </div>
      <div className="td-controls">
        <div className="td-ctrl">
          <span className="td-arrow td-arrow--down">↓</span>
          <span>Skip</span>
        </div>
        <div className="td-score">
          <span className="td-pip" />
          <span>{score}</span>
        </div>
        <div className="td-ctrl">
          <span className="td-arrow td-arrow--up">↑</span>
          <span>Correct</span>
        </div>
      </div>
    </div>
  );
}
