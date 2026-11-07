import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/projects";
import { ArrowUpRight, FolderGit2, Layers } from "lucide-react";

function ProjectMockup({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-border/70 bg-forest-deep">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0 hover:contrast-100"
          sizes="(min-width: 768px) 320px, 100vw"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden border border-border bg-surface p-4 font-mono text-[10px] text-muted-foreground flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-border pb-2 text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Layers className="size-3 text-accent" />
          <span>SYS_MODULE: {project.title.toUpperCase().replace(/\s+/g, "_")}</span>
        </span>
        <span className="text-accent">STATUS: 200 OK</span>
      </div>
      <div className="space-y-1 text-muted-foreground">
        <p>&gt; load_manifest --target prod</p>
        <p className="text-foreground">&gt; primary_driver: {project.tech[0]}</p>
        <p>&gt; integrity_check: PASS</p>
      </div>
      <div className="border-t border-border pt-1.5 flex justify-between text-muted-foreground">
        <span>ARCH: MODULAR SYSTEM</span>
        <span>LATENCY: 0.4ms</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected Production Projects"
      className="border-b border-border bg-transparent px-4 py-16 sm:px-6 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <FolderGit2 className="size-3 text-accent" />
                PORTFOLIO // SELECTED WORK
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
                Production systems engineered for database efficiency, clean APIs, and real user needs
              </p>
            </div>

            <div className="font-mono text-[11px] text-muted-foreground">
              TOTAL: {projects.length} PROJECTS
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 divide-y divide-border">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between px-2 -mx-2 transition-colors duration-150 hover:bg-surface/50">
                {/* Content Side */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      <span>0{index + 1}</span>
                      <span>/</span>
                      <span className="text-foreground">{project.tech[0]}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="rounded-none border-border bg-surface px-2 py-0.5 font-mono text-[10px] font-normal tracking-wide text-muted-foreground uppercase hover:border-accent hover:text-foreground"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4 font-mono text-xs">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mockup / Architecture Spec Frame */}
                <div className="w-full md:w-72 lg:w-80 shrink-0">
                  <ProjectMockup project={project} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
