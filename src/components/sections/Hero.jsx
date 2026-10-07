import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Terminal from "@/components/sections/Terminal";
import Marquee from "@/components/sections/Marquee";
import HeroField from "@/components/sections/HeroField";
import { trackSpot } from "@/lib/spot";

const FLOATING = [
  { label: "Java", className: "left-1 -top-1" },
  { label: "Spring Boot", className: "right-1 -top-1" },
  { label: "Docker", className: "-bottom-3 left-6" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <HeroField />
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal immediate>
              <p className="text-[11px] tracking-[0.22em] text-brass uppercase">{t.hero.kicker}</p>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="mt-5 max-w-xl font-sans text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {t.hero.titleBefore}
                <span className="text-shine">{t.hero.titleMark}</span>
                {t.hero.titleAfter}
              </h1>
            </Reveal>
            <Reveal immediate delay={140}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mute md:text-lg">{t.hero.lead}</p>
            </Reveal>
            <Reveal immediate delay={200}>
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
          <Reveal immediate delay={180}>
            <div className="relative px-1 py-4 lg:px-6" onPointerMove={trackSpot}>
              <div className="hero-follow" aria-hidden="true" />
              {FLOATING.map((chip, index) => (
                <span
                  key={chip.label}
                  className={`float-chip pointer-events-none absolute z-20 hidden lg:inline-flex ${chip.className}`}
                  style={{ animationDelay: `${index * -1.8}s` }}
                >
                  {chip.label}
                </span>
              ))}
              <div className="float-panel relative z-10">
                <Terminal title={t.hero.session} lines={t.hero.lines} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <Reveal immediate delay={280} className="relative z-10 mt-12 md:mt-16">
        <Marquee items={t.hero.marquee} label={t.hero.marqueeLabel} />
      </Reveal>

      <Container className="relative z-10">
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
          {t.pricing.plans.map((plan, index) => (
            <Reveal key={plan.id} immediate delay={320 + index * 80}>
              <a
                href="#servicios"
                onPointerMove={trackSpot}
                className="spot glow-card flex items-center justify-between gap-4 px-5 py-5"
              >
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
