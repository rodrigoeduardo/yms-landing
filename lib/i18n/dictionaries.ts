import type { Locale } from "./config";

type LabelText = {
  item: string;
  invoice: string;
  material: string;
  intake: string;
  weight: string;
};

type StockRow = { invoice: string; material: string; items: string; value: string };

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    htmlLang: string;
  };
  appName: string;
  nav: {
    linkFuncoes: string;
    linkContato: string;
    demoCta: string;
    localeLabel: string;
  };
  hero: {
    title: string;
    titleAccent: string;
    subtitle: string;
    demoCta: string;
    talkCta: string;
    note: string;
  };
  // Sample data shown in the animated app window. Every value here is
  // demonstration data, labeled as such on the page (demo.sample).
  demo: {
    windowTitle: string;
    sample: string;
    tabsLabel: string;
    pause: string;
    play: string;
    tabs: { intake: string; labels: string; checkout: string; stock: string };
    captions: { intake: string; labels: string; checkout: string; stock: string };
    intake: {
      invoiceLabel: string;
      materialLabel: string;
      weightLabel: string;
      itemsLabel: string;
      dateLabel: string;
      items: string;
      submit: string;
    };
    labels: { printing: string; printer: string };
    checkout: {
      removed: string;
      plateLabel: string;
      plate: string;
      dateLabel: string;
      date: string;
    };
    stock: {
      loadCol: string;
      itemsCol: string;
      weightCol: string;
      historyTitle: string;
      historyRow: string;
    };
    // Numbers that tick during the stock step; formatted with meta.htmlLang.
    numbers: { startKg: number; itemKg: number; startItems: number };
    label: LabelText;
  };
  funcoes: {
    title: string;
    subtitle: string;
    step1: { title: string; body: string; count: string };
    step2: { title: string; body: string; scanLine1: string; scanLine2: string };
    step3: { title: string; body: string; rows: [StockRow, StockRow, StockRow]; closed: string };
  };
  hardware: {
    title: string;
    body: string;
    flow: [string, string, string, string];
  };
  contact: {
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
  nav: {
    linkFuncoes: "Como funciona",
    linkContato: "Contato",
    demoCta: "Ver demo",
    localeLabel: "Idioma",
  },
  hero: {
    title: "Saiba exatamente o que está no seu",
    titleAccent: "pátio.",
    subtitle:
      "Cada carga entra com Nota Fiscal. Cada item recebe uma etiqueta QR impressa na hora. Cada saída é um bipe. Peso e contagem sempre certos, sem papel e sem planilha.",
    demoCta: "Ver demo",
    talkCta: "Falar com a gente",
    note: "Demo compartilhada · dados de exemplo · sem cadastro",
  },
  demo: {
    windowTitle: "Pátio · Estoque",
    sample: "Dados de exemplo",
    tabsLabel: "Etapas do sistema",
    pause: "Pausar animação",
    play: "Retomar animação",
    tabs: { intake: "Entrada", labels: "Etiquetas", checkout: "Saída", stock: "Estoque" },
    captions: {
      intake: "A carga chega com a NF: material, peso e quantidade de itens.",
      labels: "O sistema imprime uma etiqueta QR por item na térmica do pátio.",
      checkout: "Na retirada, um bipe por item registra data, placa e motorista.",
      stock: "O estoque desconta peso e contagem na hora. Tudo fica no histórico.",
    },
    intake: {
      invoiceLabel: "Nota Fiscal",
      materialLabel: "Material",
      weightLabel: "Peso total",
      itemsLabel: "Itens",
      dateLabel: "Entrada",
      items: "120",
      submit: "Registrar carga",
    },
    labels: { printing: "Imprimindo", printer: "Elgin L42 Pro" },
    checkout: {
      removed: "ITEM 042 · BAIXADO",
      plateLabel: "Placa",
      plate: "RTX-2B47",
      dateLabel: "Data",
      date: "22/07/2026",
    },
    stock: {
      loadCol: "Carga",
      itemsCol: "Itens",
      weightCol: "Restante",
      historyTitle: "Última saída",
      historyRow: "Item 042 · RTX-2B47 · 22/07 · −38,5\u00a0kg",
    },
    numbers: { startKg: 4620, itemKg: 38.5, startItems: 120 },
    label: {
      item: "ITEM 042/120",
      invoice: "NF 12.845-3",
      material: "SUCATA MISTA",
      intake: "ENTRADA 17/07/2026",
      weight: "38,5 kg",
    },
  },
  funcoes: {
    title: "Três funções. Controle total do pátio.",
    subtitle:
      "Do caminhão que chega à visão completa do estoque, tudo amarrado pela etiqueta QR de cada item.",
    step1: {
      title: "Entrada de carga",
      body: "Registre a carga com NF, data, peso, material e quantidade de itens. O sistema imprime uma etiqueta QR por item, direto na impressora térmica do pátio.",
      count: "×120",
    },
    step2: {
      title: "Saída com QR code",
      body: "Na retirada, escaneie a etiqueta de cada item. O sistema registra data, motorista e placa do veículo, e atualiza peso restante e contagem na hora.",
      scanLine1: "ITEM 042 · BAIXADO",
      scanLine2: "PLACA RTX-2B47 · 22/07",
    },
    step3: {
      title: "Visão de estoque",
      body: "Painel somente-leitura com o estoque atual por carga, materiais no pátio e o histórico completo de remoções. A verdade do pátio, em uma tela.",
      rows: [
        { invoice: "NF 12.845", material: "Sucata mista", items: "120", value: "4.620 kg" },
        { invoice: "NF 12.851", material: "Cobre", items: "18", value: "890 kg" },
        { invoice: "NF 12.812", material: "Alumínio", items: "0", value: "0 kg" },
      ],
      closed: "encerrada",
    },
  },
  hardware: {
    title: "Funciona com o que você já tem.",
    body: "A etiqueta sai da impressora Elgin L42 Pro e o bipe vem do leitor que você já usa.",
    flow: ["Carga chega com NF", "1 etiqueta QR por item", "Bipe na saída", "Estoque atualizado"],
  },
  contact: {
    title: "Fale com a gente",
    body: "Conte como é a operação do seu pátio hoje: papel, planilha, quantas cargas por semana. A gente mostra como o Pátio se encaixa e coloca você na demo.",
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
  nav: {
    linkFuncoes: "How it works",
    linkContato: "Contact",
    demoCta: "View demo",
    localeLabel: "Language",
  },
  hero: {
    title: "Know exactly what's in your",
    titleAccent: "yard.",
    subtitle:
      "Every load comes in with an invoice. Every item gets a QR label printed on the spot. Every checkout is a scan. Weight and count always right, no paper, no spreadsheets.",
    demoCta: "View demo",
    talkCta: "Talk to us",
    note: "Shared demo · sample data · no signup",
  },
  demo: {
    windowTitle: "YMS · Inventory",
    sample: "Sample data",
    tabsLabel: "System steps",
    pause: "Pause animation",
    play: "Resume animation",
    tabs: { intake: "Intake", labels: "Labels", checkout: "Checkout", stock: "Stock" },
    captions: {
      intake: "The load arrives with its invoice: material, weight, and item count.",
      labels: "The system prints one QR label per item on the yard's thermal printer.",
      checkout: "On pickup, one scan per item logs the date, plate, and driver.",
      stock: "Stock deducts weight and count instantly. Everything stays in the history.",
    },
    intake: {
      invoiceLabel: "Invoice",
      materialLabel: "Material",
      weightLabel: "Total weight",
      itemsLabel: "Items",
      dateLabel: "Intake",
      items: "120",
      submit: "Log load",
    },
    labels: { printing: "Printing", printer: "Elgin L42 Pro" },
    checkout: {
      removed: "ITEM 042 · REMOVED",
      plateLabel: "Plate",
      plate: "RTX-2B47",
      dateLabel: "Date",
      date: "07/22/2026",
    },
    stock: {
      loadCol: "Load",
      itemsCol: "Items",
      weightCol: "Remaining",
      historyTitle: "Last checkout",
      historyRow: "Item 042 · RTX-2B47 · 07/22 · −38.5\u00a0kg",
    },
    numbers: { startKg: 4620, itemKg: 38.5, startItems: 120 },
    label: {
      item: "ITEM 042/120",
      invoice: "INV 12,845-3",
      material: "MIXED SCRAP",
      intake: "INTAKE 07/17/2026",
      weight: "38.5 kg",
    },
  },
  funcoes: {
    title: "Three functions. Full yard control.",
    subtitle:
      "From the truck that arrives to the complete stock view, all tied together by the QR label on every item.",
    step1: {
      title: "Load intake",
      body: "Log the load with its invoice, date, weight, material, and item count. The system prints one QR label per item, straight from the yard's thermal printer.",
      count: "×120",
    },
    step2: {
      title: "QR code checkout",
      body: "On pickup, scan each item's label. The system logs the date, driver, and vehicle plate, and updates remaining weight and count instantly.",
      scanLine1: "ITEM 042 · REMOVED",
      scanLine2: "PLATE RTX-2B47 · 07/22",
    },
    step3: {
      title: "Inventory view",
      body: "A read-only dashboard with current stock by load, materials on hand, and the full removal history. The single source of truth for your yard.",
      rows: [
        { invoice: "INV 12,845", material: "Mixed scrap", items: "120", value: "4,620 kg" },
        { invoice: "INV 12,851", material: "Copper", items: "18", value: "890 kg" },
        { invoice: "INV 12,812", material: "Aluminum", items: "0", value: "0 kg" },
      ],
      closed: "closed",
    },
  },
  hardware: {
    title: "Works with what you already have.",
    body: "Labels come out of the Elgin L42 Pro printer, and the scan comes from the reader you already use.",
    flow: ["Load arrives with invoice", "1 QR label per item", "Scan on checkout", "Stock updated"],
  },
  contact: {
    title: "Talk to us",
    body: "Tell us how your yard runs today: paper, spreadsheets, how many loads a week. We'll show you how YMS fits in and get you into the demo.",
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
