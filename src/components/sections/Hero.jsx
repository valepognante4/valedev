import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="inicio" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <h1 className="hero-title">
          {t.hero.headline.map((line, index) => (
            <span className="line-mask" key={line.text}>
              <motion.span
                className="line-inner"
                initial={reduce ? { opacity: 0 } : { y: "110%" }}
                animate={reduce ? { opacity: 1 } : { y: "0%" }}
                transition={{ duration: reduce ? 0.25 : 0.85, delay: reduce ? 0 : 0.08 + index * 0.1, ease }}
              >
                {line.italic ? <em className="serif-mark">{line.text}</em> : line.text}
              </motion.span>
            </span>
          ))}
        </h1>
        <Reveal immediate delay={420}>
          <p className="hero-lead">{t.hero.lead}</p>
        </Reveal>
        <Reveal immediate delay={520}>
          <div className="hero-actions">
            <MagneticButton href="#contacto" className="btn-gradient">
              {t.hero.secondary}
            </MagneticButton>
            <a href="#servicios" className="arrow-link">
              {t.hero.primary}
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
      <a href="#acerca" className="scroll-cue" aria-label={t.hero.scroll}>
        <span />
      </a>
      <Reveal immediate delay={640}>
        <Marquee items={t.hero.marquee} label={t.hero.marqueeLabel} />
      </Reveal>
    </section>
  );
}
