"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

const CV_URL =
  "https://drive.google.com/file/d/1BqcjXUduvstMRwAbJwV1zRmrViBPKj1a/view?usp=sharing";

const topSkills = [...skills].sort((a, b) => b.level - a.level);
const heroTags = topSkills.slice(0, 5).map((s) => s.name);
const stackForSnippet = topSkills.slice(0, 3).map((s) => s.name);

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-screen items-center gap-16 px-6 py-[100px] md:grid-cols-2 md:px-16"
    >
      {/* Kiri — copy */}
      <div>
        <FadeIn delay={0}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary">
            <span className="size-1.5 animate-[blink_1s_step-end_infinite] rounded-full bg-primary" />
            OPEN TO WORK · 2026
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[clamp(52px,6.5vw,88px)] leading-[0.92] font-extrabold tracking-[-0.04em] text-foreground">
            Building backends
            <br />
            that scale reliably.
            <span className="animate-[blink_1s_step-end_infinite] text-primary">
              |
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Backend Engineer yang berspesialisasi pada NestJS dan MySQL, kini
            terjun ke dunia full-stack development.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<a href="#projects" />}
              className="font-sans"
            >
              View projects →
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              className="font-sans"
              render={
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              Download CV
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <Badge
                key={tag}
                variant="tint"
                className="font-mono text-[10px] tracking-wide uppercase"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Kanan — terminal code block */}
      <FadeIn direction="left" delay={0.2}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto w-[85%] max-w-md rounded-lg border border-border bg-surface p-5 font-mono text-[13px] leading-relaxed md:w-full"
          style={{ filter: "drop-shadow(0 0 40px hsl(142 72% 50% / 0.15))" }}
        >
          <p className="text-muted-foreground">{"// building the future"}</p>
          <p className="text-foreground">
            <span className="text-muted-foreground">const</span> fajar = {"{"}
          </p>
          <p className="pl-4 text-foreground">
            role: <span className="text-primary">&quot;Backend Engineer&quot;</span>,
          </p>
          <p className="pl-4 text-foreground">
            stack: [
            {stackForSnippet.map((s, i) => (
              <span key={s}>
                <span className="text-primary">&quot;{s}&quot;</span>
                {i < stackForSnippet.length - 1 ? ", " : ""}
              </span>
            ))}
            ],
          </p>
          <p className="pl-4 text-foreground">
            open: <span className="text-primary">true</span>,
          </p>
          <p className="text-foreground">{"}"};</p>
        </motion.div>
      </FadeIn>
    </section>
  );
}
