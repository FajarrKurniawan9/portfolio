type SectionTitleProps = {
  title: string
  subtitle: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] text-foreground mb-3">
        {title}
      </h2>
      <p className="text-muted-foreground text-base">{subtitle}</p>
      <div className="mt-4 mx-auto w-16 h-1 bg-primary rounded-full" />
    </div>
  )
}