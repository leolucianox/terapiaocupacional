import { Quote, Star } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";

/**
 * [PLACEHOLDER] Depoimentos reais. Respeitar sigilo:
 * usar nomes anônimos (ex.: "Mãe de paciente") ou com consentimento.
 */
const depoimentos = [
  {
    quote:
      "Depoimento de paciente ou familiar a ser inserido com consentimento. Conte aqui a transformação percebida no cuidado.",
    author: "Familiar de paciente",
    detail: "[DEPOIMENTO]",
  },
  {
    quote:
      "Espaço para um relato breve e sincero sobre a experiência com o atendimento — em consultório ou domiciliar.",
    author: "Paciente",
    detail: "[DEPOIMENTO]",
  },
  {
    quote:
      "Mais um depoimento opcional. Pode destacar acolhimento, evolução e a relação de confiança construída.",
    author: "Responsável",
    detail: "[DEPOIMENTO]",
  },
];

export function Depoimentos() {
  return (
    <section className="section-y bg-cream-deep/60">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <Pill variant="pink">Depoimentos</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Histórias de cuidado
            </h2>
            <p className="text-lg text-navy-soft">
              O que pacientes e familiares dizem sobre a experiência do
              atendimento.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={i} delay={i * 0.1} as="article">
              <figure className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-7 shadow-soft">
                <Quote
                  className="size-8 text-pink/40"
                  aria-hidden="true"
                />
                <blockquote className="flex-1 text-navy-soft leading-relaxed">
                  “{d.quote}”
                </blockquote>
                <div
                  className="flex gap-0.5 text-brandyellow"
                  aria-label="Avaliação 5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <figcaption className="font-heading text-sm font-semibold text-navy">
                  {d.author}
                  <span className="ml-1 font-sans text-xs font-normal text-navy-soft">
                    {d.detail}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
