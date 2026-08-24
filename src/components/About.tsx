import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

const CODING_SINCE = 2024;

export default function About() {
  const yearsCoding = new Date().getFullYear() - CODING_SINCE;

  const stats = [
    { label: "Tahun Ngoding", value: `${yearsCoding}+` },
    { label: "Proyek Dibuat", value: `${projects.length}` },
    { label: "Status", value: "Siswa SMK" },
  ];

  return (
    <section id="about" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <SectionTitle title="About me." subtitle="Sedikit tentang saya" />
        </FadeIn>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Kiri — Teks */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Saya{" "}
                <span className="font-semibold text-primary">
                  Muhammad Fajar Kurniawan
                </span>
                , siswa SMK Telkom Malang jurusan Rekayasa Perangkat Lunak
                (RPL) yang mulai serius belajar coding sejak 2024. Awalnya
                penasaran soal bagaimana sistem di balik layar bekerja, lalu
                jatuh cinta pada backend development — terutama urusan
                struktur data, API, dan database.
              </p>
              <p>
                Saya lebih nyaman membangun sesuatu dari fondasi yang jelas:
                rancang skema database dulu, susun API yang rapi, baru
                pikirkan tampilan. <span className="text-foreground">NestJS</span>{" "}
                dan <span className="text-foreground">MySQL</span> jadi tools
                utama sehari-hari, dan sekarang saya sedang memperluas
                kemampuan ke sisi frontend dengan{" "}
                <span className="text-foreground">Next.js</span> supaya bisa
                menangani satu produk dari ujung ke ujung.
              </p>
              <p>
                Sejauh ini saya sudah membangun beberapa sistem nyata — mulai
                dari platform akses data publik sekolah, sistem catatan untuk
                ekosistem yang lebih efisien, sampai aplikasi manajemen
                apotek. Semuanya lahir dari masalah konkret yang saya temui,
                bukan sekadar latihan.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <p
                    className={
                      stat.label === "Status"
                        ? "text-sm font-bold text-primary"
                        : "text-2xl font-bold text-primary"
                    }
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>

          {/* Kanan — Foto */}
          <FadeIn direction="left" delay={0.2}>
            <div className="glow-card relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src="/FotoProfile.jpg"
                alt="Foto Muhammad Fajar Kurniawan"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
