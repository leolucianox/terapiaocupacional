import { Baby, Brain, Hand, Home } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";

/** Áreas de atuação (conforme material da profissional). */
const especialidades = [
  {
    icon: Brain,
    title: "Neurologia adulta",
    items: [
      "AVC, Parkinson e TCE",
      "Lesões neurológicas diversas",
      "Demências e perda funcional",
      "Cuidados paliativos",
      "Prevenção de quedas e envelhecimento saudável",
    ],
  },
  {
    icon: Baby,
    title: "Reabilitação infantil",
    items: [
      "Atraso do desenvolvimento",
      "Dificuldades motoras",
      "Treino de independência nas atividades diárias",
      "Adaptações para o brincar",
    ],
  },
  {
    icon: Hand,
    title: "Tecnologia assistiva e órteses",
    items: [
      "Adaptações para autonomia e segurança",
      "Confecção de órteses para o membro superior",
      "Atendimento adulto e infantil",
    ],
  },
  {
    icon: Home,
    title: "Atendimento domiciliar",
    items: [
      "Pacientes com mobilidade reduzida",
      "Reabilitação pós-alta hospitalar",
      "Treino funcional no ambiente real de vida",
    ],
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
              vida. Veja os principais focos do atendimento.
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
                <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-navy-soft">
                  {item.items.map((sub) => (
                    <li key={sub} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-pink/60"
                      />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
