import { Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

export default function Contact() {
  const channels = [
    profile.links.email && { label: 'Email', value: profile.links.email, href: `mailto:${profile.links.email}`, icon: Mail },
    profile.links.linkedin && { label: 'LinkedIn', value: 'View profile', href: profile.links.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'Muhammad-Husnain007', href: profile.links.github, icon: Github },
    { label: 'Upwork', value: 'Hire me on Upwork', href: profile.links.upwork, icon: Briefcase },
  ].filter(Boolean) as { label: string; value: string; href: string; icon: typeof Mail }[];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-400">Contact</p>
              <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-4xl">
                Have an Idea? Let&apos;s Build Something Great.
              </h2>
              <p className="text-base leading-normal text-muted sm:text-lg">
                Looking for someone to build your next web application, backend system, or AI-powered solution? Let&apos;s
                discuss your project.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="card-interactive group flex items-center gap-4 p-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-elevated text-primary-300">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.16em] text-muted">{channel.label}</span>
                        <span className="text-sm font-medium text-foreground">{channel.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
