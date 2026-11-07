type SectionTitleProps = {
  title: string;
  subtitle: string;
  badge?: string;
};

export default function SectionTitle({ title, subtitle, badge }: SectionTitleProps) {
  return (
    <div className="mb-12">
      {badge && (
        <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {"// "}{badge}
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
        {subtitle}
      </p>
    </div>
  );
}
