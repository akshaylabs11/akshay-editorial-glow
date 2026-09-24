import business from "@/assets/project-business.jpg.asset.json";
import banks from "@/assets/project-banks.jpg.asset.json";
import wellness from "@/assets/project-wellness.jpg.asset.json";
import quiz from "@/assets/project-quiz.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { MediaLightbox } from "./MediaLightbox";
import { Reveal } from "./Reveal";

type Project = {
  no: string;
  category: string;
  title: string;
  date: string;
  points: string[];
  tools: string[];
  flowLabels: string[];
  image?: string;
  imageAlt?: string;
  frame: string;
};

const projects: Project[] = [
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
    image: business.url,
    imageAlt: "Business planning charts and analysis worksheet",
    frame: "rounded-[2rem]",
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
    image: banks.url,
    imageAlt: "Financial market data screen with price movements",
    frame: "rounded-[999px_999px_2rem_2rem]",
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
    image: wellness.url,
    imageAlt: "Health app categories displayed on a smartphone",
    frame: "rounded-[2rem_2rem_6rem_2rem]",
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
    image: quiz.url,
    imageAlt: "Hand writing answers on a printed question sheet",
    frame: "rounded-[6rem_2rem_2rem_2rem]",
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
    frame: "rounded-[2rem]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="sec-dark border-t border-border py-24 md:py-36">
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
              <article className="group grid gap-8 border-t border-border py-12 transition-colors duration-500 hover:border-lavender md:grid-cols-[0.34fr_0.32fr_0.34fr] md:gap-10">
                <div>
                  <div className="flex items-baseline gap-5">
                    <p className="display num-zoom text-4xl text-lavender transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:text-plum md:text-5xl">
                      {p.no}
                    </p>
                    <p className="label-xs">{p.category}</p>
                  </div>

                  {p.image ? (
                    <MediaLightbox
                      src={p.image}
                      title={p.title}
                      description={p.imageAlt ?? p.title}
                      kind="image"
                    >
                      <Button
                        type="button"
                        variant="ghost"
                        className={`group/image relative mt-6 block h-56 w-full overflow-hidden border border-border p-0 md:h-64 ${p.frame} transition-shadow duration-500 ease-out hover:bg-transparent group-hover:shadow-[0_28px_70px_-40px_rgba(184,154,207,0.7)]`}
                        aria-label={`View image for ${p.title}`}
                      >
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/image:-translate-y-1 group-hover/image:scale-[1.045]"
                        />
                        <span className="label-xs absolute inset-x-0 bottom-0 translate-y-full bg-paper/90 px-5 py-4 text-left text-foreground backdrop-blur-sm transition-transform duration-500 ease-out group-hover/image:translate-y-0 group-focus-visible/image:translate-y-0">
                          View image ↗
                        </span>
                      </Button>
                    </MediaLightbox>
                  ) : null}
                </div>

                <div>
                  <h3 className="display text-2xl transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:text-lavender md:text-[2rem]">
                    {p.title}
                  </h3>
                  <p className="label-xs mt-4">{p.date}</p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {p.tools.map((t) => (
                      <span key={t} className="label-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <ul className="space-y-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm leading-relaxed text-muted-foreground">
                        {pt}
                      </li>
                    ))}
                  </ul>
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
