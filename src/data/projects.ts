export type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Lorem Ipsum 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['NestJS', 'TypeScript', 'MySQL', 'Prisma'],
    github: 'https://github.com/FajarrKurniawan9/',
  },
  {
    title: 'Lorem Ipsum 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/FajarrKurniawan9/',
    demo: 'https://vercel.app',
  },
  {
    title: 'Lorem Ipsum 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['NestJS', 'MySQL', 'REST API'],
    github: 'https://github.com/FajarrKurniawan9/',
  },
]