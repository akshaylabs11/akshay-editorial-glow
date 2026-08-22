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
    <section id="certifications" className="sec-dark border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">08 — Certifications</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            Verified <span className="em-lav">credentials.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.no} delay={i * 100}>
              <article className="group flex h-full flex-col justify-between border border-border bg-paper p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-lavender hover:shadow-[0_30px_70px_-40px_rgba(184,154,207,0.75)]">
                <div>
                  <p className="display num-zoom text-4xl text-lavender">{c.no}</p>
                  <p className="label-xs mt-8">{c.org}</p>
                  <h3 className="display mt-3 text-xl transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="label-xs mt-4">{c.meta}</p>
                </div>

                <div className="mt-10">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-xs inline-flex items-center gap-2 border-b border-border pb-2 text-foreground transition-colors duration-300 hover:border-lavender"
                    >
                      Credential
                      <span className="text-lavender transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="label-xs inline-block border border-dashed border-border px-4 py-3">
                      Placeholder — certificate file not provided
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
