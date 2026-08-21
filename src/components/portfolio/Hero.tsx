import portrait from "@/assets/akshay-cover.png.asset.json";
import cvAsset from "@/assets/Akshay-Girish-CV-2026.pdf.asset.json";
import { Reveal } from "./Reveal";

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
                target="_blank"
                rel="noopener noreferrer"
                className="label-xs border border-border px-6 py-4 text-foreground transition-all duration-300 hover:border-foreground"
              >
                Download CV ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
              <span className="label-xs">Finance</span>
              <span className="text-lavender">·</span>
              <span className="label-xs">Analytics</span>
              <span className="text-lavender">·</span>
              <span className="label-xs">Strategy</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -top-6 -left-6 hidden h-28 w-28 rounded-full border border-border md:block" />
            <div className="relative overflow-hidden bg-accent">
              <img
                src={portrait.url}
                alt="Akshay Girish"
                width={1136}
                height={1440}
                className="h-[440px] w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03] md:h-[600px]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <p className="label-xs">Numbers → Insight</p>
              <p className="label-xs">Insight → Decision</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
