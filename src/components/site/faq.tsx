import { Reveal } from "./reveal";
import { Pill } from "./pill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Atende em consultório ou em casa?",
    a: "Sim. Os atendimentos podem ser realizados em consultório ou no domicílio, conforme a necessidade e os objetivos terapêuticos de cada paciente.",
  },
  {
    q: "Quais regiões atende para domicílio?",
    a: "Atendo Caçapava, São José dos Campos, Jacareí e cidades próximas. Entre em contato para verificar disponibilidade para sua região.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "Não necessariamente. A avaliação pode ser realizada sem encaminhamento médico. Entretanto, quando existe acompanhamento médico, os relatórios e orientações podem ser integrados ao plano terapêutico.",
  },
  {
    q: "Como funciona a primeira avaliação?",
    a: "A primeira consulta é dedicada à compreensão da história clínica, rotina, dificuldades e objetivos do paciente e da família. A partir dessa avaliação, é elaborado um plano terapêutico individualizado.",
  },
  {
    q: "Atende convênio ou particular?",
    a: "Os atendimentos são particulares. Quando necessário, forneço documentação para solicitação de reembolso junto ao convênio, conforme as regras de cada operadora.",
  },
  {
    q: "Qual a duração das sessões?",
    a: "As sessões possuem duração média de 50 a 60 minutos, podendo variar de acordo com a necessidade clínica e os objetivos terapêuticos.",
  },
  {
    q: "Qual a frequência ideal dos atendimentos?",
    a: "A frequência é definida após a avaliação inicial e varia conforme a condição clínica, os objetivos terapêuticos e a fase da reabilitação.",
  },
  {
    q: "O que a Terapia Ocupacional trata?",
    a: "A Terapia Ocupacional auxilia pessoas que apresentam dificuldades para realizar atividades do dia a dia, promovendo independência, funcionalidade, participação social e qualidade de vida.",
  },
  {
    q: "O atendimento domiciliar tem a mesma qualidade do consultório?",
    a: "Sim. O atendimento domiciliar permite trabalhar as atividades diretamente no ambiente em que o paciente vive, tornando os ganhos mais funcionais e significativos.",
  },
  {
    q: "Vocês realizam orientação para familiares e cuidadores?",
    a: "Sim. A orientação da família e dos cuidadores faz parte do processo terapêutico e contribui para melhores resultados na rotina do paciente.",
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
