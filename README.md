# Clinton - Portfolio

Personal portfolio for Clinton Owoseni Phillips - Full-Stack & React Native Developer from Lagos, Nigeria.

**Live:** [iamclinton.vercel.app](https://iamclinton.vercel.app)

---

## Stack

- **Framework** - Next.js 16 (App Router, static export)
- **Language** - TypeScript
- **Styling** - Tailwind CSS v4
- **Animations** - Motion 12
- **Fonts** - EB Garamond · DM Sans · JetBrains Mono
- **Deployment** - Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Dev server runs at `http://localhost:3000`.

---

## Project Structure

```
clinton-portfolio/
├── app/
│   ├── layout.tsx          # Root layout - fonts, metadata
│   ├── page.tsx            # Homepage - assembles all sections
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Design tokens, base styles
│
├── components/
│   ├── nav.tsx             # Fixed nav with scroll tracking + mobile overlay
│   ├── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── work.tsx        # Project list with expandable rows
│   │   ├── about.tsx       # Bio, experience, quick facts
│   │   ├── stack-section.tsx
│   │   └── contact.tsx
│   └── ui/
│       ├── fade-up.tsx     # Scroll-triggered entrance animation
│       └── section-label.tsx
│
├── data/                   # Dynamic datasets for works, jobs, and stack
│   ├── projects.ts
│   ├── experience.ts
│   └── stack.ts
│
├── lib/
│   ├── animations.ts       # Centralized Motion 12 animation configs & variants
│   └── data.ts             # Single source of truth for personal data, copy, and SEO
│
└── public/
    └── resume.pdf          # ← Drop your resume here
```

---

## Updating Content

All portfolio content is data-driven. You never need to touch a component to update the site.

### Update Personal Info, Hero Copy, and SEO Settings

Open [lib/data.ts](file:///Users/clinton/Development/React/portfolio-v3/lib/data.ts) to manage your personal details, biography, social links, hero text, and SEO settings.

- **`personal`** - Name, email, location, current employment/availability status, social links, and details about what you're currently building.
- **`hero`** - Hero headline, subtext, and call-to-action button labels.
- **`about`** - Paragraphs for the biography (experience years are calculated dynamically).
- **`seo`** - Page titles, meta descriptions, and Twitter handlers.

### Add a new project

Open [data/projects.ts](file:///Users/clinton/Development/React/portfolio-v3/data/projects.ts) and add an object to the `projects` array:

```ts
{
  id: "05",
  name: "Your Project Name",
  shortDesc: "One sentence - confident, not a README.",
  description: "Two to three sentences describing the problem, what you built, and what makes it notable.",
  tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"], // max 4
  url: "https://your-live-url.com", // optional
  github: "https://github.com/clinton401/your-repo", // optional
  featured: true,
  badge: "Featured Tag", // optional (e.g., "Flagship", "Infrastructure")
  videoDemo: "https://assets.your-site.com/promo.mp4", // optional
  isMultiPlatform: true, // optional (for products with multiple deployment platforms)
  platforms: [ // optional (used when isMultiPlatform is true)
    {
      label: "Web Platform",
      description: "Brief platform description.",
      stack: ["Next.js", "PostgreSQL"],
      url: "https://your-live-url.com",
      isPrivate: true, // optional (hides code link, shows lock icon)
    }
  ]
}
```

Set `featured: false` to hide a project from the homepage without deleting it.

### Add a new job

Open `data/experience.ts` and add an object to the `experience` array:

```ts
{
  company: "Company Name",
  role: "Your Role",
  period: "2025 - Present",
  location: "Remote",
  stack: ["Next.js", "Node.js"],
  highlights: [
    "One concrete thing you built or improved - ideally with a metric.",
    "Second highlight if needed.",
  ],
}
```

### Update your tech stack

Open `data/stack.ts`. Each category has a `label` and an `items` array. Add, remove, or reorder freely.

### Add Resumify video demo

In `data/projects.ts`, find the Resumify entry and replace `videoDemo: null` with your hosted video URL:

```ts
videoDemo: "https://res.cloudinary.com/your-cloud/video/upload/your-demo.mp4",
```

### Add Resumify APK link

In the same Resumify entry, find the mobile platform object and replace the placeholder:

```ts
apkUrl: "YOUR_APK_DOWNLOAD_URL_HERE",
// Replace with your EAS build URL, e.g.:
apkUrl: "https://expo.dev/artifacts/eas/your-build-id.apk",
```

---

## Resume

Drop `resume.pdf` into the `/public` folder. The nav "Resume" button links to `/resume.pdf` automatically.

---

## Deployment

The project uses `output: 'export'` in `next.config.ts` - it builds to a fully static site with no server required.

**Deploy to Vercel:**

1. Push the repo to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js - no configuration needed
4. Point your `iamclinton.vercel.app` domain to the new project in Vercel's dashboard

Every push to `main` triggers a redeploy automatically.

---

## Design System

The visual language is based on the **Atelier Digital** system - dark editorial aesthetic with a noir-gold accent.

| Token | CSS Custom Property | Value | Description |
|---|---|---|---|
| Background | `--color-bg` | `#131313` | Main site background |
| Surface | `--color-surface` | `#1c1b1b` | Cards and section rows background |
| Surface High | `--color-surface-high` | `#2a2a2a` | Elevated components/tooltips |
| Border Strong | `--color-border-strong` | `#4e453b` | Accent borders and separators |
| Border Subtle | `--color-border-subtle` | `#201f1f` | Default borders |
| Text primary | `--color-primary` | `#e5e2e1` | Main body/heading text |
| Text secondary | `--color-secondary` | `#d1c5b7` | Secondary text |
| Text muted | `--color-muted` | `#9a8f83` | Muted descriptions/labels |
| Accent | `--color-accent` | `#e5c497` | Primary noir-gold accent |
| Accent Dim | `--color-accent-dim` | `#c8a97e` | Muted/hover state for accent elements |

All design tokens are defined under the `@theme` directive in `app/globals.css` and compiled as utility classes by Tailwind CSS v4. No `tailwind.config.ts` config file is used in this project. Never hardcode hex values in components - use the Tailwind utility classes (e.g. `bg-bg`, `text-primary`, `border-border-subtle`).

**Zero border-radius** everywhere (explicitly enforced globally). No shadows. No gradients. That's intentional.

---

## License

© 2026 Clinton Owoseni Phillips. All rights reserved.
