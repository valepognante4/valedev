import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/ui/MagneticButton";
import ListRow from "@/components/ui/ListRow";

export default function Classes() {
  const { t } = useLanguage();

  return (
    <Section id="clases">
      <div className="class-head">
        <SectionHeader index={t.classes.index} title={t.classes.title} mark={t.classes.mark} subtitle={t.classes.subtitle} />
        <MagneticButton href="#contacto" className="btn-gradient">
          {t.classes.cta}
        </MagneticButton>
      </div>
      <div className="class-list">
        {t.classes.items.map((item) => (
          <ListRow key={item.id} index={item.index} title={item.title} text={item.text} href="#contacto" />
        ))}
      </div>
    </Section>
  );
}
