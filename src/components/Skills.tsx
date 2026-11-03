import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Technical skills"
            title="The tools I use to build reliable products."
            description="Drawn from my professional experience and documented projects."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={index * 60}>
                <div className="card-interactive group flex h-full flex-col gap-5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-elevated text-secondary-400 transition-colors group-hover:border-secondary-500/50">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted transition-colors hover:border-secondary-500/50 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
