import { Reveal } from "./Reveal";

const flow = ["Commerce", "Finance", "Analytics", "Strategy"];

export function Story() {
  return (
    <section className="sec-dark border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">02 — The turn</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="display mt-12 max-w-4xl text-[clamp(2.2rem,5.5vw,4.4rem)]">
            But I wanted to understand what happens{" "}
            <span className="em-lav">behind the numbers.</span>
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 md:flex-row md:items-center md:gap-4">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-6 md:flex-1 md:gap-4">
              <Reveal delay={i * 140} className="flex-1">
                <div className="group border-t border-foreground pt-4">
                  <span className="label-xs num-zoom text-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="display mt-2 text-2xl transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-3xl">
                    {step}
                  </p>
                </div>
              </Reveal>
              {i < flow.length - 1 && (
                <Reveal delay={i * 140 + 70}>
                  <span className="text-xl text-lavender">→</span>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CurrentMba() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="label-xs">03 — Right now</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5.5vw,4.2rem)]">
            Right now, I am building depth in{" "}
            <span className="em-lav">Finance &amp; Operations.</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="self-end">
          <dl className="divide-y divide-border border-y border-border">
            {[
              ["Programme", "MBA"],
              ["Institution", "Lovely Professional University"],
              ["Specialization", "Investment Banking & Operations"],
              ["CGPA", "7.57"],
              ["Period", "2025 — Present"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-5">
                <dt className="label-xs">{k}</dt>
                <dd
                  className={`text-right font-serif text-lg md:text-xl ${
                    k === "CGPA" ? "num-zoom text-2xl md:text-3xl" : ""
                  }`}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
