import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Terminal from "@/components/sections/Terminal";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.22em] text-brass uppercase">{t.hero.kicker}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 max-w-xl font-sans text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {t.hero.titleBefore}
                <span className="text-shine">{t.hero.titleMark}</span>
                {t.hero.titleAfter}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mute md:text-lg">{t.hero.lead}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#servicios"
                  className="btn-sheen inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-on-accent transition duration-300 hover:-translate-y-0.5"
                >
                  {t.hero.primary}
                </a>
                <a
                  href="#contacto"
                  className="glass inline-flex items-center px-5 py-3 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Terminal title={t.hero.session} lines={t.hero.lines} />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.pricing.plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 80}>
              <a href="#servicios" className="glow-card flex items-center justify-between gap-4 px-5 py-5">
                <span>
                  <span className="block text-[11px] tracking-[0.18em] text-mute uppercase">{plan.kind}</span>
                  <span className="mt-1 block text-base font-medium text-ink">{plan.name}</span>
                </span>
                <span className="font-sans text-3xl font-semibold tracking-tight text-ink">
                  <span className="align-top text-base text-accent">$</span>
                  {plan.price}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
