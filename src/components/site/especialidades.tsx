import { Baby, Brain, Accessibility, Hand } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";

/**
 * [DEFINIR FOCO COM A PROFISSIONAL]
 * Placeholders com candidatos comuns em Terapia Ocupacional.
 * Substituir títulos, descrições e ícones pelos focos reais de atuação.
 */
const especialidades = [
  {
    icon: Baby,
    title: "Infantil / Desenvolvimento",
    text: "Apoio ao desenvolvimento infantil, TEA, atrasos no desenvolvimento e integração sensorial.",
  },
  {
    icon: Brain,
    title: "Reabilitação neurológica",
    text: "Acompanhamento de adultos em processos de reabilitação após condições neurológicas.",
  },
  {
    icon: Accessibility,
    title: "Geriatria / Terceira idade",
    text: "Promoção de autonomia, prevenção de quedas e qualidade de vida na terceira idade.",
  },
  {
    icon: Hand,
    title: "Atividades de vida diária",
    text: "Reabilitação funcional para retomar tarefas do dia a dia com mais independência.",
  },
];

export function Especialidades() {
  return (
    <section className="section-y bg-lavender/25">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <Pill variant="navy">Para quem é</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Áreas de atuação
            </h2>
            <p className="text-lg text-navy-soft">
              A terapia ocupacional acompanha pessoas em diferentes fases da
              vida. Veja alguns dos focos do atendimento.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {especialidades.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} as="article">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-pink-tint text-pink [&_svg]:size-6">
                  <item.icon aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-soft">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
