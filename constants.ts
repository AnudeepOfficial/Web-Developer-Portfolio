import { Experience, Project, Skill } from "./types";
import praxteraImg from "@/assets/images/praxtera.png";
import grocersSupplyImg from "@/assets/images/gs.png";

export const PERSONAL_INFO = {
    name: "Anudeep Thummalapalli",
    role: "Senior Frontend Engineer",
    tagline: "Architecting scalable UI systems with React & TypeScript.",
    about: "Senior Software Engineer with 7+ years of deep expertise in Angular, React.js, Next.js, JavaScript, TypeScript, and modern UI/UX principles. With a track record of modernizing legacy applications and building design systems from scratch, I focus on performance, accessibility, and developer experience. I combine engineering rigor with a passion for pixel-perfect aesthetics.",
    email: "thummalapallianudeep@gmail.com",
    linkedin: "https://www.linkedin.com/in/anudeep-thummalapalli/",
    github: "https://github.com/AnudeepOfficial",
    instagram: "https://www.instagram.com/anudeepthummalapalli/"
};

export const EXPERIENCES: Experience[] = [
    {
        id: "1",
        company: "C&S Wholesale Grocers",
        role: "Technical Lead / Senior Software Engineer",
        period: "Mar 2023 - Present",
        description: [
            "As Technical Lead, spearheaded the re-architecture of a multi-tenant B2B Angular platform, driving a 90% reduction in initial page load times, bundle sizes via advanced performance tuning.",
            "Designed and implemented the entire Web Application Security architecture (AuthN & AuthZ), establishing strict multi-tenant data isolation and granular Role-Based Access Control (RBAC) for Store Admins and users.",
            "Developed complex core business modules (Orders, Invoices, Credit Requests, Reports and Real-time Dashboards), transforming manual workflows into a seamless, self-service digital experience for Store Admins.",
            "Architected a dynamic website builder using Next.js and Agility CMS on Google Cloud Run, proactively remediating GCP-reported vulnerabilities to maintain a secure, hardened Docker environment.",
            "As Key Contributor for Warehouse Operations, delivered scalable React (UI) and Node.js (Microservices) solutions, ensuring system reliability through comprehensive Jest testing suites.",
            "Standardized engineering workflows by architecting a reusable GitHub package for multi-database connectivity and a shared React UI Library (Storybook), reducing cross-team development overhead.",
            "Distill product requirements into technical specifications, partnering with UX, DevOps, and architecture teams to define and deliver enterprise-grade solutions.",
            "Enforce code quality and engineering best practices through rigorous code reviews and the implementation of robust CI/CD pipelines using Docker and Google Cloud Run.",
            "Maintain production applications at scale, ensuring zero downtime during updates and monitoring application health in a cloud-native environment.",
        ],
    },
    {
        id: "2",
        company: "Arkatiss LLP",
        role: "Senior Software Engineer",
        period: "Apr 2022 - Mar 2023",
        description: [
            "Architected and implemented Data Pipeline (ETL) projects to fully automate data processing, validating performance by successfully stress-testing 100K records in a single load.",
            "Developed and maintained scalable RESTful APIs using Node.js and Express.js, ensuring seamless integration for large-scale data processing.",
            "Maintained high code quality by participating in code reviews and worked with the DevOps team to manage version deployments.",
            "Partnered with cross-functional teams (UX, QA, DevOps) to align technical efforts, catalyzing product innovation and maintaining a rigorous delivery schedule.",
        ],
    },
    {
        id: "3",
        company: "Arkatiss LLP",
        role: "Software Engineer",
        period: "Aug 2020 - Mar 2022",
        description: [
            "Built highly performant React Single Page Applications (SPAs), guaranteeing code quality with 30+ unit test cases and clear documentation via JsDocs, while adhering to modern SCSS and responsive design principles.",
            "Designed and developed intuitive analytical dashboards, utilizing Chart.js to provide real-time visualization of Bot Analytics data, enabling operational insights.",
        ],
    },
    {
        id: "4",
        company: "SB Technology Services Pvt. Ltd.",
        role: "Software Engineer",
        period: "Feb 2018 - Jul 2020",
        description: [
            "Developed responsive web pages in Angular, adhering to clean code principles and efficient structuring for consistent application reliability.",
            "Integrated RESTful APIs and validated data reliability and adherence to technical specifications using Postman.",
            "Managed efficient development workflows and source control governance utilizing GitHub and SVN.",
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        id: "p1",
        title: "Nebula Analytics",
        description:
            "A next-generation SaaS platform for visualizing large-scale datasets. Features a custom WebGL rendering engine and AI-driven insights.",
        technologies: ["React", "TypeScript", "WebGL", "Three.js", "Node.js"],
        imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        source: null,
    },
    {
        id: "p2",
        title: "E-Commerce Headless Core",
        description:
            "A high-performance headless commerce starter kit offering sub-second page loads, integrated payments, and advanced inventory management.",
        technologies: ["Next.js 14", "GraphQL", "Stripe API", "Tailwind CSS"],
        imageUrl:
            "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
        source: null,
    },
    {
        id: "p3",
        title: "Grocers Supply",
        description:
            "Architected a scalable web application for C&S Wholesale Grocers, enhancing user experience and operational efficiency. ",
        technologies: [
            "Next.js v15",
            "Node.js",
            "Agility CMS",
            "PostgreSQL",
            "GCP CloudRun",
        ],
        imageUrl: grocersSupplyImg,
        link: "https://www.grocerssupply.com/",
        source: null,
    },
    {
        id: "p4",
        title: "Praxtera",
        description:
            "Full-stack development, testing, and CI/CD deployment for Praxtera's web app. Expertise in modern tools like Vercel for continuous integration and domain management via GoDaddy. Demonstrates end-to-end project ownership and quality assurance as a volunteer.",
        technologies: ["React.js v19", "TypeScript", "Vite", "Vercel"],
        imageUrl: praxteraImg,
        link: "https://www.praxtera.com/",
        source: null,
    },
];

export const SKILLS: Skill[] = [
    {
        category: "Web Technologies",
        items: ["Angular", "React.js", "Next.js", "Express.js", "HTML", "CSS"],
    },
    {
        category: "Programming Languages",
        items: [
            "JavaScript",
            "TypeScript",
            "Python",
            "PostgreSQL",
            "Oracle SQL",
        ],
    },
    {
        category: "State & Performance",
        items: [
            "NGRX Store",
            "Redux Toolkit",
            "React Query",
            "Tanstack Query",
            "Memoization",
        ],
    },
    {
        category: "Rich UI Libraries",
        items: [
            "Angular Material",
            "Prime NG",
            "Tailwind CSS",
            "Ant Design",
            "Framer Motion",
            "Storybook",
        ],
    },
    {
        category: "Testing & DevOps",
        items: ["Jest", "Cypress", "Playwright", "CI/CD Pipelines", "Docker"],
    },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Anudeep Thummalapalli's personal portfolio website.
Your role is to professionally and politely answer questions about Anudeep's professional background, skills, and experience.

Here is Anudeep's profile context:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Bio: ${PERSONAL_INFO.about}

Experience:
${EXPERIENCES.map(
    (e) =>
        `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(" ")}`
).join("\n")}

Projects:
${PROJECTS.map(
    (p) =>
        `- ${p.title}: ${p.description} [Stack: ${p.technologies.join(", ")}]`
).join("\n")}

Skills:
${SKILLS.map((s) => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

Rules:
1. Keep answers concise and relevant to a recruiter or hiring manager.
2. If asked about something not in the context (like his phone number or address), politely decline.
3. Maintain a professional, slightly enthusiastic tone.
4. Highlight his expertise in React, TypeScript, and AI integration when relevant.
`;
