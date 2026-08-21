import lpu from "@/assets/lpu.png.asset.json";
import loyola from "@/assets/loyola.png.asset.json";
import kv from "@/assets/kv.png.asset.json";
import { Reveal } from "./Reveal";

const items = [
  {
    years: "2025 — Present",
    kicker: "Master of Business Administration",
    degree: "MBA",
    school: "Lovely Professional University",
    detail: "Investment Banking & Operations · Phagwara, Punjab",
    scoreLabel: "CGPA",
    score: "7.57",
    logo: lpu.url,
    alt: "Lovely Professional University",
  },
  {
    years: "2021 — 2024",
    kicker: "Bachelor of Commerce",
    degree: "B.Com",
    school: "Loyola Academy",
    detail: "Computer Applications · Hyderabad, Telangana",
    scoreLabel: "CGPA",
    score: "8.58",
    logo: loyola.url,
    alt: "Loyola Academy",
  },
  {
    years: "2020 — 2021",
    kicker: "Schooling",
    degree: "Higher Secondary Education",
    school: "Kendriya Vidyalaya",
    detail: "Intermediate · Hyderabad, Telangana",
    scoreLabel: "Percentage",
    score: "64.8%",
    logo: kv.url,
    alt: "Kendriya Vidyalaya",
  },
];

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">07 — Education</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            A commerce <span className="em-lav">foundation.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {items.map((it, i) => (
            <Reveal key={it.school} delay={i * 100}>
              <div className="grid items-center gap-6 border-t border-border py-10 md:grid-cols-[0.24fr_0.56fr_0.2fr] md:gap-10">
                <p className="display text-2xl md:text-[1.9rem]">{it.years}</p>

                <div className="flex items-center gap-6">
                  <img
                    src={it.logo}
                    alt={it.alt}
                    width={64}
                    height={64}
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                  <div>
                    <p className="label-xs">{it.kicker}</p>
                    <p className="display mt-2 text-2xl">{it.school}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{it.detail}</p>
                  </div>
                </div>

                <div className="md:pr-6 md:text-right">
                  <p className="label-xs">{it.scoreLabel}</p>
                  <p className="display mt-2 text-3xl text-plum md:text-4xl">{it.score}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
