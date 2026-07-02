import { ProjectCard } from "./components/ProjectCard";
import { HeroBackground } from "./components/HeroBackground";
import { projects, skills } from "./projects";

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScrollHint() {
  return (
    <a href="#about" className="scroll-hint" aria-label="Scroll down to learn more">
      <span>Scroll</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M10 4v10M5 11l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function App() {
  return (
    <div className="layout">
      <HeroBackground />

      <main className="content">
        <section id="home" className="section hero">
          <div className="hero-inner">
            <p className="hello">Hello, I&apos;m</p>
            <h1>Sol Abrian.</h1>
            <p className="role">I build interactive web apps and data-driven tools.</p>
          </div>
          <ScrollHint />
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p className="about-text">
            I&apos;m a developer focused on turning complex data into clear, usable experiences
            from 3D visualizations and fitness tools to analysis apps. I like projects where design,
            logic, and real-world information meet.
          </p>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((p) => (
              <ProjectCard key={p.url} project={p} />
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="contact-text">
            Have a question or want to work together? Send me an email and I&apos;ll get back to you
            as soon as I can.
          </p>
          <a href="mailto:sol@abrianiii.com" className="email-link">
            sol@abrianiii.com
            <Arrow />
          </a>
        </section>

        <footer>
          <p>SOL ABRIAN &copy;{new Date().getFullYear()}</p>
          <p className="footer-credit">
            Background particles by{" "}
            <a
              href="https://github.com/VincentGarreau/particles.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              particles.js
            </a>{" "}
            (Vincent Garreau, MIT)
          </p>
        </footer>
      </main>
    </div>
  );
}
