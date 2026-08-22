import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Tools & Platforms",
    items: [
      { name: "MS Excel", note: "Financial modelling · Variance analysis · Reporting" },
      { name: "Power BI", note: "Data visualization · Performance dashboards" },
      { name: "SQL", note: "Querying and organising business data" },
      { name: "Financial Modelling", note: "Revenue, cost, cash flow and break-even models" },
      { name: "Data Visualization", note: "Turning analysis into readable visuals" },
      { name: "MS PowerPoint", note: "Business presentations and pitches" },
    ],
  },
  {
    title: "Power Skills",
    items: [
      { name: "Analytical Thinking", note: "Structured breakdown of business problems" },
      { name: "Problem Solving", note: "Applied in case and quiz competitions" },
      { name: "Communication", note: "Clear reporting and stakeholder updates" },
      { name: "Presentation Skills", note: "Pitching concepts to an audience" },
      { name: "Team Collaboration", note: "Group projects and event coordination" },
    ],
  },
  {
    title: "Focus Areas",
    items: [
      { name: "Investment Banking", note: "MBA specialization at LPU" },
      { name: "Operations", note: "Day-to-day finance execution" },
      { name: "Financial Analysis", note: "Ratios, profitability and risk metrics" },
      { name: "Business Analysis", note: "Benchmarking and market positioning" },
    ],
  },
];

export function Skills() {
  return (
    <section id="toolkit" className="sec-lav border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">06 — Toolkit</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            The tools behind <span className="em-lav">the thinking.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-14 md:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 120}>
              <p className="label-xs border-b border-foreground pb-4 text-foreground">{g.title}</p>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="group border border-transparent border-b-border bg-transparent px-3 py-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-lavender hover:bg-paper hover:shadow-[0_18px_40px_-30px_rgba(118,85,143,0.7)]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-lavender transition-transform duration-500 group-hover:scale-[1.8]" />
                      <span className="origin-left font-serif text-lg transition-transform duration-500 ease-out group-hover:scale-[1.06]">
                        {it.name}
                      </span>
                    </div>
                    <p className="label-xs mt-0 max-h-0 translate-y-1 overflow-hidden pl-6 opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-16 group-hover:translate-y-0 group-hover:opacity-100">
                      {it.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="label-xs mt-14">
            Skill levels are intentionally not scored — the projects above show the applied depth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
