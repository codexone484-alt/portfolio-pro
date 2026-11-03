import { ArrowRight, Briefcase, Download } from 'lucide-react';
import { profile } from '@/data/profile';

const terminalLines = [
  { prompt: true, text: 'node server.js' },
  { prompt: false, text: 'API listening on port 5000', tone: 'text-success-400' },
  { prompt: false, text: 'PostgreSQL connected', tone: 'text-success-400' },
  { prompt: false, text: 'Socket.io channels ready', tone: 'text-success-400' },
  { prompt: true, text: 'devlens watch ./app' },
  { prompt: false, text: 'Crash received via webhook', tone: 'text-error-400' },
  { prompt: false, text: 'Fix verified by Jest test suite', tone: 'text-secondary-300' },
  { prompt: false, text: 'Pull request opened on GitHub', tone: 'text-primary-300' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,39,42,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.35)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl animate-float-slow" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-secondary-500/15 blur-3xl animate-float-slow [animation-delay:-6s]" />
      </div>

      <div className="section-shell relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-7">
          <p className="text-sm font-medium text-secondary-300">{profile.roles.join('  |  ')}</p>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-secondary-300 bg-clip-text text-transparent">{profile.name}.</span>
          </h1>

          <p className="text-xl font-medium leading-[1.4] text-foreground sm:text-2xl">{profile.heroLead}</p>
          <p className="max-w-xl text-base leading-normal text-muted sm:text-lg">{profile.heroDetail}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={profile.links.upwork} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Briefcase size={16} aria-hidden="true" />
              Hire Me on Upwork
            </a>
            {profile.links.resume && (
              <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Core stack</p>
            <div className="flex flex-wrap gap-2">
              {profile.heroStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 blur-2xl" aria-hidden="true" />
          <div className="card relative overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 border-b border-border bg-elevated/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-error-500/80" />
              <span className="h-3 w-3 rounded-full bg-warning-500/80" />
              <span className="h-3 w-3 rounded-full bg-success-500/80" />
              <span className="ml-3 font-mono text-xs text-muted">backend - zsh</span>
            </div>
            <div className="flex flex-col gap-2.5 p-5 font-mono text-[13px] leading-relaxed sm:p-6">
              {terminalLines.map((line, index) => (
                <p key={index} className={line.prompt ? 'text-foreground' : `pl-4 ${line.tone}`}>
                  {line.prompt && <span className="mr-2 text-secondary-400">$</span>}
                  {line.text}
                </p>
              ))}
              <p className="text-foreground">
                <span className="mr-2 text-secondary-400">$</span>
                <span className="inline-block h-4 w-2 translate-y-0.5 bg-foreground animate-blink-caret" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
