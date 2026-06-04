import { Building2, HeartHandshake, Check } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "./whatsapp-icon";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const modalidades = [
  {
    badge: "navy" as const,
    icon: Building2,
    iconWrap: "bg-navy text-white",
    title: "Atendimento em consultório",
    text: "Um espaço preparado para promover funcionalidade, autonomia e qualidade de vida.",
    points: [
      "Ambiente acolhedor e equipado",
      "Recursos terapêuticos específicos",
      "Horários agendados com tranquilidade",
    ],
  },
  {
    badge: "pink" as const,
    icon: HeartHandshake,
    iconWrap: "bg-pink text-white",
    title: "Atendimento domiciliar",
    text: "Levo a reabilitação até você, respeitando sua rotina e suas necessidades.",
    points: [
      "Cuidado no conforto da sua casa",
      "Avaliação do contexto real do dia a dia",
      "Ideal para quem tem dificuldade de locomoção",
    ],
  },
];

export function Modalidades() {
  return (
    <section
      id="atendimentos"
      className="section-y bg-cream-deep/60"
    >
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <Pill variant="pink">Modalidades</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Duas formas de cuidar de você
            </h2>
            <p className="text-lg text-navy-soft">
              Escolha a modalidade que faz mais sentido para o seu momento — o
              cuidado é o mesmo, com toda a dedicação.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {modalidades.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1} as="article">
              <div className="group flex h-full flex-col gap-5 rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl [&_svg]:size-7",
                      m.iconWrap,
                    )}
                  >
                    <m.icon aria-hidden="true" />
                  </span>
                  <Pill variant={m.badge}>{m.title}</Pill>
                </div>

                <p className="text-lg leading-relaxed text-navy-soft">
                  {m.text}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {m.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-navy"
                    >
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappIcon className="h-4 w-4" />
                      Saber mais
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
