export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'K-Labs Technology',
    role: 'Backend Developer',
    period: 'Nov 2025 - Sep 2026',
    summary:
      'Backend development for a live consumer mobile application, supporting the services behind the app experience.',
    highlights: ['Siin Mobile App: live on the app store with more than 10,000 downloads.'],
  },
  {
    company: 'Astral Developers',
    role: 'Backend Developer',
    period: 'Nov 2024 - Oct 2025',
    summary: 'Backend development on professional software projects for client and internal products.',
    highlights: [],
  },
];

export const education: EducationEntry[] = [
  {
    title: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'Virtual University of Pakistan',
    period: '2025',
  },
  {
    title: 'Intermediate, Computer Science',
    institution: 'Board of Intermediate Education Karachi (BIEK)',
    period: '',
  },
  {
    title: 'Matriculation, Science',
    institution: 'Board of Secondary Education Karachi (BSEK)',
    period: '',
  },
];

export const privateWork = [
  {
    title: 'Mobile application backend',
    category: 'Backend Systems',
    text: 'Backend services supporting a live mobile application that has reached more than 10,000 downloads on the app store.',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Business software and API integrations',
    category: 'Application Development',
    text: 'Backend work on business-specific software in professional environments, including API integrations and data handling.',
    technologies: ['REST APIs', 'Webhooks', 'MongoDB', 'PostgreSQL'],
  },
];
