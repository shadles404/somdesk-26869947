export type Language = 'en' | 'so';

export const translations = {
  en: {
    // Header
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    switchTo: "Switch to Somali",
    
    // Services
    ourServices: "Our Services",
    softwareDev: "Software Development",
    softwareDesc: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
    computerRepair: "Computer Repair & Installation",
    computerDesc: "Professional computer repair and installation services with quick turnaround times.",
    printerRepair: "Printer & CCTV Camera Repair",
    printerDesc: "Expert repair services for printers and CCTV systems to keep your equipment running smoothly.",
  },
  so: {
    // Header
    home: "Guriga",
    services: "Adeegyada",
    portfolio: "Portfolio",
    contact: "Xiriir",
    switchTo: "U bedel English",
    
    // Services
    ourServices: "Adeegyadayada",
    softwareDev: "Horumarinta Software",
    softwareDesc: "Xalal software oo loo habeeyay baahiyaha ganacsigaaga oo leh tignoolajiyad casri ah.",
    computerRepair: "Hagaajinta & Rakibida Kombuyutarka",
    computerDesc: "Adeegyo xirfadeed oo ah hagaajinta iyo rakibida kombuyutarka oo leh waqti dhakhso ah.",
    printerRepair: "Hagaajinta Printer & Kaamirooyinka CCTV",
    printerDesc: "Adeegyo khibrad leh oo hagaajinta printer-rada iyo nidaamyada CCTV si qalabkaagu u shaqeeyo si sax ah.",
  }
};

export const useTranslations = (lang: Language) => {
  return translations[lang];
};