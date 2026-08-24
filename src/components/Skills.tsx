import {
  Server,
  FileCode2,
  Database,
  Layers,
  Webhook,
  AppWindow,
  Atom,
  Palette,
  GitBranch,
  Container,
  Send,
  Code2,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/data/skills";
import FadeIn from "@/components/FadeIn";
import { Card } from "@/components/ui/card";

const categories = {
  backend: "Backend",
  frontend: "Frontend",
  tools: "Tools & Others",
};

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

export default function Skills() {
  return (
    <section id="skills" className="bg-surface px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title="The stack." subtitle="Teknologi yang saya kuasai" />
        </FadeIn>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(categories) as Array<keyof typeof categories>).map(
            (category, index) => (
              <FadeIn key={category} delay={index * 0.1}>
                <div>
                  <h3 className="mb-4 font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                    {categories[category]}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => {
                        const Icon = skillIcons[skill.name] ?? Code2;
                        return (
                          <Card
                            key={skill.name}
                            className="glow-card flex-row items-center gap-2 rounded-lg border border-border bg-surface-raised p-3"
                          >
                            <Icon className="size-4 shrink-0 text-primary" />
                            <span className="font-mono text-[11px] text-foreground">
                              {skill.name}
                            </span>
                          </Card>
                        );
                      })}
                  </div>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
