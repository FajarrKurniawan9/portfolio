import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0}>
          <SectionTitle title="About Me" subtitle="Sedikit tentang saya" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Kiri — Teks */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-4 text-mist-400 leading-relaxed">
              <p>
                Halo! Saya{" "}
                <span className="text-green-700 font-semibold">
                  Muhammad Fajar Kurniawan
                </span>
                , siswa SMK kelas 11 jurusan RPL yang passionate di dunia
                backend development.
              </p>
              <p>
                Saya sudah terbiasa bekerja dengan{" "}
                <span className="text-white">NestJS</span>,{" "}
                <span className="text-white">TypeScript</span>, dan{" "}
                <span className="text-white">MySQL</span>. Sekarang saya sedang
                memperluas skill ke dunia fullstack dengan belajar Next.js.
              </p>
              <p>
                Di luar coding, saya suka eksplorasi teknologi baru dan
                membangun project yang bisa bermanfaat.
              </p>
            </div>
          </FadeIn>

          {/* Kanan — Info Card */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-mist-900/50 border border-mist-800 rounded-2xl p-6 space-y-4">
              {[
                { label: "Nama", value: "Muhammad Fajar Kurniawan" },
                { label: "Status", value: "Siswa SMK Kelas 11" },
                { label: "Jurusan", value: "Rekayasa Perangkat Lunak" },
                { label: "Focus", value: "Backend & Fullstack" },
                { label: "Location", value: "Mojokerto, Indonesia" },
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <span className="text-green-700 font-medium w-24 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-mist-300">{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
