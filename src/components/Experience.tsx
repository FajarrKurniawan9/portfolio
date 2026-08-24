import SectionTitle from "@/components/SectionTitle";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle
            title="Experience"
            subtitle="Perjalanan pendidikan dan pengalaman saya"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Garis vertikal */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="right">
                <div className="relative pl-12">
                  {/* Titik di timeline */}
                  <div className="absolute top-1 left-0 flex size-8 items-center justify-center rounded-full border-2 border-primary bg-surface">
                    <div className="size-2 rounded-full bg-primary" />
                  </div>

                  {/* Badge type */}
                  <Badge
                    variant={item.type === "education" ? "outline" : "tint"}
                    className="mb-2 font-mono text-[10px] tracking-wide uppercase"
                  >
                    {item.type === "education" ? "Education" : "Experience"}
                  </Badge>

                  {/* Konten */}
                  <Card className="glow-card rounded-xl border border-border bg-surface p-5">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="shrink-0 font-mono text-sm text-primary">
                        {item.year}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {item.place}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
