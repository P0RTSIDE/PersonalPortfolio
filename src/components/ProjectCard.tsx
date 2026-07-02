import type { Project } from "../projects";
import { ProjectPreview } from "./previews";

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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project-visual">
        <ProjectPreview id={project.preview} />
      </div>
      <div className="project-body">
        <header>
          <h3>{project.title}</h3>
          <p className="project-sub">{project.subtitle}</p>
        </header>
        <p className="project-desc">{project.description}</p>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Live app
            <Arrow />
          </a>
        </div>
      </div>
    </article>
  );
}
