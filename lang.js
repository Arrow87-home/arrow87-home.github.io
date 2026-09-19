const translations = {
  en: {
    title: "Arrow87 Home — Homey community apps",
    metaDescription: "Independent Homey community apps and smart home tools by Arrow87 Home.",
    ogDescription: "Independent Homey community apps and smart home tools.",
    navLabel: "Primary navigation",
    languageLabel: "Language",
    navApps: "Apps",
    navAbout: "About",
    heroEyebrow: "Independent Homey community development",
    heroTitle: "Practical tools for a more reliable smart home.",
    heroCopy: "Homey apps and smart home tools built around real-world reliability, monitoring and automation.",
    viewApps: "View apps",
    viewGitHub: "View on GitHub",
    appsEyebrow: "Apps",
    appsTitle: "Homey projects",
    watchdogTagline: "Know when your Homey data stops arriving.",
    watchdogDescription: "Monitor proven data delivery and device activity, detect stale sources, and use Homey Flows to react when devices or integrations stop updating.",
    watchdogHighlightsLabel: "Data Watchdog highlights",
    featureLocal: "Local-first",
    featureFlow: "Flow integration",
    featureCommunity: "Community app",
    communitySupport: "Community & support",
    futureTitle: "More projects may follow",
    futureCopy: "Arrow87 Home is a home for practical tools that grow out of real smart-home problems.",
    aboutEyebrow: "About",
    aboutTitle: "Built from a real smart home.",
    aboutCopy: "Arrow87 Home is an independent community-development project focused on Homey and practical home automation. The goal is simple: build tools that solve real problems clearly, reliably and without unnecessary complexity.",
    principleReliableTitle: "Reliable",
    principleReliableCopy: "Designed around predictable behaviour and clear failure states.",
    principleLocalTitle: "Local where possible",
    principleLocalCopy: "Keep core smart-home behaviour close to home.",
    principlePrivacyTitle: "Privacy-conscious",
    principlePrivacyCopy: "Collect only what a feature actually needs.",
    principleTransparentTitle: "Transparent",
    principleTransparentCopy: "Document behaviour, limits and source code where appropriate.",
    supportEyebrow: "Support",
    supportTitle: "Support Arrow87 Home.",
    supportCopy: "If these apps are useful to you and you would like to support continued development, a small donation is always appreciated.",
    supportButton: "Donate via PayPal",
    footerTagline: "Independent Homey community development",
    footerCommunity: "Community",
    footerDonate: "Donate",
    legal: "Homey is a trademark of Athom B.V. Arrow87 Home is an independent community developer and is not affiliated with Athom B.V."
  },
  nl: {
    title: "Arrow87 Home — Homey community-apps",
    metaDescription: "Onafhankelijke Homey community-apps en smarthome-tools van Arrow87 Home.",
    ogDescription: "Onafhankelijke Homey community-apps en smarthome-tools.",
    navLabel: "Hoofdnavigatie",
    languageLabel: "Taal",
    navApps: "Apps",
    navAbout: "Over",
    heroEyebrow: "Onafhankelijke Homey community-ontwikkeling",
    heroTitle: "Praktische tools voor een betrouwbaarder slim huis.",
    heroCopy: "Homey-apps en smarthome-tools, gebouwd rond betrouwbaarheid, monitoring en automatisering in de praktijk.",
    viewApps: "Bekijk apps",
    viewGitHub: "Bekijk op GitHub",
    appsEyebrow: "Apps",
    appsTitle: "Homey-projecten",
    watchdogTagline: "Weet wanneer je Homey-data niet meer binnenkomt.",
    watchdogDescription: "Bewaak aantoonbare datalevering en apparaatactiviteit, detecteer bronnen die niet meer verversen en gebruik Homey Flows om te reageren wanneer apparaten of integraties stoppen met updaten.",
    watchdogHighlightsLabel: "Hoogtepunten van Data Watchdog",
    featureLocal: "Lokaal eerst",
    featureFlow: "Flow-integratie",
    featureCommunity: "Community-app",
    communitySupport: "Community & support",
    futureTitle: "Meer projecten kunnen volgen",
    futureCopy: "Arrow87 Home is de thuisbasis voor praktische tools die ontstaan uit echte smarthome-problemen.",
    aboutEyebrow: "Over",
    aboutTitle: "Gebouwd vanuit een echt slim huis.",
    aboutCopy: "Arrow87 Home is een onafhankelijk communityproject gericht op Homey en praktische woningautomatisering. Het doel is eenvoudig: tools bouwen die echte problemen helder, betrouwbaar en zonder onnodige complexiteit oplossen.",
    principleReliableTitle: "Betrouwbaar",
    principleReliableCopy: "Ontworpen rond voorspelbaar gedrag en duidelijke fouttoestanden.",
    principleLocalTitle: "Lokaal waar mogelijk",
    principleLocalCopy: "Houd essentiële smarthome-logica zo dicht mogelijk bij huis.",
    principlePrivacyTitle: "Privacybewust",
    principlePrivacyCopy: "Verzamel alleen wat een functie daadwerkelijk nodig heeft.",
    principleTransparentTitle: "Transparant",
    principleTransparentCopy: "Documenteer gedrag, beperkingen en broncode waar dat passend is.",
    supportEyebrow: "Steun",
    supportTitle: "Steun Arrow87 Home.",
    supportCopy: "Zijn deze apps nuttig voor je en wil je de verdere ontwikkeling ondersteunen, dan wordt een kleine donatie altijd gewaardeerd.",
    supportButton: "Doneer via PayPal",
    footerTagline: "Onafhankelijke Homey community-ontwikkeling",
    footerCommunity: "Community",
    footerDonate: "Doneren",
    legal: "Homey is een handelsmerk van Athom B.V. Arrow87 Home is een onafhankelijke community developer en is niet gelieerd aan Athom B.V."
  }
};

const supportedLanguages = ["nl", "en"];
const storageKey = "arrow87-language";

function getInitialLanguage() {
  const preselected = document.documentElement.dataset.initialLang;
  if (supportedLanguages.includes(preselected)) return preselected;

  try {
    const saved = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(saved)) return saved;
  } catch {}

  const browserLanguage = (navigator.language || "en").toLowerCase();
  return browserLanguage.startsWith("nl") ? "nl" : "en";
}

function applyLanguage(language) {
  const selected = supportedLanguages.includes(language) ? language : "en";
  const copy = translations[selected];

  document.documentElement.lang = selected;
  document.title = copy.title;

  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.setAttribute("content", copy.metaDescription);
  if (ogDescription) ogDescription.setAttribute("content", copy.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) element.textContent = copy[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (copy[key]) element.setAttribute("aria-label", copy[key]);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem(storageKey, selected);
  } catch {}

  document.documentElement.dataset.initialLang = selected;
  document.documentElement.classList.remove("i18n-loading");
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(getInitialLanguage());

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
});
