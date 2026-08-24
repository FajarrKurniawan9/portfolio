export type Experience = {
  year: string
  title: string
  place: string
  description: string
  type: 'education' | 'experience'
}

export const experiences: Experience[] = [
  {
    year: '2024 - Sekarang',
    title: 'Siswa RPL',
    place: 'SMK Telkom Malang',
    description: 'Belajar dasar-dasar pemrograman, web development, dan database. Fokus pada backend development menggunakan NestJS dan TypeScript.',
    type: 'education',
  },
]
