import ezfinanz from "@/assets/ezfinanz.png.asset.json";
import ncc from "@/assets/ncc.png.asset.json";
import { Reveal } from "./Reveal";

type Item = {
  company: string;
  location: string;
  role: string;
  date: string;
  points: string[];
  areas: string[];
  logo?: string;
  logoAlt?: string;
};

const roles: Item[] = [
  {
    company: "EZFinanz (Sai Roshni Capital Pvt. Ltd)",
    location: "Hyderabad",
    role: "Finance Intern",
    date: "Jun 2026 — Jul 2026",
    points: [
      "Supported interest calculation and loan disbursement processes by reviewing financial information and documentation, contributing to accurate and timely execution of day-to-day finance operations.",
      "Analyzed and organized financial data using Excel to prepare internal reports, strengthen record maintenance, and support efficient tracking of finance-related activities.",
    ],
    areas: ["Finance Operations", "Excel", "Reporting", "Documentation Review"],
    logo: ezfinanz.url,
    logoAlt: "EZFinanz",
  },
];

const voluntary: Item[] = [
  {
    company: "Department Fest Organising Team",
    location: "",
    role: "Organising Team",
    date: "Mar 2024 — Apr 2024",
    points: [
      "Coordinated faculty, sponsors, and student teams to execute a department fest for 200+ participants, managing scheduling, logistics, and event requirements.",
      "Managed timelines, resources, and team responsibilities, keeping event activities aligned and ensuring timely execution across multiple operational requirements.",
    ],
    areas: ["Coordination", "Logistics", "Team Collaboration"],
  },
  {
    company: "National Cadet Corps (NCC)",
    location: "",
    role: "Cadet",
    date: "Oct 2021 — Mar 2022",
    points: [
      "Led discipline training and leadership activities, coordinating participant engagement and team responsibilities to ensure structured execution of NCC programs.",
      "Organized community-service and awareness initiatives, coordinating outreach activities and local participant engagement to support community-focused programs.",
    ],
    areas: ["Leadership", "Community Outreach", "Execution"],
    logo: ncc.url,
    logoAlt: "National Cadet Corps",
  },
];

function Row({ item }: { item: Item }) {
  return (
    <div className="group grid gap-6 border-t border-border py-10 transition-colors duration-500 hover:border-lavender md:grid-cols-[0.32fr_0.68fr] md:gap-10">
      <div>
        <p className="label-xs">{item.date}</p>
        <div className="mt-3 flex items-center gap-4">
          {item.logo && (
            <img
              src={item.logo}
              alt={item.logoAlt}
              loading="lazy"
              className="h-11 w-11 shrink-0 object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            />
          )}
          <p className="display text-2xl md:text-[1.75rem]">{item.company}</p>
        </div>
        {item.location && <p className="label-xs mt-2">{item.location}</p>}
      </div>
      <div>
        <p className="em-lav text-xl">{item.role}</p>
        <ul className="mt-5 space-y-4">
          {item.points.map((p) => (
            <li key={p} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-px w-5 shrink-0 bg-lavender transition-all duration-500 group-hover:w-8" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {item.areas.map((a) => (
            <span key={a} className="label-xs">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">04 — Experience</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            Where the work <span className="em-lav">actually happened.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 100}>
              <Row item={r} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="label-xs mt-20">Voluntary experience &amp; community development</p>
        </Reveal>
        <div className="mt-8">
          {voluntary.map((r, i) => (
            <Reveal key={r.company} delay={i * 100}>
              <Row item={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
