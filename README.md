# Vale I Dev

Portafolio personal de Vale I Dev. React, Vite y Tailwind CSS.

## Ver el sitio

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`. Para generar la versión estática: `npm run build`.

## Dónde personalizar

| Qué cambiar | Archivo |
| --- | --- |
| Correo, GitHub, LinkedIn y links de proyectos | `src/config/site.js` |
| Textos en español | `src/i18n/es.js` |
| Textos en inglés | `src/i18n/en.js` |
| Idiomas disponibles | `src/i18n/index.js` |

Si un proyecto todavía no tiene URL, dejá el string vacío en `site.projects`. El botón "Ver proyecto" aparece solo cuando la URL empieza con `http`.

Para sumar un proyecto, agregá el mismo `id` en `es.js`, `en.js` y `site.projects`. Los visuales de `soundly`, `aurastock` y `pos` viven en `src/components/sections/ProjectVisual.jsx`.

Para sumar un idioma, duplicá `src/i18n/es.js`, registralo en `src/i18n/index.js` y el selector lo toma de esa lista.

## Tema e idioma

El modo claro/oscuro y el idioma se guardan en `localStorage` (`vale-theme`, `vale-lang`). Si no hay preferencia guardada, el sitio usa el tema y el idioma del sistema.

La landing anterior de Innova MVP quedó en `archive/innova-mvp.html`.
