import { WhatsappIcon } from "./whatsapp-icon";
import { whatsappUrl, site } from "@/lib/site";

/** Botão flutuante fixo, presente em toda a página. */
export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com ${site.brand} no WhatsApp`}
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg animate-pulse-soft transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <WhatsappIcon className="h-7 w-7 md:h-8 md:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-sm font-medium text-white shadow-soft md:group-hover:block">
        Agende pelo WhatsApp
      </span>
    </a>
  );
}
