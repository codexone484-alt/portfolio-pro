import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Why work with me"
            title="A developer who owns the outcome, not just the code."
            description="I take responsibility for how your product performs, how it is structured and how it grows."
          />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {profile.whyWorkWithMe.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 60}>
                <div className="flex h-full flex-col gap-4 bg-surface p-6 transition-colors duration-300 hover:bg-elevated/70 sm:p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/15 text-primary-300">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-normal text-muted">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
