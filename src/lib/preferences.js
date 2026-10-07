/** Claves compartidas con el script anti-parpadeo de index.html. */
export const THEME_KEY = "vale-theme-v2";
export const LANG_KEY = "vale-lang";

export function readTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* almacenamiento no disponible */
  }

  return "dark";
}

export function readLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* almacenamiento no disponible */
  }

  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}
