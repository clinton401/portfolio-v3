"use client";

import { motion } from "motion/react";
import { heroStagger, heroLine } from "@/lib/animations";
import { personal, hero } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-svh"
      aria-label="Introduction"
    >
      <div className="container-main w-full">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl pt-20 pb-24"
        >
          {/* Availability pill */}
          <motion.div
            variants={heroLine}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div
              className="flex items-center gap-2.5 border border-border-subtle px-3 py-1.5"
              style={{ backgroundColor: "#1c1b1b" }}
            >
              <span className="pulse-dot" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">
                {personal.status}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroLine}
            className="font-serif font-light text-primary leading-[1.08] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(44px, 7vw, 72px)" }}
          >
            Engineering{" "}
            <em
              className="not-italic"
              style={{ color: "#e5c497", fontStyle: "italic" }}
            >
              precise
            </em>{" "}
            products,
            <br />
            web to mobile.
          </motion.h1>

          {/* Role + location */}
          <motion.p
            variants={heroLine}
            className="font-mono text-[13px] tracking-[0.06em] text-muted mb-6"
          >
            {personal.focus} · {personal.location}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={heroLine}
            className="font-sans font-light text-secondary leading-relaxed mb-10"
            style={{ fontSize: "clamp(15px, 2vw, 18px)", maxWidth: "600px" }}
          >
            {hero.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroLine}
            className="flex items-center gap-8 flex-wrap"
          >
            <a
              href={hero.cta.primary.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent link-draw"
              style={{ "--underline-color": "#e5c497" } as React.CSSProperties}
            >
              {hero.cta.primary.label}
            </a>
            <a
              href={hero.cta.secondary.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-secondary transition-colors duration-150 link-draw"
            >
              {hero.cta.secondary.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border-subtle" />
    </section>
  );
}

