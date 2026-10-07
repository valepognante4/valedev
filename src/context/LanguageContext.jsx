import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries } from "@/i18n";
import { LANG_KEY, readLang } from "@/lib/preferences";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readLang);

  const setLang = useCallback((next) => {
    if (next === "es" || next === "en") setLangState(next);
  }, []);

  useEffect(() => {
    const dictionary = dictionaries[lang];
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.title = dictionary.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dictionary.meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", dictionary.meta.description);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
}
