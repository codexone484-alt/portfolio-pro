import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { education, experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Professional experience"
            title="Backend engineering in production environments."
          />
        </Reveal>

        <ol className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((entry, index) => (
            <li key={`${entry.company}-${entry.period}`} className="relative">
              <Reveal delay={index * 120}>
                <span className="absolute -left-10 top-7 flex h-4 w-4 items-center justify-center rounded-full border border-primary-500 bg-background sm:-left-12">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                </span>
                <div className="card-interactive flex flex-col gap-4 p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold text-foreground">{entry.role}</h3>
                      <p className="text-sm font-medium text-secondary-300">{entry.company}</p>
                    </div>
                    <p className="font-mono text-xs text-muted sm:pt-1">{entry.period}</p>
                  </div>
                  <p className="text-sm leading-normal text-muted sm:text-base">{entry.summary}</p>
                  {entry.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2 border-t border-border pt-4">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm leading-normal text-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Education</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {education.map((item) => (
                <div key={item.title} className="card flex flex-col gap-2 p-5">
                  <p className="text-sm font-semibold leading-snug text-foreground">{item.title}</p>
                  <p className="text-sm leading-normal text-muted">{item.institution}</p>
                  {item.period && <p className="font-mono text-xs text-secondary-300">{item.period}</p>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
