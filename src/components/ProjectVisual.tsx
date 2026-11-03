import type { Project } from '@/data/projects';

interface ProjectVisualProps {
  visual: Project['visual'];
}

export default function ProjectVisual({ visual }: ProjectVisualProps) {
  return (
    <div className="relative h-48 overflow-hidden border-b border-border bg-elevated/60 p-5" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,39,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.4)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/25 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-secondary-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="relative flex h-full items-center justify-center">
        {visual === 'devlens' && <DevLensPreview />}
        {visual === 'tastemate' && <TasteMatePreview />}
        {visual === 'askai' && <AskAiPreview />}
      </div>
    </div>
  );
}

function DevLensPreview() {
  const nodes = ['Crash', 'Webhook', 'Agent', 'Fix', 'PR'];
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-1.5">
            <span className="rounded-md border border-border bg-background/80 px-2 py-1 font-mono text-[11px] text-foreground transition-colors group-hover:border-primary-500/50">
              {node}
            </span>
            {index < nodes.length - 1 && <span className="text-xs text-secondary-400">→</span>}
          </div>
        ))}
      </div>
      <div className="mx-auto w-full max-w-[240px] rounded-lg border border-border bg-background/80 p-3 font-mono text-[11px] leading-relaxed">
        <p className="text-error-400">TypeError: cannot read props</p>
        <p className="text-secondary-300">Jest: tests passed</p>
        <p className="text-success-400">Pull request created</p>
      </div>
    </div>
  );
}

function TasteMatePreview() {
  return (
    <div className="flex w-full max-w-[280px] flex-col gap-3">
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary-500/80 px-3 py-2 text-xs text-foreground">
        Something cozy, under my budget
      </div>
      <div className="flex max-w-[92%] flex-col gap-2 rounded-2xl rounded-bl-sm border border-border bg-background/80 p-3">
        <div className="flex flex-wrap gap-1.5">
          {['Movies', 'Restaurants', 'Hotels'].map((tag) => (
            <span key={tag} className="rounded-full border border-secondary-500/40 px-2 py-0.5 text-[10px] text-secondary-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="h-1.5 w-4/5 rounded-full bg-border" />
        <div className="h-1.5 w-3/5 rounded-full bg-border" />
      </div>
    </div>
  );
}

function AskAiPreview() {
  return (
    <div className="w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-background/80">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-error-500/80" />
          <span className="h-2 w-2 rounded-full bg-warning-500/80" />
          <span className="h-2 w-2 rounded-full bg-success-500/80" />
        </div>
        <span className="rounded-full border border-primary-500/40 px-2 py-0.5 font-mono text-[10px] text-primary-300">model routing</span>
      </div>
      <div className="flex flex-col gap-2.5 p-3">
        <div className="ml-auto h-3 w-3/5 rounded-full bg-primary-500/70" />
        <div className="h-2 w-full rounded-full bg-border" />
        <div className="h-2 w-5/6 rounded-full bg-border" />
        <div className="h-2 w-2/3 rounded-full bg-border" />
      </div>
    </div>
  );
}
