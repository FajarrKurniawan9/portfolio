import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* Tulisan kecil di atas */}
      <FadeIn delay={0}>
        <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-4">
          Halo, saya
        </p>
      </FadeIn>

      {/* Nama besar */}
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Muhammad Fajar Kurniawan
        </h1>
      </FadeIn>

      {/* Subtitle */}
      <FadeIn delay={0.2}>
        <h2 className="text-xl md:text-2xl font-medium text-mist-400 mb-6">
          Backend Developer & Fullstack Enthusiast
        </h2>
      </FadeIn>

      {/* Deskripsi singkat */}
      <FadeIn delay={0.3}>
        <p className="max-w-xl text-mist-500 text-base leading-relaxed mb-10">
          Manusia yang passionate di dunia backend & pendidikan, sedang
          menjelajahi dunia fullstack development & filsuf.
        </p>
      </FadeIn>

      {/* Tombol CTA */}
      <FadeIn delay={0.4}>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-green-700 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
          >
            Lihat Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-green-700 hover:border-green-500 text-green-700 font-semibold rounded-lg transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
