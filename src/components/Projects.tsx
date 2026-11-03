import { useCallback, useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetails from '@/components/ProjectDetails';
import { projects, type Project } from '@/data/projects';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeDetails = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="Products I have designed and built with AI and backend systems."
            description="Each project is open on GitHub. Select View Details to see how it works."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} className="h-full">
              <ProjectCard project={project} onViewDetails={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectDetails project={selected} onClose={closeDetails} />}
    </section>
  );
}
