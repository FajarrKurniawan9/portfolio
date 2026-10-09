"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { skills } from "@/data/skills";
import {
  ArrowRight,
  Download,
  Terminal as TerminalIcon,
  Check,
  Server,
  Zap,
  Database
} from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1BqcjXUduvstMRwAbJwV1zRmrViBPKj1a/view?usp=sharing";
const PROFILE_IMAGE = "/avatar.webp";
const topSkills = [...skills].sort((a, b) => b.level - a.level);
const heroTags = topSkills.slice(0, 4).map((s) => s.name);

interface TerminalLog {
  id: string;
  prefix: string;
  text: string;
}

const TERMINAL_SEQUENCE = [
  { id: "1", prefix: "system >", text: "Initializing kernel v3.2.0..." },
  { id: "2", prefix: "deploy >", text: "Mounting persistent volumes" },
  { id: "3", prefix: "health >", text: "Databases sync complete (0.8ms)" },
  { id: "4", prefix: "server >", text: "API gateway listening on :8080" },
  { id: "5", prefix: "status >", text: "System optimized. Ready for load." },
];

export default function Hero() {
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= TERMINAL_SEQUENCE.length) return;
    const targetItem = TERMINAL_SEQUENCE[currentIndex];
    
    const timeout = setTimeout(() => {
      setLogs((prev) => [...prev, targetItem]);
      setCurrentIndex((prev) => prev + 1);
    }, 400 + Math.random() * 300);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section
      id="hero"
      aria-label="Overview"
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden border-b border-border bg-background px-6 pt-28 pb-16 text-foreground md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Top Pill / Badge */}
        <FadeIn delay={0}>
          <div className="mx-auto mb-8 flex w-max items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="flex size-2 items-center justify-center rounded-full bg-primary/20">
              <span className="size-1 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </div>
        </FadeIn>

        {/* Massive Headline, Geist/LocalCan Style */}
        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[0.95]">
            Building backends <br />
            <span className="text-muted-foreground">that scale reliably.</span>
          </h1>
        </FadeIn>

        {/* Clean minimal description */}
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Backend Engineer focused on distributed server architecture, database efficiency, and high-performance APIs using NestJS, MySQL, and the modern Next.js ecosystem.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#projects" />}
              className="h-11 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-md"
            >
              Explore Architectures
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button
              variant="outline"
              nativeButton={false}
              className="h-11 rounded-md border-border bg-surface px-6 font-medium text-foreground transition-colors hover:bg-surface-raised"
              render={<a href={CV_URL} target="_blank" rel="noopener noreferrer" />}
            >
              <Download className="mr-2 size-4 text-muted-foreground" />
              Fetch Request CV
            </Button>
          </div>
        </FadeIn>

        {/* Specs / Tags underneath */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:gap-8">
            <div className="flex items-center gap-1.5">
              <Server className="size-4" /> Highly Available
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="size-4" /> Optimized Queries
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="size-4" /> Low Latency
            </div>
          </div>
        </FadeIn>

        {/* Mock Terminal/Console centered below */}
        <FadeIn delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mt-16 max-w-3xl flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
          >
            {/* Window header */}
            <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
              </div>
              <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                <TerminalIcon className="size-3" /> system.log
              </span>
            </div>

            {/* Window body */}
            <div className="h-[200px] bg-background p-4 text-left font-mono text-xs text-muted-foreground">
              {logs.map((log) => (
                <div key={log.id} className="mb-2 flex items-start gap-3">
                  <span className="text-border shrink-0">{log.prefix}</span>
                  <span className="text-foreground">{log.text}</span>
                </div>
              ))}
              {currentIndex >= TERMINAL_SEQUENCE.length && (
                <div className="flex items-center gap-2 text-primary">
                  <Check className="size-3" /> System ready.
                </div>
              )}
              {currentIndex < TERMINAL_SEQUENCE.length && (
                <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
              )}
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
