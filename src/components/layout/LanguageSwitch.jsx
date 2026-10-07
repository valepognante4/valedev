import { languages } from "@/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.a11y.language} className="flex border border-line">
      {languages.map((item) => {
        const selected = item.id === lang;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setLang(item.id)}
            aria-pressed={selected}
            className={cn(
              "px-2.5 py-1.5 text-[11px] font-medium tracking-[0.14em] transition-colors",
              selected ? "bg-ink text-canvas" : "text-mute hover:text-ink"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
