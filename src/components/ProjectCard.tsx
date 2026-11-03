import { ArrowUpRight, Github } from 'lucide-react';
import ProjectVisual from '@/components/ProjectVisual';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <article className="card-interactive group flex h-full flex-col overflow-hidden">
      <ProjectVisual visual={project.visual} />

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary-400">{project.category}</p>
          <h3 className="text-xl font-semibold leading-[1.2] text-foreground">{project.title}</h3>
          <p className="text-sm leading-normal text-muted">{project.summary}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="btn-primary flex-1 !px-4 !py-2.5"
          >
            View Details
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4 !py-2.5"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2.5">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
