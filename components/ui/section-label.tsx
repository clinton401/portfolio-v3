interface SectionLabelProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionLabel({ number, title, className = "" }: SectionLabelProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-lg font-normal text-accent leading-none">
          {number}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {title}
        </span>
      </div>
      <div className="mt-3 h-px bg-border-subtle" />
    </div>
  );
}
