export type ProjectPlatform = {
  label: string;
  description: string;
  stack: string[];
  url?: string;
  github?: string;
  apkUrl?: string;
  isPrivate?: boolean;
};

export type Project = {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
  isHidden?: boolean;
  isMultiPlatform?: boolean;
  platforms?: ProjectPlatform[];
  videoDemo?: string | null; // set to video URL when ready
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "01", // Change this ID based on where you place it in the array
    name: "AIGenius",
    shortDesc:
      "Multi-model AI workspace - switch between GPT-4o, Claude, and Gemini in one place.",
    description:
      "A pay-as-you-go AI platform designed as a multi-platform ecosystem. Built with a shared NestJS and PostgreSQL backend serving both a Next.js web application and a native Electron desktop client. Features a unified chat interface, mid-conversation model switching, and robust desktop-to-cloud state coordination.",
    tags: ["Next.js", "Electron", "NestJS", "PostgreSQL", "Redis", "TypeScript"],
    url: "https://aigenius.noboxlabs.xyz",
    featured: true,
    badge: "AI Platform",
    isMultiPlatform: true,
    platforms: [
      {
        label: "Web Platform",
        description:
          "High-performance web app featuring a highly interactive chat interface, streaming SSE responses, and a pay-as-you-go credit system.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        url: "https://aigenius.noboxlabs.xyz",
        isPrivate: true,
      },
      {
        label: "Desktop App",
        description:
          "Native Electron app for macOS, Windows, and Linux. Features deep OS integration, secure IPC bridging, local file system access, and background tool execution.",
        stack: ["Electron", "React", "TypeScript", "Node.js"],
        url: "https://aigenius.noboxlabs.xyz",
        isPrivate: true,
      },
      {
        label: "Backend Core",
        description:
          "Scalable cloud architecture handling OAuth, Redis-backed state coordination, and unified AI model routing (OpenAI, Anthropic, Google).",
        stack: ["NestJS", "PostgreSQL", "Drizzle ORM", "Redis"],
        isPrivate: true,
      }
    ],
  },
  {
    id: "02",
    name: "Resumify",
    shortDesc:
      "AI career toolkit - production web platform & native mobile app.",
    description:
      "An end-to-end career platform architected as a multi-platform ecosystem with a shared backend serving both a full-featured web application and a native mobile app. Covers AI-powered resume building, cover letter generation, interview prep, and automated resume review.",
    tags: ["Next.js", "React Native", "Gemini AI", "TypeScript"],
    url: "https://www.getresumify.com",
    featured: true,
    badge: "Flagship",
    isMultiPlatform: true,
    videoDemo: "https://assets.getresumify.com/app-promo-30fps.mp4",
    platforms: [
      {
        label: "Web Platform",
        description:
          "Full-stack web app with AI document generation, real-time editing, subscription billing via Paystack & Flutterwave, and a peer review system.",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini AI", "Tailwind CSS"],
        url: "https://www.getresumify.com",
        isPrivate: true,
      },
      {
        label: "Mobile App",
        description:
          "Cross-platform React Native app with native UX, secure OAuth flows, and real-time sync with the shared backend. Available for Android.",
        stack: ["React Native", "Expo", "TypeScript", "Better Auth"],
        apkUrl: "https://assets.getresumify.com/resumify-beta-v1.apk",// ← Replace with your EAS build URL
        isPrivate: true,
      },
    ],
  },
  {
    id: "03",
    name: "GatewayOS",
    shortDesc:
      "Programmable API gateway with Redis rate-limiting and a Next.js control plane.",
    description:
      "A senior-level backend infrastructure layer sitting between clients and microservices. Features reverse proxying, Redis-backed rate limiting, circuit breakers, hot config reload via Postgres LISTEN/NOTIFY, per-route auth enforcement, and request/response transformation.",
    tags: ["Express.js", "Redis", "PostgreSQL", "Next.js"],
    featured: true,
    badge: "Infrastructure",
    github: "https://github.com/clinton401/gateway"
    // Note: LiveUrl and Github omitted per your spec until they are public
  },

  {
    id: "04",
    name: "StudyAI",
    shortDesc:
      "AI learning platform - upload a PDF, get summaries, MCQs, and writing help.",
    description:
      "An AI-powered study tool that removes the friction from learning. Students upload PDFs and receive instant structured summaries, multiple-choice questions, and contextual assistance. Accessible without login for immediate value.",
    tags: ["Next.js", "MongoDB", "Gemini AI", "TypeScript"],
    url: "https://studyaii.vercel.app",
    github: "https://github.com/clinton401/study-ai",
    featured: true,
  },
  {
    id: "05",
    name: "Briza",
    shortDesc:
      "Full-stack social platform with real-time channels and threaded discussions.",
    description:
      "A feature-complete social platform built from the ground up - real-time interactions, topic-based channels, threaded discussions, and admin management. Handles auth, role permissions, and real-time state across all clients.",
    tags: ["Next.js", "PostgreSQL", "Next-Auth", "TypeScript"],
    url: "https://briza-nine.vercel.app",
    github: "https://github.com/clinton401/briza",
    featured: true,
  },
  {
    id: "06",
    name: "Cinematico",
    shortDesc:
      "Full-stack movie discovery app with trailers, ratings, and curated trending content.",
    description:
      "A full-stack entertainment platform for discovering films and TV. Real-time search, trailer playback, ratings, and interactive carousels - built with a Node/MongoDB backend and a React frontend.",
    tags: ["React", "Express.js", "MongoDB", "JavaScript"],
    url: "https://cinematico.onrender.com",
    github: "https://github.com/clinton401/cinematico-fullstack",
    featured: true,
  },
  // ─── Add new projects below ───────────────────────────────────────────────
  // {
  //   id: "07",
  //   name: "",
  //   shortDesc: "",
  //   description: "",
  //   tags: [],
  //   url: "",
  //   github: "",
  //   featured: true,
  // },
  // {
  //   id: "08",
  //   name: "",
  //   shortDesc: "",
  //   description: "",
  //   tags: [],
  //   url: "",
  //   github: "",
  //   featured: true,
  // },
];
