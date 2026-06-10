import { Building2, MapPinned, CalendarCheck } from "lucide-react";

import { Reveal } from "./reveal";
import { Pill } from "./pill";
import { site } from "@/lib/site";

/** Cidades cobertas para atendimento domiciliar (+ regiões sob consulta). */
const regioesDomiciliar = [...site.homeCareCities, "Regiões próximas (sob consulta)"];

export function Localizacao() {
  return (
    <section className="section-y">
      <div className="container">
        <Reveal>
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <Pill variant="teal">Onde atendo</Pill>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Atendimento e localização
            </h2>
            <p className="text-lg text-navy-soft">
              Atendimento em consultório em São José dos Campos e domiciliar em
              Caçapava, São José dos Campos e Jacareí. Consulte disponibilidade
              pelo WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Consultório */}
          <Reveal as="article">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white [&_svg]:size-6">
                  <Building2 aria-hidden="true" />
                </span>
                <Pill variant="navy">Consultório</Pill>
              </div>
              <p className="text-lg leading-relaxed text-navy-soft">
                {site.office.name}
                <br />
                {site.office.street} — {site.office.district}
                <br />
                {site.office.cityState}
              </p>
              <div className="mt-2 flex items-start gap-2.5 rounded-2xl bg-cream p-4 text-sm text-navy-soft">
                <CalendarCheck
                  className="mt-0.5 size-5 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span>
                  Atendimento mediante agendamento — fale comigo pelo WhatsApp
                  para verificar a disponibilidade.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Domiciliar */}
          <Reveal as="article" delay={0.1}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-pink/20 bg-pink-tint/40 p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-pink text-white [&_svg]:size-6">
                  <MapPinned aria-hidden="true" />
                </span>
                <Pill variant="pink">Domiciliar</Pill>
              </div>
              <p className="text-lg text-navy-soft">
                Regiões atendidas no conforto da sua casa:
              </p>
              <ul className="flex flex-wrap gap-2">
                {regioesDomiciliar.map((r) => (
                  <li
                    key={r}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-soft"
                  >
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-sm text-navy-soft">
                Não encontrou sua região? Fale comigo no WhatsApp para
                confirmar a disponibilidade.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
