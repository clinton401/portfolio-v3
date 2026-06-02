"use client";

import { Footer } from "@/components/footer";
import { motion } from "motion/react";
import Link from "next/link";

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function NotFound() {
  return (
    <div className="min-h-svh flex flex-col bg-bg">
      <main className="flex-1 flex items-center">
        <div className="container-main mx-auto flex-col items-center flex w-full py-24">
          <div className="max-w-xl">
            {/* Label */}
            <motion.p
              {...entrance(0.05)}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-8"
            >
              - Error
            </motion.p>

            {/* 404 display */}
            <motion.div {...entrance(0.12)}>
              <h1
                className="font-serif font-light leading-none tracking-[-0.03em] text-primary mb-8 select-none"
                style={{ fontSize: "clamp(96px, 18vw, 180px)" }}
                aria-label="404"
              >
                4<em style={{ color: "#e5c497", fontStyle: "italic" }}>0</em>4
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
              {...entrance(0.2)}
              className="h-px bg-border-subtle mb-8"
            />

            {/* Message */}
            <motion.h2
              {...entrance(0.26)}
              className="font-serif font-normal text-primary leading-[1.2] mb-4"
              style={{ fontSize: "clamp(22px, 3.5vw, 30px)" }}
            >
              This page doesn&rsquo;t exist.
            </motion.h2>

            <motion.p
              {...entrance(0.32)}
              className="font-sans font-light text-secondary text-[15px] leading-relaxed mb-10 max-w-sm"
            >
              Whatever you were looking for has moved, never existed, or decided
              it wanted a quieter life.
            </motion.p>

            {/* CTA */}
            <motion.div {...entrance(0.38)}>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent link-draw"
                aria-label="Go back to homepage"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
