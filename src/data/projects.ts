export interface ProjectWorkflow {
  title: string;
  steps: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  workflow: ProjectWorkflow;
  visual: 'devlens' | 'tastemate' | 'askai';
}

export const projects: Project[] = [
  {
    id: 'devlens',
    title: 'DevLens',
    category: 'AI Agents | Backend Engineering | Developer Automation',
    summary: 'An autonomous AI software engineer that turns application crashes into verified fixes and pull requests.',
    description:
      'DevLens detects application runtime crashes, analyzes the issue, verifies fixes through automated testing, and generates GitHub Pull Requests for review. It demonstrates how AI agents can take on routine debugging work inside a developer workflow.',
    features: [
      'Runtime crash detection through webhooks',
      'Plan-first AI architecture',
      'Reads project documentation from a devpost/ folder (scope.md, prd.md, spec.md, checklist.md)',
      'Automated code-fix workflow',
      'Jest-based test verification',
      'GitHub API integration',
      'Automated Pull Request generation',
    ],
    technologies: ['Node.js', 'JavaScript', 'Jest', 'GitHub API', 'Webhooks', 'AI Agent Framework'],
    githubUrl: 'https://github.com/Muhammad-Husnain007/ai-basics',
    workflow: {
      title: 'How DevLens works',
      steps: [
        'Application Crash',
        'Webhook',
        'AI Agent',
        'Project Documentation',
        'Code Fix',
        'Jest Verification',
        'GitHub Pull Request',
      ],
    },
    visual: 'devlens',
  },
  {
    id: 'tastemate',
    title: 'TasteMate AI',
    category: 'AI Integration | Full-Stack Development | Recommendation Systems',
    summary: 'A conversational platform that recommends movies, restaurants and hotels around each person\'s taste and budget.',
    description:
      'TasteMate AI is an intelligent personalized recommendation platform that helps users discover movies, restaurants, and hotels based on their interests, preferences, and budget. A chatbot gathers preferences and returns tailored recommendations powered by Qloo Taste Intelligence.',
    features: [
      'Conversational recommendation experience',
      'Personalized, interest-based discovery',
      'Budget-aware recommendations',
      'Movie, restaurant and hotel discovery',
      'Qloo Taste Intelligence integration',
      'Interactive AI chatbot and responsive interface',
    ],
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'React', 'Qloo Taste Intelligence', 'REST APIs'],
    githubUrl: 'https://github.com/Muhammad-Husnain007/qloo-hackathon-be',
    workflow: {
      title: 'How TasteMate AI works',
      steps: ['User', 'AI Chatbot', 'Preference Processing', 'Qloo Taste Intelligence', 'Personalized Recommendations'],
    },
    visual: 'tastemate',
  },
  {
    id: 'ask-ai',
    title: 'Ask AI',
    category: 'AI Applications | Full-Stack Development',
    summary: 'An AI-powered assistant for real-time questions, with model routing and a browser extension interface.',
    description:
      'Ask AI is an AI-powered interactive assistant built to handle real-time user queries and dynamic conversations. It includes a backend that routes requests to models and returns fast, accurate answers, plus a browser extension for everyday access.',
    features: [
      'Real-time question handling',
      'Model routing',
      'Fast response processing',
      'Browser extension interface',
      'Simple API integration for fast deployment',
    ],
    technologies: ['Backend API', 'Browser Extension', 'AI Models'],
    githubUrl: 'https://github.com/Muhammad-Husnain007/Ask-ai',
    workflow: {
      title: 'How Ask AI is structured',
      steps: ['Browser Extension', 'Backend API', 'Model Routing', 'Accurate Answer'],
    },
    visual: 'askai',
  },
];
