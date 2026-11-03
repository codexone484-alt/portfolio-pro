import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Open source & code"
              title="Explore my work on GitHub."
              description="Public repositories for the projects featured above, with source code and documentation."
            />
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary self-start">
              <Github size={16} aria-hidden="true" />
              View GitHub Profile
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-interactive group flex flex-col gap-4 p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Github size={18} className="text-muted transition-colors group-hover:text-foreground" aria-hidden="true" />
                      <span className="font-mono text-sm font-medium text-foreground">{project.githubUrl.split('/').pop()}</span>
                    </div>
                    <ArrowUpRight size={18} className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-300" aria-hidden="true" />
                  </div>
                  <p className="text-sm leading-normal text-muted">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
