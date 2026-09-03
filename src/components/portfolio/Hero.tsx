import portrait from "@/assets/akshay-cover.png.asset.json";
import cvAsset from "@/assets/Akshay-Girish-CV-2026.pdf.asset.json";
import { Reveal } from "./Reveal";

const flow = [
  { no: "01", text: "Numbers → Insight" },
  { no: "02", text: "Insight → Decision" },
  { no: "03", text: "Decision → Impact" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <Reveal>
            <p className="label-xs">MBA Candidate · Placement Portfolio</p>
            <div className="mt-6 h-px w-16 bg-lavender" />
          </Reveal>

          <Reveal delay={100}>
            <h1 className="display mt-8 text-[clamp(3.4rem,11vw,8.5rem)]">
              <span className="block">AKSHAY</span>
              <span className="em-lav block">Girish</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="label-xs mt-8 text-foreground">MBA · Investment Banking &amp; Operations</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              MBA candidate focused on financial analysis, business problem-solving and data-driven
              decision making.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="label-xs bg-foreground px-6 py-4 text-primary-foreground transition-all duration-300 hover:bg-plum"
              >
                Explore my work ↓
              </a>
              <a
                href={cvAsset.url}
                download="Akshay-Girish-CV-2026.pdf"
                className="label-xs border border-border px-6 py-4 text-foreground transition-all duration-300 hover:border-foreground"
              >
                Download CV ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-14 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {flow.map((f) => (
                <div key={f.no} className="flex items-baseline gap-3">
                  <dt className="display num-zoom text-2xl text-lavender">{f.no}</dt>
                  <dd className="label-xs">{f.text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="label-xs">Finance</span>
              <span className="text-lavender">·</span>
              <span className="label-xs">Analytics</span>
              <span className="text-lavender">·</span>
              <span className="label-xs">Strategy</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="group relative mx-auto max-w-[480px]">
            <div className="absolute -top-6 -left-8 hidden h-32 w-32 rounded-full border border-border md:block" />
            <div className="absolute -right-6 bottom-16 hidden h-20 w-20 rounded-full border border-lavender/60 md:block" />

            <div className="portrait-editorial relative overflow-hidden border border-border bg-accent shadow-[0_24px_70px_-40px_rgba(17,17,17,0.45)] transition-shadow duration-700 ease-out group-hover:shadow-[0_34px_90px_-38px_rgba(118,85,143,0.55)]">
              <img
                src={portrait.url}
                alt="Akshay Girish – Finance and Analytics"
                width={1136}
                height={1440}
                className="h-[460px] w-full object-cover object-[center_18%] transition-transform duration-[900ms] ease-out group-hover:translate-y-[-6px] group-hover:scale-[1.035] md:h-[620px]"
              />
            </div>

            <div className="mt-6 flex items-start justify-between gap-4">
              <p className="label-xs">Akshay Girish</p>
              <p className="label-xs">Finance × Analytics × Strategy</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
