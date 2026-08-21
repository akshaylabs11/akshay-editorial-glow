import ey from "@/assets/EY-Financial-Modelling.pdf.asset.json";
import nism from "@/assets/NISM-Certificate.pdf.asset.json";
import lpuCert from "@/assets/LPU-Financial-Modelling-Certificate.png.asset.json";
import { Reveal } from "./Reveal";

const certs = [
  {
    no: "01",
    org: "Ernst & Young (EY)",
    title: "Financial Modelling and Valuation",
    meta: "Aug 2026 · Financial Modelling",
    url: ey.url,
  },
  {
    no: "02",
    org: "NISM",
    title: "Research Analyst Series XV Certification",
    meta: "Oct 2025 · Research & Analysis",
    url: nism.url,
  },
  {
    no: "03",
    org: "Lovely Professional University",
    title: "Applied Financial Modelling Using Excel and AI",
    meta: "Feb — Mar 2026 · Grade B · Excel & AI",
    url: lpuCert.url,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">08 — Certifications</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            Verified <span className="em-lav">credentials.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {certs.map((c, i) => (
            <Reveal key={c.no} delay={i * 100}>
              <div className="grid items-center gap-5 border-t border-border py-9 md:grid-cols-[0.1fr_0.55fr_0.2fr_0.15fr] md:gap-8">
                <p className="display text-3xl text-lavender">{c.no}</p>
                <div>
                  <p className="label-xs">{c.org}</p>
                  <p className="display mt-2 text-xl md:text-2xl">{c.title}</p>
                </div>
                <p className="label-xs">{c.meta}</p>
                <div className="md:text-right">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-xs inline-block border border-border px-4 py-3 text-foreground transition-colors duration-300 hover:border-foreground"
                    >
                      Credential ↗
                    </a>
                  ) : (
                    <span className="label-xs inline-block border border-dashed border-border px-4 py-3">
                      Certificate file not provided
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
