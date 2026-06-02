import { personal } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border-subtle"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-main">
        <div className="flex items-center justify-between py-6 flex-wrap gap-3">
          <p className="font-mono text-[11px] text-muted">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted">
            Engineered with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}

