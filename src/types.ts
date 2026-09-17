export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'other' | 'mobile' | 'design' | 'ai';
  tags: string[];
  color: 'purple' | 'pink' | 'blue' | 'teal' | 'orange';
  githubUrl?: string;
  repositories?: { name: string; url: string }[];
  demoUrl?: string;
  image?: string;
  features?: string[];
  architecture?: string[];
  status?: 'completed' | 'in-progress' | 'planning';
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1 to 5
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'ai';
  icon: string;
  color: 'purple' | 'pink' | 'blue' | 'teal' | 'orange';
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  color: 'purple' | 'pink' | 'blue' | 'teal' | 'orange';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: 'purple' | 'pink' | 'blue' | 'teal' | 'orange';
  icon: string;
  credentialUrl?: string;
}

