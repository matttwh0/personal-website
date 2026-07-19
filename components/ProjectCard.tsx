/* eslint-disable @next/next/no-img-element */
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, sectionId }: { project: Project; sectionId?: string }) {
  return (
    <div data-anim="" data-section={sectionId} className="card card-hover project-card span-3">
      <div className="project-cover">
        <img
          src={project.image}
          alt={project.name}
          style={{ objectPosition: project.imagePosition ?? "center" }}
        />
      </div>
      <div className="project-body">
        <div className="project-name">
          {project.name}{" "}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            ↗
          </a>
        </div>
        <div className="project-desc">{project.description}</div>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
