import { useEffect, useRef } from "react";

/** Mini rotating globe with animated earthquake spikes. */
export function GlobePreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let angle = 0;
    let mx = 0.5;

    const spikes = Array.from({ length: 24 }, (_, i) => ({
      lat: (Math.random() - 0.5) * 1.4,
      lon: (i / 24) * Math.PI * 2,
      h: 0.15 + Math.random() * 0.55,
      mag: Math.random()
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.32;

      ctx.fillStyle = "#0a0e14";
      ctx.fillRect(0, 0, w, h);

      // soft glow
      const g = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r * 1.4);
      g.addColorStop(0, "rgba(56, 139, 253, 0.12)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      angle += 0.004 + mx * 0.002;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const globeGrad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
      globeGrad.addColorStop(0, "#1f6feb");
      globeGrad.addColorStop(0.6, "#0d419d");
      globeGrad.addColorStop(1, "#051d4a");
      ctx.fillStyle = globeGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 139, 253, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // latitude lines
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      for (let i = -2; i <= 2; i++) {
        const yOff = (i / 3) * r * 0.85;
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOff, r, r * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // spikes
      for (const s of spikes) {
        const lon = s.lon + angle;
        const x = Math.cos(lon) * Math.cos(s.lat * Math.PI * 0.45);
        const y = Math.sin(s.lat * Math.PI * 0.45);
        const z = Math.sin(lon) * Math.cos(s.lat * Math.PI * 0.45);
        if (z < -0.15) continue;

        const px = cx + x * r;
        const py = cy + y * r;
        const spikeH = s.h * r * (0.4 + z * 0.6);
        const pulse = 0.85 + Math.sin(angle * 3 + s.lon * 2) * 0.15;

        const hue = s.mag > 0.7 ? "#f85149" : s.mag > 0.4 ? "#d29922" : "#e3b341";
        ctx.strokeStyle = hue;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        const nx = x / (Math.hypot(x, y) || 1);
        const ny = y / (Math.hypot(x, y) || 1);
        ctx.lineTo(px + nx * spikeH * pulse, py + ny * spikeH * pulse);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = hue;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = (e.clientX - rect.left) / rect.width;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="preview preview--globe">
      <canvas ref={canvasRef} className="preview-canvas" />
      <span className="preview-hint">Drag implied · spikes = magnitude</span>
    </div>
  );
}
