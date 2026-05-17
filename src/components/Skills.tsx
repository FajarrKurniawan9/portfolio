import SectionTitle from '@/components/SectionTitle'
import { skills } from '@/data/skills'

const categories = {
  backend: 'Backend',
  frontend: 'Frontend',
  tools: 'Tools & Others',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-mist-900/30">
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          title="Skills"
          subtitle="Teknologi yang saya kuasai"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
            <div
              key={category}
              className="bg-mist-900/50 border border-mist-800 rounded-2xl p-6"
            >
              {/* Judul kategori */}
              <h3 className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-6">
                {categories[category]}
              </h3>

              {/* List skill */}
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      {/* Nama & Level */}
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-mist-300">{skill.name}</span>
                        <span className="text-mist-500">{skill.level}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-mist-800 rounded-full">
                        <div
                          className="h-1.5 bg-green-700 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}