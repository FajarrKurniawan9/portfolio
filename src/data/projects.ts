export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  title: string
  description: string
  tech: string[]
  links: ProjectLink[]
  /** Screenshot/mockup path in `public/`. Omit to render a CSS-only gradient mockup instead. */
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Askala — Asisten Kerjasama Lingkungan Sekolah',
    description:
      'Software untuk mempermudah akses ke data publik sekolah.',
    tech: ['Next.js', 'NestJS', 'Supabase', 'Vercel'],
    links: [
      { label: 'Backend', url: 'https://github.com/FajarrKurniawan9/askala-siakad-system.git' },
      { label: 'Frontend', url: 'https://github.com/FajarrKurniawan9/app-askala.git' },
    ],
    image: '/ProjectSatu_Screenshot.png',
  },
  {
    title: 'Smasara — Smara Aksara',
    description:
      'Sistem catatan komprehensif untuk ekosistem yang lebih efisien.',
    tech: ['Go (Fiber)', 'SvelteKit', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FajarrKurniawan9/smasara-workspace.git' },
    ],
  },
  {
    title: 'Apos — Apotek Software',
    description:
      'Aplikasi manajemen apotek berbasis web untuk mengelola data dan transaksi obat.',
    tech: ['Laravel 12', 'React'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FajarrKurniawan9/apotek_software.git' },
    ],
  },
]
