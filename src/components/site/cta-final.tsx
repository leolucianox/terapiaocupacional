import { Clock, Phone } from "lucide-react";

import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "./whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site";

export function CtaFinal() {
  return (
    <section id="contato" className="section-y">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-center shadow-soft-lg sm:px-12 md:py-20">
            {/* Detalhes orgânicos decorativos */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-pink/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-script text-4xl text-pink-tint sm:text-5xl">
                Vamos juntos
              </h2>
              <p className="font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {site.motto}
              </p>

              <Button asChild size="lg" className="mt-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </Button>

              <div className="mt-4 flex flex-col items-center gap-3 text-cream/90 sm:flex-row sm:gap-8">
                <span className="flex items-center gap-2 text-sm">
                  <Phone className="size-4 text-teal" aria-hidden="true" />
                  {site.phoneDisplay}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <Clock className="size-4 text-teal" aria-hidden="true" />
                  {/* [HORÁRIOS] */}
                  Atendimento: [HORÁRIOS]
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
