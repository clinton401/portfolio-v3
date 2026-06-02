"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { FadeUp } from "@/components/ui/fade-up";
import { stack } from "@/data/stack"; // Pointing to our unified data file

export function StackSection() {
  return (
    <section
      id="stack"
      className="section-padding border-t border-border-subtle"
      aria-label="Technical stack"
    >
      <div className="container-main">
        <FadeUp>
          <SectionLabel number="03" title="Technical Stack" />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
          {stack.map((category, i) => (
            <FadeUp key={category.label} delay={i * 0.08}>
              <div>
                {/* Column Header */}
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-3 pb-3 border-b border-border-subtle">
                  {category.label}
                </p>

                {/* The "Spec Sheet" List */}
                <ul className="space-y-0" role="list">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[12px] text-primary py-2.5 border-b border-border-subtle transition-colors duration-150 hover:text-accent cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
