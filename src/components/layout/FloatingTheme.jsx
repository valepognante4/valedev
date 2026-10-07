import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { IconMoon, IconSun } from "@/components/ui/Icons";

export default function FloatingTheme() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";
  const label = isDark ? t.a11y.switchToLight : t.a11y.switchToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="glass shadow-panel fixed right-5 bottom-5 z-50 inline-flex h-12 w-12 items-center justify-center text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent"
    >
      {isDark ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  );
}
