import Image from "next/image";
import { HeartHandshake, MapPin, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { Pill } from "./pill";
import { WhatsappIcon } from "./whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Manchas orgânicas decorativas de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-tint/60 blur-3xl" />
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <Pill variant="pink" icon={<HeartHandshake />}>
              {site.tagline}
            </Pill>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[3.4rem]">
              Terapia ocupacional com dedicação, cuidado e{" "}
              <span className="relative whitespace-nowrap font-script text-5xl font-bold text-pink sm:text-6xl lg:text-7xl">
                propósito
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-navy-soft">
              Acolho cada paciente respeitando sua rotina e suas necessidades —
              em consultório ou na sua casa. Vamos juntos construir mais
              autonomia no dia a dia.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#atendimentos">Conhecer os atendimentos</a>
              </Button>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm font-medium text-navy-soft">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-teal" aria-hidden="true" />
                Atendimento em consultório
              </li>
              <li className="flex items-center gap-2">
                <Home className="size-4 text-pink" aria-hidden="true" />
                Atendimento domiciliar
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Forma orgânica recortando a foto, ecoando o material da marca */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[42%_58%_58%_42%/45%_45%_55%_55%] bg-cream-deep shadow-soft-lg ring-8 ring-white/70">
              <Image
                src="/images/foto5.jpeg"
                alt={`${site.professional.name}, ${site.professional.role}`}
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 90vw"
                className="object-cover"
              />
            </div>

            {/* Cartão flutuante com o registro profissional */}
            <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white/90 p-4 text-center shadow-soft backdrop-blur-sm sm:-bottom-6 sm:left-6 sm:w-auto sm:translate-x-0 sm:text-left">
              <p className="font-heading text-sm font-semibold text-navy">
                {site.professional.name}
              </p>
              <p className="text-xs text-navy-soft">
                {site.professional.role} · {site.professional.register}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
