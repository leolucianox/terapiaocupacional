import { Reveal } from "./reveal";
import { Pill } from "./pill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Respostas em [PLACEHOLDER] — ajustar com as informações reais. */
const faqs = [
  {
    q: "Atende em consultório ou em casa?",
    a: "Atendo nas duas modalidades: em consultório, em um espaço preparado, e em domicílio, levando a reabilitação até você. Você escolhe a que faz mais sentido para o seu momento.",
  },
  {
    q: "Quais regiões atende para domicílio?",
    a: "[PLACEHOLDER] Atendo as regiões próximas a [LISTAR REGIÕES]. Em caso de dúvida sobre a sua localidade, é só me chamar no WhatsApp para confirmar.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "[PLACEHOLDER] Não é obrigatório encaminhamento para iniciar a avaliação em terapia ocupacional. Caso você já tenha relatórios ou laudos, eles ajudam a personalizar o plano.",
  },
  {
    q: "Como funciona a primeira avaliação?",
    a: "[PLACEHOLDER] A primeira avaliação é uma conversa cuidadosa para entender a rotina, o histórico e os objetivos. A partir dela, montamos juntos um plano terapêutico individualizado.",
  },
  {
    q: "Atende convênio ou particular?",
    a: "[PLACEHOLDER] Os atendimentos são particulares. Posso emitir recibo para reembolso junto ao seu convênio, conforme as regras do seu plano.",
  },
  {
    q: "Qual a duração das sessões?",
    a: "[PLACEHOLDER] As sessões têm duração aproximada de [DURAÇÃO]. A frequência é definida de acordo com o plano terapêutico de cada paciente.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <Pill variant="navy">Perguntas frequentes</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Tire suas dúvidas
            </h2>
            <p className="text-lg text-navy-soft">
              Reuni as perguntas mais comuns. Se a sua não estiver aqui, fale
              comigo no WhatsApp.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
