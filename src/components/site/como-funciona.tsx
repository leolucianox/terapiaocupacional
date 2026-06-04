import { MessageCircle, ClipboardList, Target, Repeat } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";

const steps = [
  {
    icon: MessageCircle,
    title: "Contato pelo WhatsApp",
    text: "Você entra em contato, conta um pouco da sua necessidade e agendamos o primeiro encontro.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação inicial",
    text: "Uma escuta atenta para entender a rotina, o histórico e os objetivos do paciente.",
  },
  {
    icon: Target,
    title: "Plano terapêutico individualizado",
    text: "Definimos juntos metas claras e um plano feito sob medida para cada pessoa.",
  },
  {
    icon: Repeat,
    title: "Sessões e acompanhamento",
    text: "Sessões regulares com reavaliações contínuas para celebrar e ajustar cada conquista.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-y">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
            <Pill variant="teal">Como funciona</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Um caminho simples e acolhedor
            </h2>
            <p className="text-lg text-navy-soft">
              O mesmo cuidado para o consultório e para o atendimento
              domiciliar, em quatro passos.
            </p>
          </div>
        </Reveal>

        <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-pink/40 to-transparent md:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} as="li">
              <div className="relative flex flex-col items-center gap-4 text-center md:items-center">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-border">
                  <step.icon
                    className="size-6 text-pink"
                    aria-hidden="true"
                  />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-soft">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
