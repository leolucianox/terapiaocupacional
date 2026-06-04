/**
 * Dados centrais da marca "Adapte-se — Terapia Ocupacional".
 * Edite aqui para atualizar a página inteira de uma só vez.
 */

export const site = {
  brand: "Adapte-se",
  tagline: "Terapia Ocupacional",
  professional: {
    name: "Dra. Franciele Maria de Lima Rios Almeida",
    role: "Terapeuta Ocupacional",
    register: "CREFITO-3/11731-TO",
  },
  city: "São José dos Campos — Vale do Paraíba/SP", // [CONFIRMAR CIDADE]
  phoneDisplay: "(12) 98803-2896",
  phoneRaw: "5512988032896",
  whatsappMessage:
    "Olá! Gostaria de agendar um atendimento de terapia ocupacional.",
  motto:
    "Vamos juntos construir mais independência e participação nas atividades do dia a dia.",
  socials: {
    instagram: "#", // [LINK INSTAGRAM]
    facebook: "#", // [LINK FACEBOOK]
  },
} as const;

/** Link de WhatsApp já com a mensagem pré-preenchida. */
export const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

/** Itens de navegação (âncoras da página única). */
export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimentos", label: "Atendimentos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;
