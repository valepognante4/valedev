import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Stack() {
  const { t } = useLanguage();

  return (
    <Section id="stack">
      <SectionHeading index={t.stack.index} title={t.stack.title} subtitle={t.stack.subtitle} />
      <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
        {t.stack.items.map((item) => (
          <li key={item.name} className="bg-canvas px-5 py-7 transition-colors hover:bg-surface md:px-7 md:py-9">
            <p className="font-serif text-2xl tracking-tight text-ink md:text-3xl">{item.name}</p>
            <p className="mt-3 text-[11px] tracking-[0.16em] text-mute uppercase">{item.category}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
