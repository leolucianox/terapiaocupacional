"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "./whatsapp-icon";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-cream/80 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="container flex h-[4.5rem] items-center justify-between"
      >
        <a
          href="#inicio"
          className="flex flex-col leading-none focus-ring rounded-lg"
        >
          <span className="font-heading text-xl font-bold text-navy">
            {site.brand}
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-pink">
            {site.tagline}
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy-soft transition-colors hover:text-pink focus-ring rounded px-1 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>

        {/* Botão hambúrguer */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-navy/5 focus-ring lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/60 bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-navy-soft hover:bg-pink-tint hover:text-pink focus-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-2 pt-2">
            <Button asChild size="lg" className="w-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <WhatsappIcon className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
