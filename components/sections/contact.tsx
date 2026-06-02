"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { FadeUp } from "@/components/ui/fade-up";
import { personal } from "@/lib/data";

// Minimalist arrow icon replacing the heavy SVGs
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 11L11 1M11 1H3M11 1V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "GitHub", href: personal.github },
  { label: "LinkedIn", href: personal.linkedin },
  { label: "Twitter", href: personal.twitter },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-border-subtle"
      aria-label="Contact"
    >
      <div className="container-main">
        <FadeUp>
          <SectionLabel number="04" title="Contact" />
        </FadeUp>

        {/* Large editorial closing headline - Split into two lines like Design 2 */}
        <FadeUp delay={0.06}>
          <div className="mb-16 max-w-2xl">
            <h2
              className="font-serif font-light leading-[1.08] tracking-[-0.01em]"
              style={{ fontSize: "clamp(36px, 6vw, 60px)" }}
            >
              <span className="block text-primary">Let&rsquo;s build</span>
              <span className="block text-accent italic">
                something lasting.
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Contact details + social - Two column grid like Design 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Column 1: Email */}
          <FadeUp delay={0.12}>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-4">
              Email
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="group font-serif text-[24px] md:text-[28px] text-primary hover:text-accent transition-colors duration-200 flex items-center gap-3 w-fit"
              aria-label={`Send email to ${personal.name}`}
            >
              {personal.email}
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </FadeUp>

          {/* Column 2: Elsewhere (Socials + Resume) */}
          <FadeUp delay={0.18}>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-4">
              Elsewhere
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                >
                  {link.label} <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              ))}

              {/* Resume CTA Button */}
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border border-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
              >
                Download Résumé
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Currently open to - bottom note */}
        <FadeUp delay={0.24}>
          <p className="mt-16 font-sans font-light text-secondary text-[14px] md:text-[15px] max-w-lg leading-relaxed">
            Currently accepting inquiries for full-stack engineering, product
            architecture, and select mobile development engagements.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
