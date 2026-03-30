import en from "./translations/en";
import de from "./translations/de";
import zhTW from "./translations/zh-TW";

const translations = {
  en,
  de,
  "zh-TW": zhTW
};

export function getLanguage() {
  return localStorage.getItem("lang") || "en";
}

export function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  window.location.reload();
}

export function t(path) {
  const lang = getLanguage();
  const keys = path.split(".");

  let result = translations[lang];

  for (let key of keys) {
    result = result?.[key];
  }

  return result || path;
}