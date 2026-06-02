export type StackCategory = {
  label: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    label: "Frontend",
    items: [
      "React / Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js / Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "REST APIs",
      "Better Auth",
    ],
  },
  {
    label: "Infra & Tooling",
    items: [
      "Docker",
      "Expo / EAS",
      "Git / GitHub",
      "Vercel",
      "Paystack / Flutterwave",
      "Gemini AI",
    ],
  },
];
