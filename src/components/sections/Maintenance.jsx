import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Maintenance() {
  const { t } = useLanguage();

  return (
    <Section id="mantenimiento">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">{t.maintenance.index}</p>
          <h2 className="mt-4 font-sans font-semibold text-4xl tracking-tight text-ink md:text-5xl">{t.maintenance.title}</h2>
          <p className="mt-4 text-lg font-medium leading-snug text-ink">{t.maintenance.subtitle}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-mute">{t.maintenance.lead}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="glow-card is-featured shadow-panel p-7 md:p-9">
            <h3 className="font-sans font-semibold text-2xl text-ink">{t.maintenance.why}</h3>
            <ul className="mt-6 space-y-4">
              {t.maintenance.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-brass" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-mute">{t.maintenance.note}</p>
            <a
              href="#contacto"
              className="btn-sheen mt-8 inline-flex bg-accent px-5 py-3 text-sm font-medium text-on-accent transition duration-300 hover:-translate-y-0.5"
            >
              {t.maintenance.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
