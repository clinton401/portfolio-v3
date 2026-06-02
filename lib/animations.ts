// lib/animations.ts
// Centralized animation config. Import from here only - never define variants inline.

import type { Variants } from "motion/react";

// Editorial easing - slow in, fast out. Feels deliberate, not bouncy.
const ease = [0.16, 1, 0.3, 1] as const;
const easeOut = [0.0, 0.0, 0.2, 1] as const;

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: easeOut },
    },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease },
    },
};

export const lineReveal: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.9, ease },
    },
};

// Parent that staggers children
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.09,
            delayChildren: 0.05,
        },
    },
};

// Slower stagger for hero text lines
export const heroStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

export const heroLine: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.85, ease },
    },
};

// Work row - subtle, doesn't compete with the content
export const rowItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
    },
};

// Mobile Nav Overlay animations
export const overlayVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export const linkVariants: Variants = {
  closed: { opacity: 0, y: 24 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const socialVariants: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.38 },
  },
};

