import { Blocks, Bot, Cloud, Code2, Database, Server, Wrench, Zap, type LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frontend',
    icon: Code2,
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    items: [
      'Node.js',
      'Express.js',
      'RESTful API Design',
      'API Versioning',
      'Middleware Architecture',
      'JWT Authentication',
      'OAuth 2.0',
      'Webhook Integration',
      'Authorization',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB (Mongoose)', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase Firestore'],
  },
  {
    title: 'Real-Time & Performance',
    icon: Zap,
    items: ['Socket.io', 'Ably', 'WebSockets', 'Redis Caching', 'Bull Job Queues', 'Rate Limiting', 'Cron Jobs', 'Query Optimization', 'Database Indexing'],
  },
  {
    title: 'System Design',
    icon: Blocks,
    items: [
      'Microservices Architecture',
      'Distributed Systems',
      'Event-Driven Architecture',
      'Message Queues',
      'Sharding & Replication',
      'Load Balancing',
      'API Gateway Design',
      'Caching Strategies',
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    items: ['AWS (EC2, S3)', 'Nginx', 'PM2', 'Docker', 'Linux Server Management', 'Firebase Storage', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Bull Board', 'LiveKit'],
  },
  {
    title: 'AI Integration',
    icon: Bot,
    items: ['LLM-powered assistants', 'Recommendation engines (Qloo Taste Intelligence)', 'Autonomous AI developer tooling'],
  },
];
