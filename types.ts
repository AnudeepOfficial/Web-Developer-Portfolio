export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  source: string | null;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}
