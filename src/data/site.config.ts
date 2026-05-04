// ============================================================
// SITE CONFIGURATION — Ostéo Beausoleil
// ============================================================

const siteConfig = {
  // --- Identity ---
  name: "Ostéo Beausoleil",
  tagline: "Ostéopathie DO — Aix-en-Provence",
  description: "Ostéo Beausoleil — Cabinet d'ostéopathie à Aix-en-Provence. Consultations adultes, enfants, nourrissons, femmes enceintes. Praticienne diplômée DO. Prise de RDV en ligne.",
  keywords: "ostéopathe Aix-en-Provence, ostéopathie Aix, ostéopathe DO Aix, ostéopathe nourrisson Aix-en-Provence, ostéopathe femme enceinte Aix, cabinet ostéopathie 13100",

  // --- SEO ---
  lang: "fr",
  ogLocale: "fr_FR",
  metaImage: "/og-meta-img.svg",

  // --- Contact ---
  email: "contact@osteo-beausoleil.fr",
  phone: "04 42 67 31 85",
  address: "24 Avenue des Belges, 13100 Aix-en-Provence",

  // --- Social links ---
  social: {
    linkedin: "https://www.linkedin.com/in/osteo-beausoleil",
    instagram: "https://www.instagram.com/osteo_beausoleil",
    twitter: "",
    github: "",
    youtube: "",
  },

  // --- Navigation links ---
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "L'ostéopathie", href: "/#osteopathie" },
    { label: "Consultations", href: "/#consultations" },
    { label: "À propos", href: "/#apropos" },
    { label: "Rendez-vous", href: "/#contact" },
  ],

  // --- Schema.org structured data ---
  schemaType: "MedicalBusiness",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-19:00, Sa 09:00-13:00",

  // --- Theme ---
  themeColorLight: "#faf9f7",
  themeColorDark: "#1a3220",
};

export default siteConfig;
