import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { serviceIncludes } from "@/data/services";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Counter from "@/components/ui/Counter";
import DrawnCheck from "@/components/ui/DrawnCheck";

const lifts = [18, 6, 28];

function ServiceCard({ plan, index, includes, from, currency, cta, featuredLabel }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [lifts[index] ?? 12, plan.featured ? -10 : 0]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }}>
      <SpotlightCard featured={plan.featured}>
        <div className="card-kicker">
          <p className="mono-label">{plan.kind}</p>
          {plan.featured ? <span className="badge">{featuredLabel}</span> : <span aria-hidden="true" />}
        </div>
        <h3 className="card-title">{plan.name}</h3>
        <p className="card-text">{plan.text}</p>
        <p className="price">
          <span className="price-from">{from}</span>
          <span className="price-row">
            <span className="price-sign">$</span>
            <Counter value={Number(plan.price)} />
            <small>{currency}</small>
          </span>
        </p>
        <ul className="checks">
          {includes.map((item) => (
            <li key={item}>
              <DrawnCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a href="#contacto" className={plan.featured ? "btn-gradient card-cta" : "text-link card-cta"}>
          {cta}
          {plan.featured ? null : <i />}
        </a>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Pricing() {
  const { lang, t } = useLanguage();

  return (
    <Section id="servicios">
      <SectionHeader index={t.pricing.index} title={t.pricing.title} mark={t.pricing.mark} subtitle={t.pricing.subtitle} />
      <div className="service-grid">
        {t.pricing.plans.map((plan, index) => (
          <ServiceCard
            key={plan.id}
            plan={plan}
            index={index}
            includes={serviceIncludes[plan.id][lang]}
            from={t.pricing.from}
            currency={t.pricing.currency}
            cta={t.pricing.cta}
            featuredLabel={t.pricing.featured}
          />
        ))}
      </div>
    </Section>
  );
}
