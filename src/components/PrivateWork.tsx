import { Building2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { privateWork } from '@/data/experience';

export default function PrivateWork() {
  return (
    <section id="private-work" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Client work"
            title="Professional Work & Private Projects"
            description="Beyond my public portfolio, I've contributed to additional software projects in professional environments, working on backend systems, application development, API integrations, and business-specific software solutions."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {privateWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="h-full">
              <div className="card-interactive flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-elevated text-primary-300">
                    <Building2 size={20} aria-hidden="true" />
                  </span>
                  <span className="chip">{item.category}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-normal text-muted">{item.text}</p>
                </div>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
