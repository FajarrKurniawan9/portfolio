import FadeIn from "@/components/FadeIn";
import { skills } from "@/data/skills";
import {
  Server,
  Layers,
  Database,
  Terminal,
  FileCode2,
  Code2,
  Container,
  Send,
  GitBranch,
  AppWindow,
  Atom,
  Palette,
  Webhook,
  type LucideIcon,
} from "lucide-react";

const skillIcons: Record<string, LucideIcon> = {
  NestJS: Server,
  TypeScript: FileCode2,
  MySQL: Database,
  "Prisma ORM": Layers,
  "REST API": Webhook,
  "Next.js": AppWindow,
  React: Atom,
  "Tailwind CSS": Palette,
  "Git & GitHub": GitBranch,
  Docker: Container,
  Postman: Send,
};

const skillNotes: Record<string, string> = {
  NestJS: "Enterprise architecture, dependency injection, modular controllers",
  TypeScript: "Strict mode typing, DTO validation, contract safety",
  MySQL: "Schema normalization, indexing strategies, ACID guarantees",
  "Prisma ORM": "Type-safe migrations, relational modeling, batch queries",
  "REST API": "RFC-compliant design, rate limiting, JWT token lifecycle",
  "Next.js": "App Router, server components, client boundary isolation",
  React: "Declarative state, hook composability, DOM lifecycle",
  "Tailwind CSS": "Utility-first design tokens, high-density component layouts",
  "Git & GitHub": "Branch protection, rebase workflows, version governance",
  Docker: "Multi-stage builds, container isolation, local environment parity",
  Postman: "Automated regression testing, mock servers, OpenAPI export",
};

export default function Skills() {
  const backendSkills = skills.filter((s) => s.category === "backend");
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <section
      id="skills"
      aria-label="Technical Capabilities & Modules"
      className="border-b border-border bg-transparent px-4 py-16 sm:px-6 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <Terminal className="size-3 text-accent" />
                SKILLS // TECHNICAL STACK
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                Technical Skills
              </h2>
              <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
                Frameworks, languages, and tools I use to design and build reliable systems
              </p>
            </div>

            <div className="font-mono text-[11px] text-muted-foreground">
              SPEC: TS 5.x &middot; NODE LTS
            </div>
          </div>
        </FadeIn>

        {/* Section Breakdown: Clean Monospace Lists with border-b separation */}
        <div className="mt-10 space-y-12">
          {/* Backend Modules */}
          <FadeIn delay={0.1}>
            <div>
              <div className="mb-3 flex items-center justify-between border-b border-border pb-2 font-mono text-xs">
                <span className="font-semibold uppercase tracking-wider text-foreground">
                  01 // Backend &amp; Architecture
                </span>
                <span className="text-[10px] text-accent">PRIMARY FOCUS</span>
              </div>

              <div className="divide-y divide-border">
                {backendSkills.map((skill) => {
                  const Icon = skillIcons[skill.name] ?? Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col justify-between py-3.5 transition-colors duration-150 hover:bg-surface/50 sm:flex-row sm:items-center sm:py-3 px-2 -mx-2"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                        <div>
                          <span className="font-mono text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <p className="font-mono text-xs text-muted-foreground sm:hidden mt-0.5">
                            {skillNotes[skill.name]}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:block text-right">
                        <span className="font-mono text-xs text-muted-foreground transition-colors">
                          {skillNotes[skill.name]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Frontend Presentation */}
          <FadeIn delay={0.15}>
            <div>
              <div className="mb-3 flex items-center justify-between border-b border-border pb-2 font-mono text-xs">
                <span className="font-semibold uppercase tracking-wider text-foreground">
                  02 // Frontend &amp; Web Tier
                </span>
                <span className="text-[10px] text-muted-foreground">CLIENT APPS</span>
              </div>

              <div className="divide-y divide-border">
                {frontendSkills.map((skill) => {
                  const Icon = skillIcons[skill.name] ?? Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col justify-between py-3.5 transition-colors duration-150 hover:bg-surface/50 sm:flex-row sm:items-center sm:py-3 px-2 -mx-2"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                        <div>
                          <span className="font-mono text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <p className="font-mono text-xs text-muted-foreground sm:hidden mt-0.5">
                            {skillNotes[skill.name]}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:block text-right">
                        <span className="font-mono text-xs text-muted-foreground transition-colors">
                          {skillNotes[skill.name]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* DevOps & Tooling */}
          <FadeIn delay={0.2}>
            <div>
              <div className="mb-3 flex items-center justify-between border-b border-border pb-2 font-mono text-xs">
                <span className="font-semibold uppercase tracking-wider text-foreground">
                  03 // DevOps &amp; Developer Tools
                </span>
                <span className="text-[10px] text-muted-foreground">WORKFLOW</span>
              </div>

              <div className="divide-y divide-border">
                {toolSkills.map((skill) => {
                  const Icon = skillIcons[skill.name] ?? Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col justify-between py-3.5 transition-colors duration-150 hover:bg-surface/50 sm:flex-row sm:items-center sm:py-3 px-2 -mx-2"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                        <div>
                          <span className="font-mono text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <p className="font-mono text-xs text-muted-foreground sm:hidden mt-0.5">
                            {skillNotes[skill.name]}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:block text-right">
                        <span className="font-mono text-xs text-muted-foreground transition-colors">
                          {skillNotes[skill.name]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
