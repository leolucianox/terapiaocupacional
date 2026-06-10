import Image from "next/image";
import { Sparkles, GraduationCap, Compass, Award } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";
import { site } from "@/lib/site";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    text: "Formada em Terapia Ocupacional pela Universidade do Vale do Paraíba (2008), com Pós em Pediatria, Pós em Tecnologia Assistiva e MBA em Gestão em Saúde.",
  },
  {
    icon: Compass,
    title: "Abordagem",
    text: "Atuação centrada na pessoa e na família, com planos terapêuticos individualizados e recursos baseados em evidências para promover participação e autonomia.",
  },
  {
    icon: Sparkles,
    title: "Propósito",
    text: "Promover funcionalidade, autonomia e qualidade de vida, ajudando cada pessoa a alcançar seu máximo potencial nas atividades do dia a dia.",
  },
];

/** Experiência e qualificações destacadas (do material da profissional). */
const credenciais = [
  "18 anos de experiência em Terapia Ocupacional",
  "12 anos na Rede Lucy Montoro",
  "19 anos de atuação na rede pública de saúde",
  "Experiência em ambiente hospitalar e UTI",
  "Reabilitação neurofuncional",
  "Terapia por Contensão Induzida",
  "Protocolo FES Otimizado",
  "Interface Cérebro–Máquina",
];

export function About() {
  return (
    <section id="sobre" className="section-y">
      <div className="container flex flex-col gap-12 lg:gap-16">
        {/* Bloco 1 — Foto + apresentação, formação, abordagem e propósito */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream-deep shadow-soft ring-8 ring-white/60 lg:aspect-auto lg:h-full lg:min-h-[30rem]">
              <Image
                src="/images/foto1.jpeg"
                alt={`${site.professional.name}, ${site.professional.role}`}
                fill
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 -z-10 h-40 w-40 rounded-full bg-brandyellow/30 blur-2xl"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-2 flex flex-col justify-center gap-5">
            <Pill variant="navy">Quem sou</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {site.professional.name}
            </h2>
            <p className="text-sm font-medium uppercase tracking-wide text-pink">
              {site.professional.role} · {site.professional.register}
            </p>
            <p className="text-lg leading-relaxed text-navy-soft">
              Terapeuta Ocupacional formada há 18 anos, com experiência em
              reabilitação neurológica, cuidados domiciliares e promoção da
              funcionalidade em todas as fases da vida. Acredito em um cuidado
              humano, que enxerga a pessoa além do diagnóstico e valoriza cada
              conquista no caminho.
            </p>

            <ul className="mt-1 flex flex-col gap-4">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-pink-tint text-teal [&_svg]:size-6">
                    <item.icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-soft">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bloco 2 — Experiência e qualificações + foto */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="order-2 flex flex-col justify-center gap-5 lg:order-1">
            <div className="flex items-center gap-2.5">
              <Award className="size-6 text-pink" aria-hidden="true" />
              <Pill variant="pink">Trajetória</Pill>
            </div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Experiência e qualificações
            </h3>
            <p className="text-lg leading-relaxed text-navy-soft">
              Anos de prática clínica em reabilitação neurofuncional, do ambiente
              hospitalar ao atendimento domiciliar, com formação continuada em
              recursos terapêuticos baseados em evidências.
            </p>
            <ul className="flex flex-wrap gap-2">
              {credenciais.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-soft"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2.5rem] bg-cream-deep shadow-soft ring-8 ring-white/60 lg:aspect-auto lg:h-full lg:min-h-[26rem]">
              <Image
                src="/images/foto2.jpeg"
                alt={`${site.professional.name} em atendimento`}
                fill
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -bottom-4 -z-10 h-40 w-40 rounded-full bg-teal/20 blur-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
