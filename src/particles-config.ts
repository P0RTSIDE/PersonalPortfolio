/** particles.js config — calm grid; motion mostly from mouse grab only. */
export const heroParticlesConfig = {
  particles: {
    number: {
      value: 64,
      density: {
        enable: true,
        value_area: 820
      }
    },
    color: {
      value: "#3fb950"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.28,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#3fb950",
      opacity: 0.16,
      width: 1
    },
    move: {
      enable: true,
      speed: 0,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 175,
        line_linked: {
          opacity: 0.55
        }
      },
      bubble: {
        distance: 200,
        size: 6,
        duration: 0.4,
        opacity: 0.5,
        speed: 2
      },
      repulse: {
        distance: 120,
        duration: 0.4
      },
      push: {
        particles_nb: 2
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
