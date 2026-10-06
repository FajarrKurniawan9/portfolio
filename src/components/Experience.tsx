import FadeIn from "@/components/FadeIn";
import { experiences } from "@/data/experience";
import { GitCommit, Calendar, MapPin, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Engineering Track Record"
      className="border-b border-white/[0.06] bg-zinc-950 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                <GitCommit className="size-3 text-zinc-400" />
                TIMELINE // TRACK RECORD
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                Experience & Education
              </h2>
              <p className="mt-1 font-mono text-xs text-zinc-500 sm:text-sm">
                Riwayat pendidikan formal dan pengembangan spesialisasi sistem
              </p>
            </div>

            <div className="font-mono text-[11px] text-zinc-500">
              STATUS: CONTINUOUS LEARNING
            </div>
          </div>
        </FadeIn>

        {/* Git Log / Commit Style Entry List (No repetitive cards or bulky dots) */}
        <div className="mt-8 divide-y divide-white/[0.06]">
          {experiences.map((item, index) => (
            <FadeIn key={item.title + index} delay={index * 0.1}>
              <div className="group py-6 transition-colors duration-150 hover:bg-white/[0.02] px-2 -mx-2">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  {/* Title & Organization */}
                  <div className="flex items-start gap-3">
                    <span className="mt-1 font-mono text-[11px] text-zinc-600">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight sm:text-lg">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <MapPin className="size-3 text-zinc-500" />
                          {item.place}
                        </span>
                        <span className="text-zinc-600">&middot;</span>
                        <span className="border border-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400">
                          {item.type === "education" ? "Formal Education" : "Industry Role"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="font-mono text-xs text-zinc-400 shrink-0 sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar className="size-3 text-zinc-500" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>

                {/* Description Narrative */}
                <div className="mt-4 pl-7 sm:pl-7">
                  <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
