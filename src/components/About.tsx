import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { Terminal, ShieldCheck, GitCommit, Check } from "lucide-react";

const CODING_SINCE = 2024;
const PROFILE_IMAGE = "/avatar.webp";

export default function About() {
  const yearsCoding = new Date().getFullYear() - CODING_SINCE;

  const stats = [
    { label: "Engineering XP", value: `${yearsCoding}+ YRS`, sub: "Dedicated focus" },
    { label: "Shipped Systems", value: `${projects.length}`, sub: "Real production" },
    { label: "Academic Track", value: "SMK RPL", sub: "Software Eng." },
  ];

  return (
    <section id="about" className="border-b border-white/[0.06] bg-zinc-950 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <SectionTitle
            title="Engineer Dossier."
            subtitle="Prinsip rekayasa, fondasi sistem, dan etos kerja"
          />
        </FadeIn>

        {/* Clean Developer Console Layout: 7/5 Asymmetrical Grid */}
        <div className="mt-12 grid items-stretch gap-10 md:grid-cols-12">
          {/* Kiri — Core Narrative & Architecture Mindset (7 cols) */}
          <div className="flex flex-col justify-between md:col-span-7">
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-4 font-sans text-sm leading-relaxed text-zinc-400 sm:text-base">
                <p>
                  Saya{" "}
                  <span className="font-medium text-white">
                    Muhammad Fajar Kurniawan
                  </span>
                  , rekayasawan perangkat lunak dari SMK Telkom Malang yang mulai
                  mengeksplorasi sistem sejak 2024. Alih-alih terpaku pada sekadar tampilan luar,
                  fokus utama saya adalah efisiensi di balik layar: bagaimana throughput dijaga,
                  skema relasi data dimodelkan secara terstruktur, dan integritas API tetap kokoh
                  di bawah beban tinggi.
                </p>

                <p>
                  Filosofi rekayasa saya sederhana:{" "}
                  <span className="font-mono text-xs text-zinc-300">
                    &quot;Data consistency first, contracts explicit, UI responsive.&quot;
                  </span>{" "}
                  Dengan mengandalkan <span className="text-zinc-200">NestJS</span> dan{" "}
                  <span className="text-zinc-200">MySQL</span>, saya memastikan query
                  dioptimalkan dari level indeks. Di sisi presentation layer, saya memakai{" "}
                  <span className="text-zinc-200">Next.js</span> untuk integrasi end-to-end tanpa friksi.
                </p>

                <p>
                  Setiap proyek yang saya rilis—mulai dari platform informasi publik sekolah,
                  sistem pencatatan terdistribusi, hingga sistem manajemen apotek—dirancang untuk
                  menyelesaikan friksi nyata dengan jejak arsitektur yang terdokumentasi rapi.
                </p>
              </div>

              {/* Minimal Metrics Strip */}
              <div className="mt-8 grid grid-cols-3 gap-2.5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/[0.08] bg-zinc-900/40 p-3.5 transition-colors hover:border-white/20"
                  >
                    <p className="font-mono text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-400">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Kanan — High Contrast Contributor Avatar & Identity Card (5 cols) */}
          <div className="md:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="border border-white/[0.1] bg-black p-4">
                {/* Image Frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden border border-white/[0.08] bg-zinc-900">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Foto Muhammad Fajar Kurniawan"
                    fill
                    className="object-cover grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
                    sizes="(min-width: 768px) 380px, 100vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                  {/* Top-right overlay badge */}
                  <div className="absolute top-2.5 right-2.5 border border-white/20 bg-black/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400 backdrop-blur-sm">
                    DEV // VERIFIED
                  </div>
                </div>

                {/* Identity Metadata Footer */}
                <div className="mt-3.5 space-y-1.5 border-t border-white/[0.08] pt-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-[11px]">CONTRIBUTOR_ID</span>
                    <span className="text-zinc-200">#FJR-0924</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-[11px]">LOCATION</span>
                    <span className="text-zinc-300">Malang, ID</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-[11px]">SPECIALTY</span>
                    <span className="text-emerald-400">Backend & API Spec</span>
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
