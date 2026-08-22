import { useInView, useCountUp } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

function Stat({
  label,
  target,
  decimals,
  suffix = "",
  active,
}: {
  label: string;
  target: number;
  decimals: number;
  suffix?: string;
  active: boolean;
}) {
  const value = useCountUp(target, active, decimals);
  return (
    <div className="group border-t border-border pt-5 transition-colors duration-500 hover:border-lavender">
      <p className="label-xs transition-colors duration-300 group-hover:text-plum">{label}</p>
      <p className="display num-zoom mt-3 text-5xl md:text-6xl">
        {value}
        <span className="em-lav">{suffix}</span>
      </p>
    </div>
  );
}


export function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">01 — About</p>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal delay={100}>
            <h2 className="display text-[clamp(2.4rem,6vw,4.6rem)]">
              It started with
              <br />
              <span className="em-lav">understanding</span>
              <br />
              the numbers.
            </h2>
            <p className="display mt-8 text-3xl md:text-4xl">Then the business.</p>
          </Reveal>

          <Reveal delay={200} className="self-end">
            <p className="text-base leading-loose text-muted-foreground">
              Akshay began with a commerce background and developed an interest in understanding how
              numbers describe a business. His MBA journey then moved that interest toward finance,
              analytics, operations and business decision-making.
            </p>
            <p className="mt-6 text-base leading-loose text-muted-foreground">
              Today that work sits at the intersection of financial modelling, performance analysis
              and operational execution — building models, benchmarking performance and turning
              findings into decisions.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="mt-20 grid gap-10 sm:grid-cols-3 md:gap-14">
          <Stat label="MBA CGPA" target={7.57} decimals={2} active={inView} />
          <Stat label="B.Com" target={8.58} decimals={2} active={inView} />
          <Stat label="Event Reach" target={200} decimals={0} suffix="+" active={inView} />
        </div>
      </div>
    </section>
  );
}
