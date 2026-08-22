import { useEffect, useState } from "react";
import cvAsset from "@/assets/Akshay-Girish-CV-2026.pdf.asset.json";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 140) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="display text-lg tracking-tight">
            Akshay <span className="em-lav">Girish</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`label-xs transition-colors hover:text-foreground ${
                    active === l.id ? "text-foreground" : ""
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cvAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="label-xs border border-foreground px-4 py-2.5 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
              >
                Download Resume ↗
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="label-xs text-foreground lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
        <div className="h-px w-full bg-transparent">
          <div className="h-px bg-plum transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {open && (
        <div className="border-b border-border bg-paper px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="label-xs text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cvAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="label-xs text-plum"
              >
                Download Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
