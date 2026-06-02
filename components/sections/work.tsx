"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, type Project } from "@/data/projects";
import { SectionLabel } from "@/components/ui/section-label";
import { FadeUp } from "@/components/ui/fade-up";

// ── Icons ─────────────────────────────────────────────────────────────────────
// Co-located because they're only used here. Extract to @/components/ui/icons
// once a second consumer exists - not before.

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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 2.5L13 8L3 13.5V2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 2V10M4 7L8 11L12 7M2 14H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

// ── Grid background ───────────────────────────────────────────────────────────
// Intentional inline style exception: CSS background-image with linear-gradient
// has no Tailwind utility equivalent. Isolated here - nowhere else.

const GRID_BG: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(229,196,151,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(229,196,151,0.04) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

// ── Mobile: Decorative placeholders ──────────────────────────────────────────

function DarkPlaceholder({ index }: { index: string }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-(--bg-surface,#0a0a0a)"
      style={GRID_BG}
      aria-hidden="true"
    >
      {/* Large index numeral as textural element */}
      <span className="absolute bottom-4 right-5 font-serif text-8xl font-light text-accent opacity-[0.05] select-none leading-none">
        {index}
      </span>
      {/* Corner accent brackets */}
      <span className="absolute top-4 left-4 block w-6 h-px bg-border-subtle" />
      <span className="absolute top-4 left-4 block w-px h-6 bg-border-subtle" />
      <span className="absolute bottom-4 right-4 block w-6 h-px bg-border-subtle" />
      <span className="absolute bottom-4 right-4 block w-px h-6 bg-border-subtle" />
    </div>
  );
}

function VideoDemoPlayer({
  demoUrl,
  showControls = false,
}: {
  demoUrl?: string | null;
  showControls?: boolean;
}) {
  if (!demoUrl) {
    return (
      <div
        className="relative aspect-video w-full overflow-hidden flex flex-col items-center justify-center gap-3 bg-(--bg-surface,#0a0a0a)"
        style={GRID_BG}
      >
        <div className="w-12 h-12 border border-border-subtle flex items-center justify-center">
          <PlayIcon className="w-4 h-4 text-muted ml-0.5" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          Demo Coming Soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black group border border-border-subtle">
      {/* Blurred background video layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-150 blur-2xl opacity-40"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={demoUrl} type="video/mp4" />
      </video>

      {/* Crisp contained video */}
      <video
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out opacity-90 group-hover:opacity-100 z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={showControls}
      >
        <source src={demoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-20" />
    </div>
  );
}

// ── Desktop: Video Modal ──────────────────────────────────────────────────────
// Rendered at the Work section level so it sits above the accordion z-stack.
// useCallback on onClose is required - it's a useEffect dependency.

function VideoModal({
  demoUrl,
  projectName,
  onClose,
}: {
  demoUrl: string;
  projectName: string;
  onClose: () => void;
}) {
  // Escape key to close + body scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectName} demo video`}
    >
      {/* Backdrop - click to close */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-6"
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {projectName} Demo
          </span>
          <button
            onClick={onClose}
            className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-primary transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label="Close demo video"
          >
            Close ✕
          </button>
        </div>

        {/* Video player - reuses the same component as mobile */}
        <VideoDemoPlayer demoUrl={demoUrl} showControls />
      </motion.div>
    </motion.div>
  );
}

// ── Mobile Cards ──────────────────────────────────────────────────────────────

function MobileCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden">
      <DarkPlaceholder index={project.id} />

      <div className="pt-5 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] text-muted">{project.id}</span>
          {project.badge && (
            <span className="chip chip-accent text-[10px]">
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="font-serif font-medium text-xl text-primary leading-tight mb-2">
          {project.name}
        </h3>
        <p className="font-sans font-light text-secondary text-[14px] leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent link-draw"
              aria-label={`Visit ${project.name}`}
            >
              Live Project <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted hover:text-secondary transition-colors duration-150"
              aria-label={`View ${project.name} source code`}
            >
              Source Code <GithubIcon className="w-3 h-3" />
            </a>
          ) : null}

          {!project.url && !project.github && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted opacity-50">
              Case Study Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// NOTE: `platform.apkUrl !== undefined` is the current discriminator for
// "mobile platform." It works for the existing data shape but will break if a
// web platform ever has an apkUrl field present (even null). Proper fix:
// add `type: "web" | "mobile"` to the ProjectPlatform type and use that.

function MultiPlatformCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden">
      <VideoDemoPlayer demoUrl={project.videoDemo} />

      <div className="pt-5 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] text-muted">{project.id}</span>
          {project.badge && (
            <span className="chip chip-accent text-[10px]">
              {project.badge}
            </span>
          )}
          <span className="chip text-[10px]">Web + Mobile</span>
        </div>

        <h3 className="font-serif font-medium text-xl text-primary leading-tight mb-2">
          {project.name}
        </h3>
        <p className="font-sans font-light text-secondary text-[14px] leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="space-y-5">
          {project.platforms?.map((platform) => {
            const isMobile = platform.apkUrl !== undefined;
            return (
              <div key={platform.label} className="platform-box">
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] mb-3 ${
                    isMobile ? "text-accent opacity-70" : "text-muted"
                  }`}
                >
                  -{" "}
                  {isMobile ? "Native Mobile (Android · iOS)" : "Web Platform"}
                </p>

                <p className="font-sans font-light text-secondary text-[13px] leading-relaxed mb-4">
                  {platform.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {platform.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Web: live link */}
                {!isMobile && platform.url && (
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent link-draw"
                    aria-label={`Visit ${platform.label}`}
                  >
                    Visit Platform <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                )}

                {/* Mobile: APK download */}
                {isMobile &&
                  platform.apkUrl &&
                  platform.apkUrl !== "YOUR_APK_DOWNLOAD_URL_HERE" && (
                    <div>
                      <a
                        href={platform.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent border border-border-strong px-3 py-2 hover:border-accent transition-colors duration-150"
                        aria-label={`Download ${project.name} preview APK for Android`}
                      >
                        <DownloadIcon className="w-3 h-3" />
                        Download Preview APK (Android)
                      </a>
                      <p className="font-mono text-[10px] text-muted mt-2 leading-relaxed max-w-xs">
                        Built with Expo & EAS. Requires &ldquo;Install from
                        Unknown Sources&rdquo; on Android.
                        <br />
                        iOS: contact me for a TestFlight invite.
                      </p>
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────

export function Work() {
  const [expanded, setExpanded] = useState<string | null>(null);
  // null = closed; { url, name } = open with this project's video
  const [videoModal, setVideoModal] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const featured = projects.filter((p) => p.featured);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  // Stable references required - onClose is a useEffect dep inside VideoModal
  const openModal = useCallback((url: string, name: string) => {
    setVideoModal({ url, name });
  }, []);

  const closeModal = useCallback(() => {
    setVideoModal(null);
  }, []);

  return (
    <section id="work" className="section-padding" aria-label="Selected work">
      <div className="container-main">
        <FadeUp>
          <SectionLabel number="01" title="Selected Work" />
        </FadeUp>

        {/* ── Desktop: Accordion rows (md+) ──────────────────────────────────
            Known issue: div[role="button"] should be
            <button className="w-full text-left appearance-none"> for proper
            semantics. Deferred - layout-impacting change requires separate PR. */}
        <div className="hidden md:block">
          {featured.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.07}>
              <div
                className="project-row"
                onClick={() => toggle(project.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === project.id}
                aria-label={`${project.name} - ${project.shortDesc}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(project.id);
                  }
                }}
              >
                {/* Row header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-5 min-w-0">
                    <span className="font-mono text-[11px] text-accent shrink-0">
                      {project.id}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        {/* clamp() is the one inline exception on desktop: fluid
                            type scaling within a constrained table-row column. */}
                        <span
                          className="font-serif font-medium text-primary leading-tight"
                          style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}
                        >
                          {project.name}
                        </span>
                        {project.badge && (
                          <span className="chip chip-accent text-[10px]">
                            {project.badge}
                          </span>
                        )}
                        {project.isMultiPlatform && (
                          <span className="chip text-[10px]">Web + Mobile</span>
                        )}
                      </div>
                      <p className="font-sans font-light text-muted text-[13px] mt-0.5 truncate">
                        {project.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden sm:flex items-center gap-1.5 flex-wrap justify-end">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.span
                      className="font-sans text-base text-muted ml-2 select-none"
                      animate={{ rotate: expanded === project.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 pb-2">
                        <p className="font-sans font-light text-secondary text-[14px] leading-relaxed mb-5 max-w-2xl">
                          {project.description}
                        </p>

                        {project.isMultiPlatform && project.platforms ? (
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            {project.platforms.map((platform) => (
                              <div
                                key={platform.label}
                                className="platform-box"
                              >
                                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-3">
                                  {platform.label === "Web Platform"
                                    ? "- Web Platform"
                                    : "- Mobile App"}
                                </p>
                                <p className="font-sans font-light text-secondary text-[13px] leading-relaxed mb-4">
                                  {platform.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                  {platform.stack.map((item) => (
                                    <span key={item} className="chip">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex flex-col gap-2">
                                  {platform.url && (
                                    <a
                                      href={platform.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent link-draw w-fit"
                                      aria-label={`Visit ${platform.label}`}
                                    >
                                      Visit Platform ↗
                                    </a>
                                  )}
                                  {platform.apkUrl !== undefined && (
                                    <div className="flex flex-col gap-3">
                                      {/* Watch Demo: opens modal instead of
                                          redirecting to an external URL.
                                          stopPropagation prevents accordion toggle. */}
                                      {project.videoDemo ? (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            openModal(
                                              project.videoDemo as string,
                                              project.name,
                                            );
                                          }}
                                          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-secondary hover:text-primary link-draw w-fit transition-colors duration-150 cursor-pointer"
                                        >
                                          ▶ Watch Demo
                                        </button>
                                      ) : (
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted border border-border-subtle px-3 py-1.5 w-fit opacity-50 cursor-default">
                                          ▶ Demo - Coming Soon
                                        </span>
                                      )}
                                      {platform.apkUrl &&
                                        platform.apkUrl !==
                                          "YOUR_APK_DOWNLOAD_URL_HERE" && (
                                          <div>
                                            <a
                                              href={platform.apkUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              onClick={(e) =>
                                                e.stopPropagation()
                                              }
                                              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent border border-border-strong px-3 py-2 w-fit hover:border-accent transition-colors duration-150"
                                            >
                                              ↓ Download Preview APK (Android)
                                            </a>
                                            <p className="font-mono text-[10px] text-muted mt-2 leading-relaxed max-w-xs">
                                              Built with Expo & EAS. Requires
                                              &ldquo;Install from Unknown
                                              Sources&rdquo; on Android.
                                              <br />
                                              iOS: contact me for a TestFlight
                                              invite.
                                            </p>
                                          </div>
                                        )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex items-center gap-6 flex-wrap">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="font-mono text-[11px] uppercase tracking-widest text-accent link-draw"
                                aria-label={`Visit ${project.name}`}
                              >
                                Live Project ↗
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-secondary link-draw transition-colors duration-150"
                                aria-label={`View ${project.name} source code`}
                              >
                                Source Code ↗
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ── Mobile: Cards (<md) ────────────────────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-8">
          {featured.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.07}>
              {project.isMultiPlatform ? (
                <MultiPlatformCard project={project} />
              ) : (
                <MobileCard project={project} />
              )}
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── Video Modal (desktop only) ────────────────────────────────────────
          Rendered outside container-main so it isn't clipped by any overflow
          constraints on the section. AnimatePresence handles mount/unmount. */}
      <AnimatePresence>
        {videoModal && (
          <VideoModal
            demoUrl={videoModal.url}
            projectName={videoModal.name}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
