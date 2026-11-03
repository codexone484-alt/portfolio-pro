import { Smartphone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="About me"
              title="Software that keeps working after launch day."
            />
            <div className="card flex items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
                <Smartphone size={20} aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-foreground">10,000+ downloads</p>
                <p className="text-sm leading-normal text-muted">
                  Backend work on the Siin Mobile App, a live application on the app store.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col gap-6 text-base leading-normal text-muted sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
