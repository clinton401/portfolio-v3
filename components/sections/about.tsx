"use client";

import { FadeUp } from "@/components/ui/fade-up";
import { SectionLabel } from "@/components/ui/section-label";
import { experience } from "@/data/experience";
import { personal, about } from "@/lib/data";

export function About() {
  const quickFacts = [
    { label: "Location", value: personal.location },
    { label: "Experience", value: personal.experience },
    { label: "Platforms", value: personal.focus },
    { label: "Status", value: personal.status },
  ];

  return (
    <section
      id="about"
      className="section-padding border-t border-border-subtle"
      aria-label={`About ${personal.name}`}
    >
      <div className="container-main">
        <FadeUp>
          <SectionLabel number="02" title="About" />
        </FadeUp>

        <div className="grid md:grid-cols-[58%_38%] gap-12 md:gap-16 items-start">
          {/* Left - Bio + Experience */}
          <div>
            <FadeUp delay={0.05}>
              <div className="space-y-5 mb-14">
                {about.bio.map((para, i) => (
                  <p key={i} className="font-sans leading-relaxed text-[15px] md:text-[16px] font-light text-secondary">
                    {para}
                  </p>
                ))}
              </div>
            </FadeUp>

            {/* Experience list */}
            <FadeUp delay={0.1}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                Experience
              </h3>
              <div className="space-y-0">
                {experience.map((job, i) => (
                  <div
                    key={i}
                    className="py-5 border-t border-border-subtle last:border-b last:border-border-subtle"
                  >
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <span
                        className="font-serif font-medium text-primary leading-tight"
                        style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
                      >
                        {job.company}
                      </span>
                      <span className="font-mono text-[11px] text-muted shrink-0 mt-0.5">
                        {job.period}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] tracking-[0.04em] text-accent mb-3">
                      {job.role} · {job.location}
                    </p>
                    <ul className="space-y-1">
                      {job.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="font-sans font-light text-secondary text-[13px] leading-relaxed"
                        >
                          - {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right - Quick facts + Currently building */}
          <FadeUp delay={0.15}>
            <div className="sticky top-24 space-y-8">
              {/* Quick facts */}
              <div className="space-y-0">
                {quickFacts.map(({ label, value }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3.5 border-b border-border-subtle first:border-t first:border-border-subtle"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      {label}
                    </span>
                    <span
                      className="font-sans text-[14px] font-normal text-primary"
                      style={{
                        color: value === personal.status ? "#e5c497" : undefined,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Currently building callout */}
              <div
                className="border border-border-subtle p-5"
                style={{ borderLeft: "2px solid #e5c497" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-2.5">
                  Currently Building
                </p>
                <p
                  className="font-serif font-medium text-primary mb-2 leading-tight"
                  style={{ fontSize: "clamp(17px, 2vw, 20px)" }}
                >
                  {personal.currentBuild}
                </p>
                <p className="font-sans font-light text-secondary text-[13px] leading-relaxed mb-3">
                  {personal.currentBuildDesc}
                </p>
                <a
                  href={personal.currentBuildUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-accent link-draw uppercase tracking-widest"
                  aria-label={`Visit ${personal.currentBuild}`}
                >
                  Visit {personal.currentBuild} ↗
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
