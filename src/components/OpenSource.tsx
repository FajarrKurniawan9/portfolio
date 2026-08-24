import { Star, FolderGit2, GitCommitHorizontal } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GITHUB_URL = "https://github.com/FajarrKurniawan9";

// TODO: angka di bawah masih placeholder — wire ke GitHub API (stars/repos/contributions) setelah generation.
const stats = [
  { label: "Stars", value: "—", icon: Star },
  { label: "Repositories", value: "—", icon: FolderGit2 },
  { label: "Contributions", value: "—", icon: GitCommitHorizontal },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="bg-surface px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle
            title="Open Source."
            subtitle="Aktivitas dan kontribusi saya di GitHub"
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <Card className="glow-card items-center gap-2 rounded-xl border border-border bg-background p-6 text-center">
                <stat.icon className="size-5 text-primary" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              nativeButton={false}
              className="font-sans"
              render={
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              View GitHub profile →
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
