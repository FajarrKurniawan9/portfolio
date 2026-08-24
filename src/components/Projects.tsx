import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Project } from "@/data/projects";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        cache: "no-store", // selalu fetch data terbaru
      },
    );
    const json = await response.json();
    return json.data;
  } catch {
    return [];
  }
}

function ProjectMockup({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
        <Image
          src={project.image}
          alt={`Screenshot ${project.title}`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 320px, 100vw"
        />
      </div>
    );
  }

  // TODO: ganti dengan screenshot asli begitu tersedia — untuk sekarang mockup CSS-only.
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,hsl(var(--surface-raised)),hsl(var(--surface)))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary-glow)),transparent_60%)]" />
      <div className="absolute top-4 left-4 flex gap-1.5">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
      </div>
      <div className="absolute inset-x-4 bottom-4 space-y-2">
        <div className="h-2 w-2/3 rounded-full bg-surface-raised" />
        <div className="h-2 w-1/2 rounded-full bg-surface-raised" />
        <div className="h-2 w-5/6 rounded-full bg-surface-raised" />
      </div>
    </div>
  );
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle
            title="Projects."
            subtitle="Beberapa project yang pernah saya buat"
          />
        </FadeIn>

        {/* Kalau data kosong */}
        {projects.length === 0 && (
          <FadeIn>
            <p className="text-center text-muted-foreground">
              Belum ada project. Nantikan ya!!
            </p>
          </FadeIn>
        )}

        <div className="space-y-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <Card className="glow-card flex-col gap-8 rounded-xl border border-border bg-surface p-8 md:flex-row md:items-center">
                {/* Kiri — content */}
                <div className="flex flex-1 flex-col gap-4">
                  <span className="font-mono text-[10px] tracking-wide text-primary uppercase">
                    {project.tech[0]}
                  </span>
                  <h3 className="text-[22px] font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="tint"
                        className="font-mono text-[10px] tracking-wide uppercase"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 border-t border-border pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>

                {/* Kanan — mockup */}
                <div className="w-full md:w-80 md:shrink-0">
                  <ProjectMockup project={project} />
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
