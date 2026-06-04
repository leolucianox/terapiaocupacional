import { Instagram, Facebook } from "lucide-react";

import { WhatsappIcon } from "./whatsapp-icon";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-cream-deep/50">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Marca */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-bold text-navy">
              {site.brand}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-pink">
              {site.tagline}
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy-soft">
            {site.professional.name} · {site.professional.role}
            <br />
            {site.professional.register}
          </p>
          <p className="text-sm italic text-navy-soft">“{site.motto}”</p>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé">
          <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-navy">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-navy-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-pink focus-ring rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato / redes */}
        <div>
          <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-navy">
            Contato
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-navy-soft">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-pink focus-ring rounded"
              >
                <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 pt-1">
              {/* [LINKS DE REDES] */}
              <a
                href={site.socials.instagram}
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-colors hover:text-pink focus-ring"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href={site.socials.facebook}
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-colors hover:text-pink focus-ring"
              >
                <Facebook className="size-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-soft sm:flex-row">
          <p>
            © {year} {site.brand} — {site.tagline}. Todos os direitos
            reservados.
          </p>
          <a
            href="#"
            className="transition-colors hover:text-pink focus-ring rounded"
          >
            {/* Política de privacidade — conformidade com a LGPD */}
            Política de Privacidade · LGPD
          </a>
        </div>
      </div>
    </footer>
  );
}
