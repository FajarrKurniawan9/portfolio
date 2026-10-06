"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import {
  Activity,
  ArrowUpRight,
  Download,
  Cpu,
  Database,
  Layers,
  Terminal,
} from "lucide-react";

const CV_URL =
  "https://drive.google.com/file/d/1BqcjXUduvstMRwAbJwV1zRmrViBPKj1a/view?usp=sharing";

const PROFILE_IMAGE = "/avatar.webp";

const topSkills = [...skills].sort((a, b) => b.level - a.level);
const heroTags = topSkills.slice(0, 6).map((s) => s.name);

interface TerminalLog {
  id: string;
  type: "system" | "exec" | "success" | "metric";
  prefix: string;
  text: string;
  timestamp: string;
}

const TERMINAL_SEQUENCE = [
  { id: "1", type: "system" as const, prefix: "[INIT]", text: "Booting Fajar_Kernel v3.2.0-lts (x86_64)..." },
  { id: "2", type: "exec" as const, prefix: "[EXEC]", text: "mount -t sysfs /dev/env.production /kernel" },
  { id: "3", type: "success" as const, prefix: "[OK]", text: "Allocated 8 worker threads for runtime daemon" },
  { id: "4", type: "exec" as const, prefix: "[LOAD]", text: "Fetching backend modules: NestJS, TypeORM, Redis" },
  { id: "5", type: "success" as const, prefix: "[READY]", text: "Database cluster active: MySQL master pool connected (0.42ms)" },
  { id: "6", type: "system" as const, prefix: "[HTTP]", text: "API gateway listening on 0.0.0.0:8080 (REST / gRPC)" },
  { id: "7", type: "metric" as const, prefix: "[TELEMETRY]", text: "Health check passed: zero error state, 99.98% reliability" },
  { id: "8", type: "success" as const, prefix: "[OK]", text: "Fajar_Core ready. Listening for incoming high-throughput jobs." },
];

export default function Hero() {
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentIndex >= TERMINAL_SEQUENCE.length) {
      const timeout = setTimeout(() => {
        setLogs([]);
        setCurrentIndex(0);
        setCurrentText("");
      }, 7000);
      return () => clearTimeout(timeout);
    }

    const targetItem = TERMINAL_SEQUENCE[currentIndex];
    const fullText = targetItem.text;

    if (currentText.length < fullText.length) {
      const typeSpeed = Math.floor(Math.random() * 14) + 12;
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }

    const pause = targetItem.type === "system" ? 220 : 380;
    const timeout = setTimeout(() => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
      setLogs((prev) => [
        ...prev,
        {
          ...targetItem,
          timestamp: timeStr,
        },
      ]);
      setCurrentText("");
      setCurrentIndex((prev) => prev + 1);
    }, pause);
    return () => clearTimeout(timeout);
  }, [currentIndex, currentText]);

  return (
    <section
      id="hero"
      aria-label="Overview & Developer Console"
      className="relative min-h-[calc(100vh-4rem)] border-b border-white/[0.06] bg-zinc-950 px-6 pt-24 pb-16 text-zinc-100 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top telemetry bar — Vercel / Linear inspired metadata header */}
        <FadeIn delay={0}>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border border-white/[0.08] bg-zinc-900/40 px-3.5 py-2 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-zinc-200">FAJAR_KERNEL // PROD</span>
              <span className="text-zinc-600">/</span>
              <span className="hidden sm:inline text-zinc-400">REGION: ap-southeast-3</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-zinc-500">
              <span className="hidden md:flex items-center gap-1.5">
                <Cpu className="size-3 text-zinc-400" /> SYSTEM IDLE 99%
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                OPEN FOR OPPORTUNITIES
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Asymmetrical Grid: 7 cols primary content / 5 cols command terminal & contributor profile */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Main Info Column (col-span-7) */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-7">
            <div>
              {/* Contributor Avatar Strip */}
              <FadeIn delay={0.05}>
                <div className="mb-6 flex items-center gap-3.5">
                  <div className="relative size-12 shrink-0 overflow-hidden border border-white/15 bg-zinc-900 shadow-inner">
                    <Image
                      src={PROFILE_IMAGE}
                      alt="Muhammad Fajar Kurniawan"
                      fill
                      priority
                      className="object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0 hover:contrast-100"
                      sizes="48px"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-zinc-200">
                        @FajarrKurniawan9
                      </span>
                      <span className="border border-white/10 bg-zinc-900 px-1.5 py-0.2 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                        CORE MAINTAINER
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-zinc-500">
                      Backend Systems &middot; Fullstack Architecture
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Sharp Typography Headline */}
              <FadeIn delay={0.1}>
                <h1 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[76px] lg:leading-[0.96]">
                  Building backends
                  <br />
                  <span className="text-zinc-400">that scale reliably.</span>
                </h1>
              </FadeIn>

              {/* Precise Pitch Description */}
              <FadeIn delay={0.15}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Backend Engineer yang berfokus pada arsitektur server terdistribusi,
                  efisiensi basis data, dan API berkinerja tinggi dengan NestJS, MySQL,
                  serta ekosistem Next.js modern.
                </p>
              </FadeIn>

              {/* Action Buttons: Pure Monochrome & Solid White Primary Accent */}
              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    nativeButton={false}
                    render={<a href="#projects" />}
                    className="h-9 gap-2 rounded-none border border-white bg-white px-4 font-sans text-xs font-medium text-black transition-colors hover:bg-zinc-200"
                  >
                    Explore Architectures
                    <ArrowUpRight className="size-3.5" />
                  </Button>

                  <Button
                    variant="outline"
                    nativeButton={false}
                    className="h-9 gap-2 rounded-none border border-white/10 bg-zinc-900/60 px-4 font-mono text-xs font-normal text-zinc-300 transition-colors hover:border-white/25 hover:bg-zinc-900 hover:text-white"
                    render={
                      <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    <Download className="size-3.5 text-zinc-400" />
                    Fetch Curriculum_Vitae.pdf
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Spec / Stack Matrix */}
            <FadeIn delay={0.25}>
              <div className="border-t border-white/[0.08] pt-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                    Runtime Stack & Specializations
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    STATUS: OPTIMIZED
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {heroTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-none border-white/[0.08] bg-zinc-900/50 px-2 py-0.5 font-mono text-[10px] font-normal tracking-wide text-zinc-300 uppercase hover:border-white/20 hover:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Minimalist Documentation Terminal Column (col-span-5) */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.15}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative border border-white/[0.1] bg-black shadow-2xl"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] bg-zinc-950 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-zinc-800 border border-white/10" />
                      <span className="size-2.5 rounded-full bg-zinc-800 border border-white/10" />
                      <span className="size-2.5 rounded-full bg-zinc-800 border border-white/10" />
                    </div>
                    <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
                      <Terminal className="size-3 text-zinc-500" />
                      fajar@daemon:~ (sh)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>STDOUT</span>
                  </div>
                </div>

                {/* Terminal Screen Body */}
                <div className="min-h-[340px] max-h-[380px] overflow-y-auto p-4 font-mono text-[11px] leading-relaxed text-zinc-300 select-none">
                  <div className="mb-3 text-zinc-400">
                    # Interactive Session Started [{new Date().getFullYear()}]
                    <br /># Target host: kernel.fajar.internal (PID: 4192)
                  </div>

                  {/* Rendered Past Logs */}
                  <div className="space-y-1.5">
                    {logs.map((log) => (
                      <div key={log.id} className="flex items-start gap-2">
                        <span className="shrink-0 text-zinc-400 text-[10px]">
                          {log.timestamp}
                        </span>
                        <span
                          className={
                            log.type === "success"
                              ? "text-emerald-400 shrink-0 font-medium"
                              : log.type === "exec"
                              ? "text-zinc-400 shrink-0"
                              : log.type === "metric"
                              ? "text-cyan-400 shrink-0"
                              : "text-zinc-500 shrink-0"
                          }
                        >
                          {log.prefix}
                        </span>
                        <span className="break-all text-zinc-300">{log.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Active Typing Row */}
                  {currentIndex < TERMINAL_SEQUENCE.length && (
                    <div className="mt-1.5 flex items-start gap-2">
                      <span className="shrink-0 text-zinc-400 text-[10px]">
                        ..:..:..
                      </span>
                      <span
                        className={
                          TERMINAL_SEQUENCE[currentIndex].type === "success"
                            ? "text-emerald-400 shrink-0 font-medium"
                            : TERMINAL_SEQUENCE[currentIndex].type === "exec"
                            ? "text-zinc-400 shrink-0"
                            : TERMINAL_SEQUENCE[currentIndex].type === "metric"
                            ? "text-cyan-400 shrink-0"
                            : "text-zinc-500 shrink-0"
                        }
                      >
                        {TERMINAL_SEQUENCE[currentIndex].prefix}
                      </span>
                      <span className="break-all text-zinc-100">
                        {currentText}
                        <span className="inline-block w-1.5 h-3.5 ml-1 translate-y-0.5 bg-white animate-[blink_0.9s_step-end_infinite]" />
                      </span>
                    </div>
                  )}

                  {/* Terminal Idle Cursor when complete */}
                  {currentIndex >= TERMINAL_SEQUENCE.length && (
                    <div className="mt-2 flex items-center gap-2 text-zinc-500">
                      <span className="text-zinc-300">fajar@daemon:~$</span>
                      <span className="inline-block w-1.5 h-3.5 bg-zinc-400 animate-[blink_1s_step-end_infinite]" />
                    </div>
                  )}
                </div>

                {/* Terminal Bottom Spec Strip */}
                <div className="grid grid-cols-3 border-t border-white/[0.08] bg-zinc-950 p-2.5 font-mono text-[10px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Layers className="size-3 text-zinc-400" />
                    <span>SYS: ONLINE</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <Database className="size-3 text-zinc-400" />
                    <span>MYSQL: SYNCED</span>
                  </div>
                  <div className="flex items-center justify-end gap-1.5 text-zinc-300">
                    <Activity className="size-3 text-emerald-400" />
                    <span>LATENCY: 0.8ms</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
