import { Blocks, Globe, Layers, Sparkles, Workflow, Zap, type LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Muhammad Husnain',
  roles: ['Full-Stack Developer', 'Backend Engineer', 'AI Integration Specialist'],
  headline: 'Building Scalable Applications, Intelligent AI Solutions & Powerful Backend Systems.',
  description:
    'I help businesses transform ideas into reliable digital products through modern web technologies, scalable backend architecture, and AI-powered solutions.',
  heroLead: 'Turning complex ideas into scalable software and intelligent digital experiences.',
  heroDetail:
    'I specialize in building modern web applications, robust backend systems, REST APIs, real-time applications, and AI-powered products.',
  heroStack: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'MongoDB', 'Socket.io'],
  about: [
    'I am a backend-focused full-stack developer. I build the parts of a product users never see but always depend on: APIs, databases, authentication, real-time features, and the infrastructure that keeps them running.',
    'My professional experience includes backend development for a live mobile application with more than 10,000 downloads on the app store, along with backend roles at K-Labs Technology and Astral Developers since November 2024.',
    'I work with clients to solve business problems rather than simply deliver code. I start by understanding what the product needs to do, design a backend that can grow with it, and connect it to the frontend, third-party services and AI tools that make it useful.',
  ],
  whyWorkWithMe: [
    {
      title: 'End-to-end ownership',
      text: 'From the database and API to the user interface and deployment, I can take a project from idea to launch.',
      icon: Layers,
    },
    {
      title: 'Scalable backend architecture',
      text: 'Systems designed around REST APIs, caching, job queues and clear data models so they can grow with your business.',
      icon: Blocks,
    },
    {
      title: 'Practical problem-solving',
      text: 'I focus on the business outcome first, then choose the simplest technical approach that delivers it reliably.',
      icon: Zap,
    },
    {
      title: 'Third-party and API integration',
      text: 'Experience connecting products to external services, webhooks, OAuth-based sign-in and AI platforms.',
      icon: Globe,
    },
    {
      title: 'AI-powered application development',
      text: 'Hands-on work with LLM-based assistants, recommendation engines and autonomous developer tooling.',
      icon: Sparkles,
    },
    {
      title: 'Responsive, polished interfaces',
      text: 'Frontends built with React and Tailwind CSS that work well on phones, tablets and desktops.',
      icon: Workflow,
    },
    {
      title: 'Clear communication and ownership',
      text: 'Clear milestones and regular updates, so you always know where the project stands and what comes next.',
      icon: Workflow,
    },
  ] satisfies { title: string; text: string; icon: LucideIcon }[],
  links: {
    github: 'https://github.com/Muhammad-Husnain007',
    // Replace with your Upwork profile URL
    upwork: 'https://www.upwork.com/',
    linkedin: '',
    email: '',
    // Add a public URL to your resume PDF to enable the Download Resume button
    resume: '',
  },
};
