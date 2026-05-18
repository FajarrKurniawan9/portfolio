import SectionTitle from "@/components/SectionTitle";
import FadeIn from "./FadeIn";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-mist-900/30">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Experience"
            subtitle="Perjalanan pendidikan dan pengalaman saya"
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Garis vertikal */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-mist-800" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="right">
                <div key={index} className="relative pl-12">
                  {/* Titik di timeline */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-mist-900 border-2 border-green-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>

                  {/* Badge type */}
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block ${
                      item.type === "education"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-green-500/10 text-green-400 border border-green-500/20"
                    }`}
                  >
                    {item.type === "education" ? "Education" : "Experience"}
                  </span>

                  {/* Konten */}
                  <div className="bg-mist-900/50 border border-mist-800 rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <span className="text-green-400 text-sm shrink-0">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-mist-500 text-sm mb-3">{item.place}</p>
                    <p className="text-mist-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn> 
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
