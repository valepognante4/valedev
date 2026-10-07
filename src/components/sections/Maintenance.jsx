import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import DrawnCheck from "@/components/ui/DrawnCheck";

export default function Maintenance() {
  const { t } = useLanguage();

  return (
    <Section id="mantenimiento" glow>
      <div className="maintain-grid">
        <div>
          <p className="section-index">{t.maintenance.index}</p>
          <RevealText text={t.maintenance.title} mark={t.maintenance.mark} />
          <p className="section-sub">{t.maintenance.subtitle}</p>
          <p className="about-copy">{t.maintenance.lead}</p>
        </div>
        <Reveal delay={80}>
          <div className="glass">
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {t.maintenance.status}
            </p>
            <h3 className="card-title">{t.maintenance.why}</h3>
            <ul className="checks">
              {t.maintenance.items.map((item, index) => (
                <li key={item}>
                  <DrawnCheck delay={0.08 * index} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="maintain-note">{t.maintenance.note}</p>
            <a href="#contacto" className="text-link">
              {t.maintenance.cta}
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              <i />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
