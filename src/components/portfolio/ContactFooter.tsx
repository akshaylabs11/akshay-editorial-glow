import cvAsset from "@/assets/Akshay-Girish-CV-2026.pdf.asset.json";
import { Reveal } from "./Reveal";

const details = [
  { label: "Email", value: "akshaygirish2003@gmail.com", href: "mailto:akshaygirish2003@gmail.com" },
  { label: "Mobile", value: "+91-9895098121", href: "tel:+919895098121" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akshay-girish1",
    href: "https://www.linkedin.com/in/akshay-girish1",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="label-xs">09 — Contact</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,4rem)]">
            Let&apos;s talk <span className="em-lav">numbers.</span>
          </h2>
          <a
            href={cvAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs mt-10 inline-block bg-foreground px-6 py-4 text-primary-foreground transition-colors duration-300 hover:bg-plum"
          >
            Download CV ↗
          </a>
        </Reveal>

        <Reveal delay={150} className="self-end">
          <dl className="divide-y divide-border border-y border-border">
            {details.map((d) => (
              <div key={d.label} className="flex items-baseline justify-between gap-6 py-6">
                <dt className="label-xs">{d.label}</dt>
                <dd>
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-serif text-lg transition-colors duration-300 hover:text-plum md:text-xl"
                  >
                    {d.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center md:px-10">
        <p className="label-xs">© 2026 Akshay Girish</p>
        <p className="label-xs">Finance × Analytics × Strategy</p>
        <a href="#top" className="label-xs text-foreground transition-colors hover:text-plum">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
