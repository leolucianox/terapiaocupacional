# Adapte-se — Terapia Ocupacional · Landing Page

Landing page de página única para a marca **Adapte-se**, da **Dra. Franciele Maria de Lima Rios Almeida** (Terapeuta Ocupacional, CREFITO-3/11731-TO).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (tokens da marca em `tailwind.config.ts` / `src/app/globals.css`)
- **shadcn/ui** já inicializado (`components.json`) — para adicionar componentes: `npx shadcn add <componente>`
- **Framer Motion** (animações sutis de scroll em `src/components/site/reveal.tsx`)
- **lucide-react** (ícones de linha)
- Fontes via `next/font`: **Poppins** (títulos), **Inter** (corpo), **Caveat** (acento manuscrito)

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Estrutura

```
src/
  app/
    layout.tsx        # fontes, metadata/SEO, skip-link
    page.tsx          # composição das seções
    globals.css       # tokens de cor (HSL) + utilitários
  lib/
    site.ts           # ⭐ dados centrais da marca (editar aqui)
    utils.ts
  components/
    ui/               # button, accordion (base shadcn)
    site/             # uma seção por arquivo (navbar, hero, about, ...)
```

## ✅ Conteúdo real já preenchido

Nome, registro (CREFITO-3/11731-TO), telefone/WhatsApp, mensagem pré-pronta,
textos da marca, modalidades (consultório/domiciliar) e o mote.

## ⬜ Campos a preencher (placeholders)

Edite os arquivos indicados — todos os pontos estão marcados com `[ ]` no código.

| Campo | Onde editar |
|---|---|
| **Foto profissional** | substituir `public/images/franciele.jpg` |
| **Cidade (confirmar)** | `src/lib/site.ts` → `city` |
| **Formação / Abordagem** | `src/components/site/about.tsx` → `highlights` |
| **Foco / Especialidades** | `src/components/site/especialidades.tsx` |
| **Endereço do consultório** | `src/components/site/localizacao.tsx` |
| **Regiões do atend. domiciliar** | `src/components/site/localizacao.tsx` → `regioesDomiciliar` |
| **Horários** | `localizacao.tsx` e `cta-final.tsx` ([HORÁRIOS]) |
| **Depoimentos** | `src/components/site/depoimentos.tsx` |
| **Perguntas/respostas do FAQ** | `src/components/site/faq.tsx` |
| **Links de redes sociais** | `src/lib/site.ts` → `socials` |
| **Política de privacidade (LGPD)** | link no `src/components/site/footer.tsx` |

## Acessibilidade

HTML semântico, skip-link, foco visível (`.focus-ring`), contraste WCAG AA,
`alt` nas imagens, ARIA no menu/accordion e respeito a `prefers-reduced-motion`.
