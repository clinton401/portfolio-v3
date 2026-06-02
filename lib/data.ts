// lib/data.ts
// Single source of truth. Change content here only.

// ── Experience Calculator ──────────────────────────────────────────────────────

const getExperienceYears = () => {
    const startDate = new Date("2022-07-31");
    const today = new Date();
    let diffYears = today.getFullYear() - startDate.getFullYear();
    const m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
        diffYears--;
    }
    return diffYears;
};

export const calculatedYears = getExperienceYears();


// ── Personal ───────────────────────────────────────────────────────────────────

export const personal = {
    name: "Clinton Owoseni",
    // Status options: "Available for Work" | "Open to Opportunities" | "Accepting Clients"
    status: "Available for Work",
    location: "Lagos, Nigeria",
    experience: `${calculatedYears}+ Years`,
    focus: "Full-Stack Developer",
    email: "clintonphillips464@gmail.com",
    github: "https://github.com/clinton401",
    linkedin: "https://www.linkedin.com/in/clinton-phillips-316a42250",
    twitter: "https://x.com/phillips464",
    resume: "/resume.pdf",
    domain: "iamclinton.vercel.app",
    currentBuild: "Resumify",
    currentBuildDesc:
        "An AI-powered career platform - resume builder, virtual interviewer, job tracker, and a native mobile companion. Production SaaS with freemium tiers.",
    currentBuildUrl: "https://www.getresumify.com",
} as const;

// ── Hero ───────────────────────────────────────────────────────────────────────

export const hero = {
    headline: "Engineering precise products, web to mobile.",
    subtext:
        "I build production-grade products for founders who care about the details - from system architecture and database design to cross-platform mobile experiences that feel right.",
    cta: {
        primary: { label: "View Selected Work", href: "#work" },
        secondary: { label: "Get in Touch", href: "#contact" },
    },
} as const;

// ── About ──────────────────────────────────────────────────────────────────────

export const about = {
    tagline: "Discipline in code. Intention in design.",
    bio: [
        `I'm Clinton Owoseni, a Full-Stack & Mobile Engineer with ${calculatedYears}+ years building production web systems. My work spans the complete stack - Postgres schemas, Express middleware, Next.js interfaces, React Native screens, and the Docker-backed dev infrastructure that holds it all together.`,
        "I lean toward product-thinking. The systems I build don't exist to demonstrate a pattern - they exist to solve a real problem for a real user. That means taking every layer seriously: the schema design, the auth flow, the loading state, the edge case at 2AM.",
        "Previously at Nobox Labs and Xerax Labs. Currently building Resumify independently - a multi-platform SaaS with both a web app and a native mobile client sharing a single backend.",
    ],
} as const;

// ── SEO ────────────────────────────────────────────────────────────────────────

export const seo = {
    title: "Clinton Owoseni - Full-Stack & Mobile Developer",
    description:
        `Full-Stack & Mobile Developer based in Lagos, Nigeria. I build production-grade SaaS products, backend infrastructure, and native mobile applications with ${calculatedYears}+ years of experience.`,
    url: "https://iamclinton.vercel.app",
    twitterHandle: "@phillips464",
} as const;
