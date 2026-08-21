import { Reveal } from "./Reveal";

const projects = [
  {
    no: "01",
    category: "Financial Modelling",
    title: "Business Planning and Cost Optimization",
    date: "Sep 2025 — Oct 2025 · Hyderabad",
    points: [
      "Built an Excel financial model integrating revenue, costs, cash flow, break-even, and variance analysis to assess profitability and identify key cost drivers.",
      "Analyzed competitor pricing, offerings, and market positioning to identify pricing gaps and growth opportunities for business planning.",
    ],
    tools: ["Excel", "Financial Modelling", "Variance Analysis", "Competitor Benchmarking"],
    flowLabels: ["Revenue", "Costs", "Break-even", "Decision"],
  },
  {
    no: "02",
    category: "Banking Analytics",
    title: "Business Performance Analysis of Public Sector Banks",
    date: "Feb 2024 — Mar 2024 · Hyderabad",
    points: [
      "Benchmarked 5 public-sector banks using Excel across ROA, ROE, profitability, efficiency, and risk metrics, identifying a 7% profitability gap and key financial risks.",
      "Built dynamic budgeting and forecasting models using historical data and variance analysis, improving budget accuracy and reducing forecast variance by 10%.",
    ],
    tools: ["Excel", "Ratio Analysis", "Budgeting & Forecasting", "Risk Metrics"],
    flowLabels: ["ROA", "ROE", "Efficiency", "Risk"],
  },
  {
    no: "03",
    category: "Pitch · Concept",
    title: "Mental Wellness Support App Concept — Pitch Perfect 2.0",
    date: "May 2026",
    points: [
      "Pitched a technology-enabled solution connecting individuals seeking emotional support with accessible help resources, addressing a real-world social need.",
    ],
    tools: ["Problem Framing", "Pitching", "Presentation Skills"],
    flowLabels: ["Need", "Concept", "Pitch"],
  },
  {
    no: "04",
    category: "Case & Quiz Competitions",
    title: "Business Case & Quiz Competitions",
    date: "Dec 2022 · Hyderabad",
    points: [
      "Applied analytical reasoning and business knowledge through competitive case analysis and quiz-based problem solving.",
    ],
    tools: ["Analytical Thinking", "Business Knowledge", "Problem Solving"],
    flowLabels: ["Case", "Analysis", "Answer"],
  },
  {
    no: "05",
    category: "Workshop · Group of five",
    title: "LinkedIn Profile Optimization Booth",
    date: "Group project · Conducted in a group of five",
    points: [
      "Conducted as a collaborative workshop activity in a group of five, we opened a LinkedIn booth where students could come and get help with their professional presence.",
      "Helped students optimize their LinkedIn profiles, understand what they should add, improve existing profiles and strengthen their profile presentation.",
      "Reviewed multiple students' profiles and explained practical ways they could improve their current LinkedIn presence.",
    ],
    tools: ["Profile Review", "Personal Branding", "Peer Guidance", "Team Collaboration"],
    flowLabels: ["Student", "Profile Review", "Feedback", "Improvement"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">05 — Projects</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            Five chapters in <span className="em-lav">applied finance.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {projects.map((p) => (
            <Reveal key={p.no}>
              <article className="grid gap-8 border-t border-border py-12 md:grid-cols-[0.12fr_0.44fr_0.44fr] md:gap-10">
                <p className="display text-4xl text-lavender md:text-5xl">{p.no}</p>

                <div>
                  <p className="label-xs">{p.category}</p>
                  <h3 className="display mt-4 text-2xl md:text-[2rem]">{p.title}</h3>
                  <p className="label-xs mt-4">{p.date}</p>
                </div>

                <div>
                  <ul className="space-y-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm leading-relaxed text-muted-foreground">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {p.tools.map((t) => (
                      <span key={t} className="label-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                    {p.flowLabels.map((f, i) => (
                      <span key={f} className="flex items-center gap-3">
                        <span className="label-xs text-plum">{f}</span>
                        {i < p.flowLabels.length - 1 && <span className="text-lavender">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
