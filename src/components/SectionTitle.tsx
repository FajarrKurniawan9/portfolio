type SectionTitleProps = {
  title: string;
  subtitle: string;
  badge?: string;
};

export default function SectionTitle({ title, subtitle, badge }: SectionTitleProps) {
  return (
    <div className="mb-12">
      {badge && (
        <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          // {badge}
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-1 font-mono text-xs text-zinc-500 sm:text-sm">
        {subtitle}
      </p>
    </div>
  );
}
