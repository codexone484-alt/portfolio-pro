import { useEffect, useId } from 'react';
import { ArrowRight, Check, Github, X } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const titleId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-border bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:max-w-3xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary-400">{project.category}</p>
            <h2 id={titleId} className="text-2xl font-semibold leading-[1.2] text-foreground">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-foreground"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-8 overflow-y-auto px-6 py-6 sm:px-8">
          <p className="text-base leading-normal text-muted">{project.description}</p>

          <section className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Key features</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-normal text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-500/15 text-success-400">
                    <Check size={12} aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{project.workflow.title}</h3>
            <ol className="flex flex-wrap items-center gap-2">
              {project.workflow.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground">
                    {step}
                  </span>
                  {index < project.workflow.steps.length - 1 && (
                    <ArrowRight size={14} className="text-secondary-400" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Technologies</h3>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-border bg-surface px-6 py-5 sm:flex-row sm:px-8">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Github size={16} aria-hidden="true" />
            View on GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
