import { Experience, Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Anudeep Thummalapalli",
  role: "Senior Frontend Engineer",
  tagline: "Architecting scalable UI systems with React & TypeScript.",
  about: "I am a specialized React.js developer with deep expertise in TypeScript, Next.js, and modern UI/UX principles. With a track record of modernizing legacy applications and building design systems from scratch, I focus on performance, accessibility, and developer experience. I combine engineering rigor with a passion for pixel-perfect aesthetics.",
  email: "thummalapallianudeep@gmail.com",
  linkedin: "https://www.linkedin.com/in/anudeep-thummalapalli/",
  github: "https://github.com/AnudeepOfficial"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Enterprise Tech Solutions",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    description: [
      "Architected a federated micro-frontend system using Webpack 5 Module Federation, reducing deployment times by 60%.",
      "Led the migration of a high-traffic dashboard from CRA to Next.js 14, improving LCP (Largest Contentful Paint) from 2.5s to 0.8s.",
      "Established a strict TypeScript configuration and CI/CD pipeline checks, reducing runtime errors by 45% in production."
    ]
  },
  {
    id: "2",
    company: "FinTech Innovations",
    role: "React Developer",
    period: "2020 - 2022",
    description: [
      "Developed a proprietary design system ('GlassUI') used across 4 product lines, ensuring WCAG 2.1 AA compliance.",
      "Implemented complex data visualization widgets using D3.js and Recharts for real-time stock market tracking.",
      "Optimized React render cycles using memoization patterns and Redux Toolkit, handling 500+ updates per second."
    ]
  },
  {
    id: "3",
    company: "Digital Agency One",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: [
      "Delivered pixel-perfect responsive interfaces for Fortune 500 clients using React and Styled Components.",
      "Collaborated with UX designers to implement fluid animations using Framer Motion and GSAP.",
      "Integrated headless CMS solutions (Contentful, Strapi) to empower marketing teams with dynamic content control."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Nebula Analytics",
    description: "A next-generation SaaS platform for visualizing large-scale datasets. Features a custom WebGL rendering engine and AI-driven insights.",
    technologies: ["React", "TypeScript", "WebGL", "Three.js", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p2",
    title: "E-Commerce Headless Core",
    description: "A high-performance headless commerce starter kit offering sub-second page loads, integrated payments, and advanced inventory management.",
    technologies: ["Next.js 14", "GraphQL", "Stripe API", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p3",
    title: "SyncDraw Collaboration",
    description: "Real-time collaborative whiteboard application supporting 50+ concurrent users with conflict resolution and instant shape syncing.",
    technologies: ["React", "Socket.io", "Zustand", "Canvas API"],
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Core Architecture",
    items: ["React.js", "TypeScript", "Next.js", "Micro-frontends", "Node.js"]
  },
  {
    category: "State & Performance",
    items: ["Redux Toolkit", "React Query", "Zustand", "Web Vitals", "Memoization"]
  },
  {
    category: "UI Engineering",
    items: ["Tailwind CSS", "Framer Motion", "Design Systems", "Storybook", "Accessibility (a11y)"]
  },
  {
    category: "Testing & DevOps",
    items: ["Jest", "Cypress", "Playwright", "CI/CD Pipelines", "Docker"]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Anudeep Thummalapalli's personal portfolio website.
Your role is to professionally and politely answer questions about Anudeep's professional background, skills, and experience.

Here is Anudeep's profile context:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Bio: ${PERSONAL_INFO.about}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} [Stack: ${p.technologies.join(', ')}]`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Rules:
1. Keep answers concise and relevant to a recruiter or hiring manager.
2. If asked about something not in the context (like his phone number or address), politely decline.
3. Maintain a professional, slightly enthusiastic tone.
4. Highlight his expertise in React, TypeScript, and AI integration when relevant.
`;