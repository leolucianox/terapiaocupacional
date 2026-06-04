# CLAUDE.md

Orientações para o Claude Code ao trabalhar neste repositório.

## O que é

Landing page de página única (one-page) para a marca **Adapte-se**, da terapeuta
ocupacional **Dra. Franciele Maria de Lima Rios Almeida** (CREFITO-3/11731-TO).
Site institucional/marketing com CTA principal de agendamento via WhatsApp. Sem
backend, banco de dados ou autenticação — é puramente estático/SSR de conteúdo.

## Stack

- **Next.js 15.1.6** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3.4** — tokens da marca em `tailwind.config.ts` e `src/app/globals.css` (HSL)
- **shadcn/ui** inicializado (`components.json`) — adicionar componentes com `npx shadcn add <componente>`
- **Framer Motion** — animações sutis de scroll (`src/components/site/reveal.tsx`)
- **lucide-react** — ícones de linha
- Fontes via `next/font` (Google): **Poppins** (títulos), **Inter** (corpo), **Caveat** (acento manuscrito)

## Comandos

```bash
npm run dev      # servidor de desenvolvimento → http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build de produção
npm run lint     # ESLint (eslint-config-next)
```

Não há suíte de testes neste projeto.

## Estrutura

```
src/
  app/
    layout.tsx        # fontes, metadata/SEO (OpenGraph/Twitter), skip-link de acessibilidade
    page.tsx          # composição/ordem das seções da página
    globals.css       # tokens de cor (HSL) + utilitários
  lib/
    site.ts           # ⭐ dados centrais da marca — editar aqui muda a página toda
    utils.ts          # helper cn() (clsx + tailwind-merge)
  components/
    ui/               # base shadcn (button, accordion)
    site/             # uma seção por arquivo (navbar, hero, about, ...)
public/
  images/             # foto profissional (franciele.jpg) e demais assets
```

A página (`page.tsx`) monta as seções nesta ordem: Navbar → Hero → About →
Modalidades → ComoFunciona → Especialidades → Localizacao → Depoimentos → (Wave) →
Faq → CtaFinal → Footer, com WhatsappFloat fixo.

## Convenções

- **Componentes de seção** ficam em `src/components/site/`, um arquivo por seção,
  exportados como **named export** (`export function Hero()`), não default.
- **Alias de import:** `@/` mapeia para `src/` (ver `tsconfig.json`).
- **Dados antes de markup:** nome, telefone, links sociais, mote e links de
  navegação vivem em `src/lib/site.ts`. O link do WhatsApp já vem pronto em
  `whatsappUrl` (com mensagem pré-preenchida). Prefira editar `site.ts` a
  hard-codear esses valores nas seções.
- **Estilo:** Tailwind com tokens da marca (ex.: `bg-navy`, `text-cream-deep`).
  Use o helper `cn()` de `src/lib/utils.ts` para compor classes condicionais.
- **Conteúdo em pt-BR.** Textos, comentários e copy são em português.

## Acessibilidade (manter ao editar)

HTML semântico, skip-link, foco visível (`.focus-ring`), contraste WCAG AA,
`alt` em todas as imagens, ARIA no menu/accordion e respeito a
`prefers-reduced-motion` nas animações.

## Campos com placeholders pendentes

Pontos marcados com `[ ]` / `[CONFIRMAR ...]` no código aguardam conteúdo real:
- Foto profissional → `public/images/franciele.jpg`
- Cidade (confirmar) → `src/lib/site.ts` (`city`)
- Links de redes sociais → `src/lib/site.ts` (`socials`)
- Formação/abordagem → `src/components/site/about.tsx`
- Especialidades → `src/components/site/especialidades.tsx`
- Endereço, regiões de atendimento domiciliar e horários → `src/components/site/localizacao.tsx`, `cta-final.tsx`
- Depoimentos → `src/components/site/depoimentos.tsx`
- Perguntas do FAQ → `src/components/site/faq.tsx`
- Política de privacidade (LGPD) → link no `src/components/site/footer.tsx`
