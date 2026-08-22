import cvAsset from "@/assets/Akshay-Girish-CV-2026.pdf.asset.json";
import portrait from "@/assets/akshay-portrait.jpg.asset.json";
import { Reveal } from "./Reveal";

const rows = [
  {
    label: "Email",
    value: "akshaygirish2003@gmail.com",
    href: "mailto:akshaygirish2003@gmail.com",
  },
  { label: "Phone", value: "+91-9895098121", href: "tel:+919895098121" },
  {
    label: "LinkedIn",
    value: "View LinkedIn profile",
    href: "https://www.linkedin.com/in/akshay-girish1",
  },
  { label: "Resume", value: "Download CV", href: cvAsset.url },
];

const flow = [
  { no: "01", text: "Numbers → Insight" },
  { no: "02", text: "Insight → Decision" },
  { no: "03", text: "Decision → Impact" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">09 — Let&apos;s Connect</p>
        </Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal delay={100}>
              <h2 className="display text-[clamp(2.4rem,6vw,4.6rem)]">
                Let&apos;s turn
                <br />
                <span className="em-lav">insight into</span>
                <br />
                action.
              </h2>
              <p className="mt-8 max-w-md text-base leading-loose text-muted-foreground">
                Open to conversations around finance, analytics, strategy and opportunities where
                structured thinking can create meaningful business impact.
              </p>
            </Reveal>

            <div className="mt-12">
              {rows.map((r, i) => (
                <Reveal key={r.label} delay={200 + i * 100}>
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") || r.href.startsWith("/") ? "_blank" : undefined}
                    rel={
                      r.href.startsWith("http") || r.href.startsWith("/")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-baseline justify-between gap-6 border-t border-border py-6 transition-all duration-[400ms] ease-out hover:border-lavender hover:pl-3"
                  >
                    <span className="label-xs transition-colors duration-300 group-hover:text-plum">
                      {r.label}
                    </span>
                    <span className="flex items-baseline gap-4">
                      <span className="font-serif text-lg transition-colors duration-300 group-hover:text-plum md:text-xl">
                        {r.value}
                      </span>
                      <span className="text-lavender transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={600}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:akshaygirish2003@gmail.com"
                  className="label-xs bg-foreground px-6 py-4 text-primary-foreground transition-colors duration-300 hover:bg-plum"
                >
                  Let&apos;s talk ↗
                </a>
                <a
                  href={cvAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-xs border border-border px-6 py-4 text-foreground transition-colors duration-300 hover:border-foreground"
                >
                  Download CV ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/akshay-girish1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-xs border border-border px-6 py-4 text-foreground transition-colors duration-300 hover:border-foreground"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} className="relative">
            <div className="group relative mx-auto max-w-[520px]">
              <div className="absolute -top-8 -right-4 hidden h-32 w-32 rounded-full border border-border md:block" />
              <div className="absolute -bottom-10 -left-6 hidden h-20 w-20 rounded-full border border-lavender/60 md:block" />

              <div className="portrait-organic relative overflow-hidden border border-border bg-accent shadow-[0_28px_80px_-45px_rgba(17,17,17,0.5)] transition-shadow duration-700 ease-out group-hover:shadow-[0_38px_100px_-40px_rgba(118,85,143,0.6)]">
                <img
                  src={portrait.url}
                  alt="Akshay Girish"
                  loading="lazy"
                  className="h-[420px] w-full object-cover object-[center_top] contrast-[1.06] saturate-[0.92] transition-all duration-[1000ms] ease-out group-hover:translate-y-[-8px] group-hover:scale-[1.05] group-hover:contrast-[1.12] group-hover:saturate-100 md:h-[540px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(12,12,12,0.55)_100%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-45 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_4px)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="label-xs text-white/80">Akshay Girish</p>
                  <p className="label-xs mt-1 text-white/60">Finance × Analytics × Strategy</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
                <span className="label-xs">Finance</span>
                <span className="text-lavender">·</span>
                <span className="label-xs">Analytics</span>
                <span className="text-lavender">·</span>
                <span className="label-xs">Strategy</span>
              </div>

              <dl className="mt-6 divide-y divide-border border-t border-border">
                {flow.map((f) => (
                  <div key={f.no} className="flex items-baseline gap-6 py-4">
                    <dt className="display num-zoom text-xl text-lavender">{f.no}</dt>
                    <dd className="label-xs">{f.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
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
