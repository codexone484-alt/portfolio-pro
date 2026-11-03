import { useEffect, useState } from 'react';
import { Briefcase, Github, Menu, Terminal, X } from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { profile } from '@/data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-elevated text-primary-400 transition-colors group-hover:border-primary-500/60">
            <Terminal size={18} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-elevated hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-foreground sm:flex"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork profile"
            className="hidden h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-foreground sm:flex"
          >
            <Briefcase size={18} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-primary hidden !px-4 !py-2.5 md:inline-flex">
            Let&apos;s Work Together
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-elevated lg:hidden"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="section-shell flex flex-col gap-1 py-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-elevated hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 md:hidden">
              <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
                Let&apos;s Work Together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
