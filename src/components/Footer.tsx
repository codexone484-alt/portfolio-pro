import { Briefcase, Github, Linkedin, Terminal } from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="section-shell flex flex-col gap-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-elevated text-primary-400">
                <Terminal size={18} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">{profile.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-normal text-muted">{profile.roles.join(' | ')}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-foreground">Navigate</p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-muted">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-foreground">Connect</p>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              {profile.links.linkedin && (
                <li>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Linkedin size={16} aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a
                  href={profile.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Briefcase size={16} aria-hidden="true" />
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <p>Built with care for clients who value clean, reliable software.</p>
        </div>
      </div>
    </footer>
  );
}
