import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I can build for your business."
            description="Focused services that match my documented experience, from a single API to a complete product."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 60} className="h-full">
                <div className="card-interactive group flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-elevated text-secondary-400 transition-colors group-hover:border-secondary-500/50">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{service.title}</h3>
                    <p className="text-sm leading-normal text-muted">{service.description}</p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1 w-1 rounded-full bg-primary-400" aria-hidden="true" />
                        {point}
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
