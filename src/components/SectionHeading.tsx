interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-normal text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
