import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Tools & Platforms",
    items: ["MS Excel", "Power BI", "SQL", "Financial Modelling", "Data Visualization", "MS PowerPoint"],
  },
  {
    title: "Power Skills",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Presentation Skills",
      "Team Collaboration",
    ],
  },
  {
    title: "Focus Areas",
    items: ["Investment Banking", "Operations", "Financial Analysis", "Business Analysis"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">06 — Skills</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            The <span className="em-lav">toolkit.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 120}>
              <p className="label-xs border-b border-foreground pb-4 text-foreground">{g.title}</p>
              <ul className="mt-6 space-y-4">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="group flex items-center gap-4 border-b border-border pb-4 font-serif text-lg"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lavender transition-transform duration-300 group-hover:scale-150" />
                    {it}
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
