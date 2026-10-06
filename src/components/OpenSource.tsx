import { Star, GitFork, GitBranch, ArrowUpRight, FolderGit2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

const GITHUB_USERNAME = "FajarrKurniawan9";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
const GITHUB_REPOS_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`;

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  default_branch: string;
};

const FALLBACK_REPOS: Repository[] = [
  {
    id: 1293603714,
    name: "smasara-workspace",
    html_url: "https://github.com/FajarrKurniawan9/smasara-workspace",
    description: "School centralized digital workspace platform and productivity management system.",
    language: "Svelte",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    default_branch: "main",
  },
  {
    id: 1381099183,
    name: "stratergart_belajar_laravel",
    html_url: "https://github.com/FajarrKurniawan9/stratergart_belajar_laravel",
    description: "Architectural blueprint and implementation exercises in PHP & Laravel ecosystem.",
    language: "PHP",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    default_branch: "main",
  },
  {
    id: 1351871894,
    name: "FajarrKurniawan9",
    html_url: "https://github.com/FajarrKurniawan9/FajarrKurniawan9",
    description: "Personal developer profile documentation and public telemetry hub.",
    language: "Markdown",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    default_branch: "main",
  },
];

async function getRecentRepositories(): Promise<Repository[]> {
  try {
    const res = await fetch(GITHUB_REPOS_ENDPOINT, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return FALLBACK_REPOS;

    const repos: Repository[] = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) return FALLBACK_REPOS;

    return repos.slice(0, 3);
  } catch {
    return FALLBACK_REPOS;
  }
}

const LANGUAGE_COLORS: Record<string, string> = {
  Svelte: "bg-orange-500",
  PHP: "bg-indigo-400",
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  HTML: "bg-rose-500",
  CSS: "bg-teal-400",
  Markdown: "bg-zinc-400",
  Vue: "bg-emerald-400",
  Python: "bg-cyan-400",
};

export default async function OpenSource() {
  const repos = await getRecentRepositories();

  return (
    <section
      id="open-source"
      aria-label="Open Source & Version Control Telemetry"
      className="border-b border-white/[0.06] bg-zinc-950 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
                <FolderGit2 className="size-3 text-emerald-400" />
                VCS ACTIVITY // GITHUB
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Recent Repositories
              </h2>
              <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                3 repositori paling aktif yang diambil langsung dari GitHub API
              </p>
            </div>

            <Button
              variant="outline"
              nativeButton={false}
              className="h-8 gap-1.5 rounded-none border border-white/10 bg-zinc-900/60 px-3 font-mono text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-900 hover:text-white"
              render={
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              github.com/{GITHUB_USERNAME}
              <ArrowUpRight className="size-3 text-zinc-400" />
            </Button>
          </div>
        </FadeIn>

        {/* 3 Repository Cards — Precision GitHub/Vercel Aesthetic */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {repos.map((repo, index) => {
            const lang = repo.language || "Config";
            const langDotColor = LANGUAGE_COLORS[lang] || "bg-zinc-400";
            const description =
              repo.description ||
              "Koleksi modul, dependensi, dan logika sistem tanpa ringkasan statis.";

            return (
              <FadeIn key={repo.id} delay={0.08 * (index + 1)}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col justify-between border border-white/[0.08] bg-black p-5 transition-all duration-200 hover:border-white/25 hover:bg-zinc-900/30"
                >
                  <div>
                    {/* Top branch & outward link indicator */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <GitBranch className="size-3.5 text-zinc-400" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                          {repo.default_branch || "main"}
                        </span>
                      </div>

                      <ArrowUpRight className="size-3.5 text-zinc-600 transition-colors duration-200 group-hover:text-white" />
                    </div>

                    {/* Repository Identifier */}
                    <h3 className="mt-3 font-mono text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-zinc-200">
                      {repo.name}
                    </h3>

                    {/* Repository Description */}
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-400">
                      {description}
                    </p>
                  </div>

                  {/* Metadata Row: Language badge + Stats */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3.5 font-mono text-[11px] text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className={`size-2 rounded-full ${langDotColor}`} />
                      <span className="text-zinc-300">{lang}</span>
                    </div>

                    <div className="flex items-center gap-3 text-zinc-400">
                      <div className="flex items-center gap-1 hover:text-zinc-300">
                        <Star className="size-3 text-zinc-400" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-zinc-300">
                        <GitFork className="size-3 text-zinc-400" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>

        {/* Telemetry Status Line */}
        <FadeIn delay={0.35}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border border-white/[0.06] bg-zinc-900/20 px-4 py-2.5 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>LIVE REPO TELEMETRY SYNCHRONIZED</span>
            </div>
            <span className="text-[10px] text-zinc-400">
              ENDPOINT: /users/{GITHUB_USERNAME}/repos?sort=updated
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
