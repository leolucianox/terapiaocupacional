import { Sparkles, GraduationCap, Compass } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";
import { site } from "@/lib/site";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    // [FORMAÇÃO] — substituir pela formação real
    text: "Terapeuta Ocupacional registrada no CREFITO-3, com formação voltada à reabilitação e à promoção de autonomia.",
  },
  {
    icon: Compass,
    title: "Abordagem",
    // [ABORDAGEM] — substituir pela abordagem real
    text: "Atuação centrada na pessoa: planos individualizados que respeitam a rotina, o contexto e os objetivos de cada paciente.",
  },
  {
    icon: Sparkles,
    title: "Propósito",
    text: "Promover funcionalidade, autonomia e qualidade de vida em cada etapa do cuidado.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-y">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-[2.5rem] bg-cream-deep shadow-soft ring-8 ring-white/60">
              {/* Imagem secundária / ambiente do consultório */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-tint via-cream to-teal/15">
                <span className="px-6 text-center font-script text-3xl text-pink">
                  cuidado que acolhe
                </span>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 h-40 w-40 rounded-full bg-brandyellow/30 blur-2xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <Pill variant="navy">Quem sou</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {site.professional.name}
            </h2>
            <p className="text-sm font-medium uppercase tracking-wide text-pink">
              {site.professional.role} · {site.professional.register}
            </p>
            <p className="text-lg leading-relaxed text-navy-soft">
              Acolho cada paciente com dedicação, cuidado e propósito,
              promovendo funcionalidade, autonomia e qualidade de vida. Acredito
              em um cuidado humano, que enxerga a pessoa além do diagnóstico e
              valoriza cada conquista no caminho.
            </p>

            <ul className="mt-2 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-5 shadow-soft"
                >
                  <item.icon
                    className="mb-3 size-6 text-teal"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-soft">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
