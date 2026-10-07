import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Classes() {
  const { t } = useLanguage();

  return (
    <Section id="clases">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading index={t.classes.index} title={t.classes.title} subtitle={t.classes.subtitle} />
        <a
          href="#contacto"
          className="btn-sheen inline-flex w-fit shrink-0 bg-accent px-5 py-3 text-sm font-medium text-on-accent transition duration-300 hover:-translate-y-0.5"
        >
          {t.classes.cta}
        </a>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {t.classes.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 80} className="h-full">
            <article className="glow-card group h-full p-7">
              <p className="font-sans font-semibold text-3xl text-mute transition-colors duration-300 group-hover:text-accent">{item.index}</p>
              <h3 className="mt-6 font-sans font-semibold text-2xl tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
