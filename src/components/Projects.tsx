import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { Project } from "@/data/projects";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        cache: "no-store", // selalu fetch data terbaru
      },
    );
    const json = await response.json();
    return json.data;
  } catch {
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Projects"
            subtitle="Beberapa project yang pernah saya buat"
          />
        </FadeIn>

        {/* Kalau data kosong */}
        {projects.length === 0 && (
          <FadeIn>
            <p className="text-center text-mist-500">
              Belum ada project. Nantikan ya!!
            </p>
          </FadeIn>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div
                key={project.title}
                className="bg-mist-900/50 border border-mist-800 hover:border-green-900 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
              >
                {/* Judul */}
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-mist-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm pt-2 border-t border-mist-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist-400 hover:text-green-400 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mist-400 hover:text-green-400 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
