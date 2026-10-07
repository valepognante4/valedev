import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import RevealText from "@/components/ui/RevealText";
import ScrubText from "@/components/ui/ScrubText";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1];

function ProcessTerminal({ title, steps }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? steps.length : 0);

  useEffect(() => {
    if (reduce || count >= steps.length) return undefined;
    const timer = setTimeout(() => setCount((value) => value + 1), count === 0 ? 400 : 680);
    return () => clearTimeout(timer);
  }, [count, reduce, steps.length]);

  return (
    <div className="term" aria-hidden="true">
      <div className="term-bar">
        <span />
        <span />
        <span />
        <em>{title}</em>
      </div>
      <ol>
        {steps.slice(0, count).map((step, index) => (
          <li key={step}>
            <b>0{index + 1}</b>
            {step}
            {index === count - 1 && count < steps.length ? <i className="caret" /> : null}
          </li>
        ))}
        {count === 0 ? (
          <li>
            <i className="caret" />
          </li>
        ) : null}
      </ol>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <Section id="acerca">
      <div className="about-grid">
        <div className="about-sticky">
          <div>
            <p className="section-index">{t.about.index}</p>
            <RevealText text={t.about.title} mark={t.about.mark} />
          </div>
          <ProcessTerminal title={t.about.terminal} steps={t.about.steps} />
        </div>
        <div>
          <ScrubText text={t.about.lead} />
          <p className="about-copy">{t.about.text}</p>
          <p className="about-voice">{t.about.voice}</p>
          <div className="about-points">
            {t.about.points.map((point, index) => (
              <article key={point.title} className="about-row">
                <motion.span
                  className="about-rule"
                  aria-hidden="true"
                  initial={{ scaleX: reduce ? 1 : 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: reduce ? 0 : 0.8, delay: index * 0.08, ease }}
                />
                <span className="about-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
