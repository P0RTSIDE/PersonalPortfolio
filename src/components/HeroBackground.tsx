import { useEffect, useId, useRef } from "react";
import { heroParticlesConfig } from "../particles-config";

declare global {
  interface Window {
    particlesJS?: (tagId: string, params?: object) => void;
    pJSDom?: { pJS: ParticlesInstance }[];
  }
}

interface ParticlesInstance {
  particles: {
    move: { speed: number };
    line_linked: { opacity: number };
    array: unknown[];
  };
}

function destroyParticles(containerId: string) {
  const el = document.getElementById(containerId);
  el?.querySelectorAll(".particles-js-canvas-el").forEach((node) => node.remove());
  window.pJSDom = [];
}

function getScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

/** Full-page particles.js background — subtle, mouse-driven, shifts with scroll. */
export function HeroBackground() {
  const reactId = useId();
  const containerId = `particles-${reactId.replace(/:/g, "")}`;
  const rafRef = useRef(0);

  useEffect(() => {
    if (!window.particlesJS) {
      console.warn("particles.js did not load — background skipped.");
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    try {
      window.pJSDom = window.pJSDom ?? [];
      window.particlesJS(containerId, heroParticlesConfig);
      const pJS = window.pJSDom?.[window.pJSDom.length - 1]?.pJS;
      if (pJS) pJS.particles.move.speed = 0;
    } catch (error) {
      console.error("particles.js failed to initialize:", error);
      return;
    }

    const syncWithScroll = () => {
      const progress = getScrollProgress();
      const pJS = window.pJSDom?.[window.pJSDom.length - 1]?.pJS;

      // Fade and soften as you scroll down the page
      container.style.opacity = String(0.82 - progress * 0.52);
      container.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      container.style.setProperty("--scroll-progress", String(progress));

      if (pJS) {
        pJS.particles.line_linked.opacity = 0.16 * (1 - progress * 0.45);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(syncWithScroll);
    };

    syncWithScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      destroyParticles(containerId);
    };
  }, [containerId]);

  return <div id={containerId} className="page-particles" aria-hidden />;
}
