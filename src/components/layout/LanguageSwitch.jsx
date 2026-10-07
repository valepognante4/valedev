import { languages } from "@/i18n";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.a11y.language} className="lang-switch">
      {languages.map((item) => (
        <button key={item.id} type="button" onClick={() => setLang(item.id)} aria-pressed={item.id === lang}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
