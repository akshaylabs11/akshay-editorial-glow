import ey from "@/assets/EY-Financial-Modelling.pdf.asset.json";
import nism from "@/assets/NISM-Certificate.pdf.asset.json";
import lpuCert from "@/assets/LPU-Financial-Modelling-Certificate.png.asset.json";
import { Button } from "@/components/ui/button";
import { MediaLightbox } from "./MediaLightbox";
import { Reveal } from "./Reveal";

const certs = [
  {
    no: "01",
    org: "Ernst & Young (EY)",
    title: "Financial Modelling and Valuation",
    meta: "Aug 2026 · Financial Modelling",
    url: ey.url,
    kind: "document" as const,
  },
  {
    no: "02",
    org: "NISM",
    title: "Research Analyst Series XV Certification",
    meta: "Oct 2025 · Research & Analysis",
    url: nism.url,
    kind: "document" as const,
  },
  {
    no: "03",
    org: "Lovely Professional University",
    title: "Applied Financial Modelling Using Excel and AI",
    meta: "Feb — Mar 2026 · Grade B · Excel & AI",
    url: lpuCert.url,
    kind: "image" as const,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="sec-dark border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="label-xs">08 — Certifications</p>
          <h2 className="display mt-10 text-[clamp(2.2rem,5vw,3.8rem)]">
            Verified <span className="em-lav">credentials.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.no} delay={i * 100}>
              <article className="group flex h-full min-h-[330px] flex-col justify-between border border-border bg-paper p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-lavender hover:shadow-[0_30px_70px_-40px_rgba(184,154,207,0.75)] md:p-8">
                <div>
                  <p className="display num-zoom text-4xl text-lavender">{c.no}</p>
                  <p className="label-xs mt-8">{c.org}</p>
                  <h3 className="display mt-3 text-xl transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="label-xs mt-4">{c.meta}</p>
                </div>

                <div className="mt-10">
                  <MediaLightbox
                    src={c.url}
                    title={c.title}
                    description={`${c.org} certificate`}
                    kind={c.kind}
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      className="label-xs h-auto rounded-none border-b border-border px-0 pb-2 text-foreground transition-colors duration-300 hover:border-lavender hover:bg-transparent"
                    >
                      View credential
                      <span className="text-lavender transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </Button>
                  </MediaLightbox>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
