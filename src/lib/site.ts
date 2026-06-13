/**
 * Dados centrais da marca "Adapte-se — Terapia Ocupacional".
 * Edite aqui para atualizar a página inteira de uma só vez.
 */

export const site = {
  brand: "Adapte-se",
  tagline: "Terapia Ocupacional",
  /** URL canônica de produção (sem barra final). */
  url: "https://adapteseterapiaocupacional.com.br",
  professional: {
    name: "Dra. Franciele Maria de Lima Rios Almeida",
    role: "Terapeuta Ocupacional",
    register: "CREFITO-3/11731-TO",
  },
  city: "São José dos Campos — Vale do Paraíba/SP",
  phoneDisplay: "(12) 98803-2896",
  phoneRaw: "5512988032896",
  email: "adapteseterapiaocupacional@gmail.com",
  whatsappMessage:
    "Olá! Gostaria de agendar um atendimento de terapia ocupacional.",
  motto:
    "Vamos juntos construir mais independência e participação nas atividades do dia a dia.",
  /** Consultório (atendimento presencial). */
  office: {
    name: "Edifício Costa Norte",
    street: "R. Carlos Maria Auricchio, 70",
    district: "Royal Park",
    cityState: "São José dos Campos/SP",
  },
  /** Cidades cobertas no atendimento domiciliar. */
  homeCareCities: ["Caçapava", "São José dos Campos", "Jacareí"],
  socials: {
    instagram: "https://www.instagram.com/adapteseterapiaocupacional/",
  },
} as const;

/** Link de e-mail pronto para uso em `mailto:`. */
export const emailUrl = `mailto:${site.email}`;

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
