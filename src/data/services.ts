import { Bot, Cloud, Code2, Plug, Radio, Server, type LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    title: 'Full-Stack Web Application Development',
    icon: Code2,
    description: 'Complete web applications from interface to database, built to be maintained after launch.',
    points: ['React frontend', 'Node.js backend', 'Database integration', 'Responsive design'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'The reliable core your product runs on: clear APIs, secure access and well-designed data.',
    points: ['REST API development', 'Backend architecture', 'Authentication and authorization', 'Database design', 'Third-party API integration'],
  },
  {
    title: 'AI Integration & Agent Development',
    icon: Bot,
    description: 'Practical AI features that solve a specific problem for your users or your team.',
    points: ['AI chatbot development', 'LLM integration', 'AI-powered applications', 'Automated workflows', 'Recommendation systems'],
  },
  {
    title: 'Real-Time Application Development',
    icon: Radio,
    description: 'Live features where information updates instantly across every connected user.',
    points: ['Socket.io integration', 'Real-time messaging', 'Event-driven communication'],
  },
  {
    title: 'API Development & Integration',
    icon: Plug,
    description: 'Connecting your product to the outside world safely and reliably.',
    points: ['REST APIs', 'Webhooks', 'OAuth 2.0 sign-in', 'External service integrations'],
  },
  {
    title: 'Deployment & Server Setup',
    icon: Cloud,
    description: 'Getting your application running on a stable server with the tooling to keep it healthy.',
    points: ['AWS (EC2, S3)', 'Nginx reverse proxy', 'Docker and PM2', 'CI/CD with GitHub Actions'],
  },
];
