import { Star, FolderGit2, Users } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GITHUB_USERNAME = "FajarrKurniawan9";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

type GithubStats = {
  stars: number;
  repos: number;
  followers: number;
};

async function getGithubStats(): Promise<GithubStats | null> {
  try {
    const headers = { Accept: "application/vnd.github+json" };
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 3600 }, // GitHub's unauthenticated rate limit is 60 req/hr — refresh at most hourly
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: { public_repos: number; followers: number } = await userRes.json();
    const repos: { stargazers_count: number }[] = await reposRes.json();
    const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

    return { stars, repos: user.public_repos, followers: user.followers };
  } catch {
    return null;
  }
}

export default async function OpenSource() {
  const github = await getGithubStats();

  const stats = [
    { label: "Stars", value: github ? String(github.stars) : "—", icon: Star },
    {
      label: "Repositories",
      value: github ? String(github.repos) : "—",
      icon: FolderGit2,
    },
    {
      label: "Followers",
      value: github ? String(github.followers) : "—",
      icon: Users,
    },
  ];

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
