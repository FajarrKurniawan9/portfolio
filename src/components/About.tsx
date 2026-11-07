import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

const CODING_SINCE = 2024;
const PROFILE_IMAGE = "/avatar.webp";

export default function About() {
  const yearsCoding = new Date().getFullYear() - CODING_SINCE;

  const stats = [
    { label: "Experience", value: `${yearsCoding}+ YRS`, sub: "Dedicated practice" },
    { label: "Shipped Systems", value: `${projects.length}`, sub: "Production projects" },
    { label: "Education", value: "SMK Telkom", sub: "Malang, Indonesia" },
  ];

  return (
    <section id="about" className="border-b border-border bg-transparent px-4 py-16 sm:px-6 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <SectionTitle
            title="About Me"
            subtitle="Background, engineering focus, and what drives my work"
          />
        </FadeIn>

        {/* Clean Developer Console Layout: 7/5 Asymmetrical Grid */}
        <div className="mt-12 grid items-stretch gap-10 md:grid-cols-12">
          {/* Kiri - Core Narrative & Architecture Mindset (7 cols) */}
          <div className="flex flex-col justify-between md:col-span-7">
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-4 font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Hi, I&apos;m{" "}
                  <span className="font-medium text-foreground">
                    Muhammad Fajar Kurniawan
                  </span>
                  , a software engineering student at SMK Telkom Malang with a focused passion for backend architectures, database modeling, and high-reliability APIs.
                </p>

                <p>
                  I believe great software starts with clean relational schemas and explicit contracts. I work primarily with{" "}
                  <span className="font-medium text-foreground">NestJS</span>,{" "}
                  <span className="font-medium text-foreground">MySQL</span>, and modern{" "}
                  <span className="font-medium text-foreground">Next.js</span> to deliver reliable, production-ready solutions for real problems.
                </p>
              </div>

              {/* Minimal Metrics Strip */}
              <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-border bg-surface p-3.5 transition-colors hover:border-accent/60 hover:bg-surface-raised"
                  >
                    <p className="font-mono text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground/80">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Kanan - Contributor Avatar & Identity Card (5 cols) */}
          <div className="md:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="border border-border bg-surface p-4">
                {/* Image Frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden border border-border bg-background">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Foto Muhammad Fajar Kurniawan"
                    fill
                    className="object-cover grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
                    sizes="(min-width: 768px) 380px, 100vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                  {/* Top-right natural badge */}
                  <div className="absolute top-2.5 right-2.5 border border-accent/40 bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-accent">
                    Software Engineer
                  </div>
                </div>

                {/* Identity Metadata Footer */}
                <div className="mt-3.5 space-y-1.5 border-t border-border pt-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px]">Role</span>
                    <span className="text-foreground">Backend &amp; Fullstack</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px]">Location</span>
                    <span className="text-foreground">Malang, ID</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px]">Focus</span>
                    <span className="text-accent font-medium">NestJS &middot; MySQL &middot; Next.js</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
