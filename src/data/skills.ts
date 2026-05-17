export type Skill = {
  name: string
  level: number // 1-100
  category: 'backend' | 'frontend' | 'tools'
}

export const skills: Skill[] = [
  // Backend
  { name: 'NestJS', level: 80, category: 'backend' },
  { name: 'TypeScript', level: 75, category: 'backend' },
  { name: 'MySQL', level: 75, category: 'backend' },
  { name: 'Prisma ORM', level: 75, category: 'backend' },
  { name: 'REST API', level: 80, category: 'backend' },

  // Frontend
  { name: 'Next.js', level: 30, category: 'frontend' },
  { name: 'React', level: 30, category: 'frontend' },
  { name: 'Tailwind CSS', level: 45, category: 'frontend' },

  // Tools
  { name: 'Git & GitHub', level: 75, category: 'tools' },
  { name: 'Docker', level: 40, category: 'tools' },
  { name: 'Postman', level: 80, category: 'tools' },
]