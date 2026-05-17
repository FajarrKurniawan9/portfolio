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
  {
    year: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    place: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'experience',
  },
]