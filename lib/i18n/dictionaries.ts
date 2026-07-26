import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    htmlLang: string;
  };
  appName: string;
  logoTag: string;
  nav: {
    linkFuncoes: string;
    linkContato: string;
    demoCta: string;
    localeLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    demoCta: string;
    talkCta: string;
    note: string;
    label: {
      item: string;
      invoice: string;
      material: string;
      intake: string;
      weight: string;
      caption: string;
    };
  };
  funcoes: {
    kicker: string;
    title: string;
    subtitle: string;
    card1: { title: string; body: string; count: string };
    card2: { title: string; body: string; scanLine1: string; scanLine2: string };
    card3: {
      title: string;
      body: string;
      row1: string;
      row1Value: string;
      row2: string;
      row2Value: string;
      row3: string;
      row3Value: string;
    };
    flow: { step1: string; step2: string; step3: string; step4: string; note: string };
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    responseTime: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phoneOptional: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    note: string;
  };
  footer: {
    copy: string;
    demoLink: string;
    contactLink: string;
  };
};

const ptBr: Dictionary = {
  meta: {
    title: "Pátio — Sistema de Gestão de Pátio",
    description:
      "Controle de estoque para pátios: um QR code por item, entrada com Nota Fiscal, saída com bipe e visão de estoque em tempo real.",
    htmlLang: "pt-BR",
  },
  appName: "Pátio",
  logoTag: "GESTÃO DE PÁTIO",
  nav: {
    linkFuncoes: "Como funciona",
    linkContato: "Contato",
    demoCta: "Ver Demo",
    localeLabel: "Idioma",
  },
  hero: {
    kicker: "CONTROLE DE ESTOQUE PARA PÁTIOS · UM QR CODE POR ITEM",
    title: "Saiba exatamente o que está no seu pátio. Em tempo real.",
    subtitle:
      "Cada carga entra com Nota Fiscal. Cada item recebe uma etiqueta QR impressa na hora. Cada saída é registrada com um bipe — peso e contagem sempre atualizados, sem papel, sem planilha.",
    demoCta: "Ver Demo",
    talkCta: "Falar com a gente",
    note: "Demo compartilhada · dados de exemplo · sem cadastro",
    label: {
      item: "ITEM 042/120",
      invoice: "NF 12.845-3",
      material: "SUCATA MISTA",
      intake: "ENTRADA 17/07/2026",
      weight: "38,5 kg",
      caption: "ETIQUETA 100×50 mm · IMPRESSA NA ENTRADA",
    },
  },
  funcoes: {
    kicker: "COMO FUNCIONA",
    title: "Três funções. Controle total do pátio.",
    subtitle:
      "Do caminhão que chega à visão completa do estoque — tudo amarrado pela etiqueta QR de cada item.",
    card1: {
      title: "Entrada de Carga",
      body: "Registre a carga com NF, data, peso, material e quantidade de itens. O sistema imprime uma etiqueta QR por item, direto na impressora térmica do pátio.",
      count: "×120",
    },
    card2: {
      title: "Saída com QR Code",
      body: "Na retirada, escaneie a etiqueta de cada item. O sistema registra data, motorista e placa do veículo — e atualiza peso restante e contagem na hora.",
      scanLine1: "ITEM 042 · BAIXADO",
      scanLine2: "PLACA RTX-2B47 · 22/07",
    },
    card3: {
      title: "Visão de Estoque",
      body: "Painel somente-leitura com o estoque atual por carga, materiais no pátio e o histórico completo de remoções. A verdade do pátio, em uma tela.",
      row1: "NF 12.845 · SUCATA MISTA",
      row1Value: "4.620 kg",
      row2: "NF 12.851 · COBRE",
      row2Value: "890 kg",
      row3: "NF 12.812 · ALUMÍNIO",
      row3Value: "encerrada",
    },
    flow: {
      step1: "CARGA CHEGA COM NF",
      step2: "1 ETIQUETA QR POR ITEM",
      step3: "BIPE NA SAÍDA",
      step4: "ESTOQUE ATUALIZADO",
      note: "Funciona com a impressora Elgin L42 Pro e o leitor que você já tem.",
    },
  },
  contact: {
    kicker: "CONTATO",
    title: "Fale com a gente",
    body: "Conte como é a operação do seu pátio hoje — papel, planilha, quantas cargas por semana. A gente mostra como o Pátio se encaixa e coloca você na demo.",
    responseTime: "Resposta em até 1 dia útil",
  },
  form: {
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "voce@empresa.com.br",
    phone: "Telefone",
    phoneOptional: "(opcional)",
    phonePlaceholder: "(11) 99999-0000",
    message: "Mensagem",
    messagePlaceholder: "Como funciona seu pátio hoje?",
    submit: "Enviar mensagem",
    submitting: "Enviando…",
    success: "Mensagem enviada. Obrigado!",
    error: "Não foi possível enviar. Tente de novo em instantes.",
    note: "Sua mensagem chega direto no nosso e-mail.",
  },
  footer: {
    copy: "© 2026 Pátio · Sistema de Gestão de Pátio",
    demoLink: "Demo ao vivo",
    contactLink: "Contato",
  },
};

const en: Dictionary = {
  meta: {
    title: "YMS — Yard Management System",
    description:
      "Inventory control for yards: one QR code per item, invoice-based intake, scan-out checkout, and real-time stock visibility.",
    htmlLang: "en",
  },
  appName: "YMS",
  logoTag: "YARD MANAGEMENT",
  nav: {
    linkFuncoes: "How it works",
    linkContato: "Contact",
    demoCta: "View Demo",
    localeLabel: "Language",
  },
  hero: {
    kicker: "YARD INVENTORY CONTROL · ONE QR CODE PER ITEM",
    title: "Know exactly what's in your yard. In real time.",
    subtitle:
      "Every load comes in with an invoice. Every item gets a QR label printed on the spot. Every checkout is logged with a scan — weight and count always up to date, no paper, no spreadsheets.",
    demoCta: "View Demo",
    talkCta: "Talk to us",
    note: "Shared demo · sample data · no signup",
    label: {
      item: "ITEM 042/120",
      invoice: "INV 12,845-3",
      material: "MIXED SCRAP",
      intake: "INTAKE 07/17/2026",
      weight: "38.5 kg",
      caption: "100×50 mm LABEL · PRINTED ON INTAKE",
    },
  },
  funcoes: {
    kicker: "HOW IT WORKS",
    title: "Three functions. Full yard control.",
    subtitle:
      "From the truck that arrives to the complete stock view — all tied together by the QR label on every item.",
    card1: {
      title: "Load Intake",
      body: "Log the load with its invoice, date, weight, material, and item count. The system prints one QR label per item, straight from the yard's thermal printer.",
      count: "×120",
    },
    card2: {
      title: "QR Code Checkout",
      body: "On pickup, scan each item's label. The system logs the date, driver, and vehicle plate — and updates remaining weight and count instantly.",
      scanLine1: "ITEM 042 · REMOVED",
      scanLine2: "PLATE RTX-2B47 · 07/22",
    },
    card3: {
      title: "Inventory View",
      body: "A read-only dashboard with current stock by load, materials on hand, and the full removal history. The single source of truth for your yard.",
      row1: "INV 12,845 · MIXED SCRAP",
      row1Value: "4,620 kg",
      row2: "INV 12,851 · COPPER",
      row2Value: "890 kg",
      row3: "INV 12,812 · ALUMINUM",
      row3Value: "closed",
    },
    flow: {
      step1: "LOAD ARRIVES WITH INVOICE",
      step2: "1 QR LABEL PER ITEM",
      step3: "SCAN ON CHECKOUT",
      step4: "STOCK UPDATED",
      note: "Works with the Elgin L42 Pro printer and the scanner you already have.",
    },
  },
  contact: {
    kicker: "CONTACT",
    title: "Talk to us",
    body: "Tell us how your yard runs today — paper, spreadsheets, how many loads a week. We'll show you how YMS fits in and get you into the demo.",
    responseTime: "Response within 1 business day",
  },
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    phone: "Phone",
    phoneOptional: "(optional)",
    phonePlaceholder: "(555) 123-4567",
    message: "Message",
    messagePlaceholder: "How does your yard work today?",
    submit: "Send message",
    submitting: "Sending…",
    success: "Message sent. Thank you!",
    error: "Couldn't send it. Please try again in a moment.",
    note: "Your message goes straight to our inbox.",
  },
  footer: {
    copy: "© 2026 YMS · Yard Management System",
    demoLink: "Live demo",
    contactLink: "Contact",
  },
};

const dictionaries: Record<Locale, Dictionary> = { "pt-br": ptBr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
