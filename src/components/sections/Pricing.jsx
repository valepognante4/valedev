import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <Section id="servicios">
      <SectionHeading index={t.pricing.index} title={t.pricing.title} subtitle={t.pricing.subtitle} />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {t.pricing.plans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 90} className="h-full">
            <article
              className={cn(
                "glow-card flex h-full flex-col p-7 md:p-8",
                plan.featured && "is-featured shadow-panel"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] tracking-[0.18em] text-mute uppercase">{plan.kind}</p>
                {plan.featured && (
                  <span className="rounded-md bg-accent px-2 py-1 text-[10px] tracking-[0.16em] text-on-accent uppercase">
                    {t.pricing.featured}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-sans font-semibold text-3xl tracking-tight text-ink">{plan.name}</h3>
              <p className="mt-5 text-sm leading-relaxed text-mute">{plan.text}</p>
              <p className="mt-8">
                <span className="block text-[11px] tracking-[0.18em] text-mute uppercase">{t.pricing.from}</span>
                <span className="mt-1 block font-sans font-semibold text-6xl leading-none tracking-tight text-ink">
                  <span className="align-top text-2xl">$</span>
                  {plan.price}
                </span>
                <span className="mt-2 block text-xs tracking-[0.16em] text-mute uppercase">{t.pricing.currency}</span>
              </p>
              <ul className="mt-8 space-y-2.5">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={cn(
                  "btn-sheen mt-8 inline-flex items-center justify-center px-4 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5",
                  plan.featured ? "bg-accent text-on-accent" : "border border-line text-ink hover:border-accent"
                )}
              >
                {t.pricing.cta}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
