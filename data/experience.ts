export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Nobox Labs",
    role: "Full Stack Developer",
    period: "2024 - 2025",
    location: "Remote",
    stack: ["Next.js", "Node.js", "PostgreSQL", "React Native"],
    highlights: [
      "Built and maintained full-stack web and mobile applications across multiple live products.",
      "Implemented responsive interfaces and optimized performance for production-grade user loads.",
    ],
  },
  {
    company: "Xerax Labs Inc.",
    role: "Junior Frontend Developer",
    period: "2022 - 2023",
    location: "Remote",
    stack: ["React", "TypeScript", "Sass"],
    highlights: [
      "Developed pixel-perfect user interfaces working closely with the design team.",
    ],
  },
  {
    company: "Getlinked Hackathon",
    role: "Frontend Developer",
    period: "2023",
    location: "Hackathon",
    stack: ["React", "Framer Motion"],
    highlights: [
      "Shipped a responsive animated landing page under tight hackathon constraints.",
    ],
  },
  // ─── Add new experience below ─────────────────────────────────────────────
  // {
  //   company: "",
  //   role: "",
  //   period: "",
  //   location: "",
  //   stack: [],
  //   highlights: [],
  // },
];
