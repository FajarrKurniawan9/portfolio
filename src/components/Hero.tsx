"use client";

import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Server,
  Zap,
  Database
} from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1BqcjXUduvstMRwAbJwV1zRmrViBPKj1a/view?usp=sharing";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Overview"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden border-b border-border bg-transparent px-4 pt-28 pb-16 text-foreground sm:px-6 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl text-center relative z-10">
        {/* Top Pill / Badge */}
        <FadeIn delay={0}>
          <div className="mx-auto mb-6 sm:mb-8 flex w-max items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="text-muted-foreground font-mono text-[11px]">
              SMK Telkom Malang &middot; Software Engineer
            </span>
          </div>
        </FadeIn>

        {/* Massive Headline, Solid Bold Typography */}
        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-[82px] lg:leading-[0.96]">
            Engineering systems <br />
            <span className="text-foreground">
              that scale without friction.
            </span>
          </h1>
        </FadeIn>

        {/* Clean minimal description */}
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Backend &amp; full-stack software engineer focused on modular server architectures, efficient database schemas, and dependable APIs using NestJS, MySQL, and Next.js.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 w-full sm:w-auto sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#projects" />}
              className="h-12 w-full sm:w-auto rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-all hover:bg-primary/95 shadow-[0_0_24px_-4px_rgba(212,163,115,0.35)] hover:shadow-[0_0_32px_-2px_rgba(212,163,115,0.5)]"
            >
              Explore Projects
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button
              variant="outline"
              nativeButton={false}
              className="h-12 w-full sm:w-auto rounded-md border-border bg-surface px-6 font-medium text-foreground transition-colors hover:bg-surface-raised hover:border-border"
              render={<a href={CV_URL} target="_blank" rel="noopener noreferrer" />}
            >
              <Download className="mr-2 size-4 text-muted-foreground" />
              Download CV
            </Button>
          </div>
        </FadeIn>

        {/* Specs / Tags underneath */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground md:gap-8">
            <div className="flex items-center gap-2 border border-border bg-surface/60 px-3 py-1.5">
              <Server className="size-3.5 text-accent" />
              <span>Modular Backend</span>
            </div>
            <div className="flex items-center gap-2 border border-border bg-surface/60 px-3 py-1.5">
              <Database className="size-3.5 text-accent" />
              <span>Database Schemas</span>
            </div>
            <div className="flex items-center gap-2 border border-border bg-surface/60 px-3 py-1.5">
              <Zap className="size-3.5 text-accent" />
              <span>High Performance APIs</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
