"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  overlayVariants,
  linkVariants,
  socialVariants,
} from "@/lib/animations";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const sections = ["hero", "work", "about", "stack", "contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    // Check scroll position immediately on mount to fix the mid-page refresh bug
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section tracker
  useEffect(() => {
    // Also trigger initial active section check on mount to prevent
    // wrong nav-indicator placement on mid-page refresh
    const initialCheck = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };
    initialCheck();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMobileLink = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    // Small delay so the overlay fade-out starts before scroll
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(19,19,19,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled
            ? "1px solid #201f1f"
            : "1px solid transparent",
        }}
      >
        <div className="container-main">
          <nav
            className="flex items-center justify-between"
            style={{ height: "64px" }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#hero"
              className="font-serif text-[18px] font-normal text-primary tracking-tight transition-colors duration-150 hover:text-accent"
              aria-label={`${personal.name.split(" ")[0]} - Back to top`}
            >
              {personal.name.split(" ")[0]}
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={label}
                    href={href}
                    className="relative font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-150 pb-1"
                    style={{ color: isActive ? "#e5c497" : "#9a8f83" }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </a>
                );
              })}

              {/* Resume - bordered button */}
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent px-3 py-1.5 transition-all duration-200 hover:bg-accent hover:text-bg"
                style={{ border: "1px solid #e5c497" }}
                aria-label="Open resume PDF"
              >
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex flex-col gap-1.25 p-2 -mr-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className="block w-5 h-px bg-primary transition-all duration-200"
                style={{
                  transform: mobileOpen
                    ? "rotate(45deg) translate(4px, 4px)"
                    : "none",
                }}
              />
              <span
                className="block w-5 h-px bg-primary transition-all duration-200"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px bg-primary transition-all duration-200"
                style={{
                  transform: mobileOpen
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center md:hidden"
            style={{ backgroundColor: "#131313" }}
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <nav
              className="container-main flex flex-col gap-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={label}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => handleMobileLink(href)}
                  className="text-left font-serif font-light text-primary transition-colors duration-150 hover:text-accent leading-tight"
                  style={{ fontSize: "clamp(36px, 10vw, 52px)" }}
                >
                  {label}
                </motion.button>
              ))}

              <motion.a
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center w-fit font-serif font-light leading-tight transition-colors duration-150"
                style={{
                  fontSize: "clamp(36px, 10vw, 52px)",
                  color: "#e5c497",
                }}
                aria-label="Open resume PDF"
              >
                Résumé
              </motion.a>
            </nav>

            <motion.div
              variants={socialVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute bottom-10 left-0 right-0"
            >
              <div className="container-main flex items-center gap-7">
                {[
                  { label: "GitHub", href: personal.github },
                  { label: "LinkedIn", href: personal.linkedin },
                  { label: "Twitter", href: personal.twitter },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-accent transition-colors duration-150"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
