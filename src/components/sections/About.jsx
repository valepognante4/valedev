import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="acerca">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">{t.about.index}</p>
          <h2 className="mt-4 font-sans font-semibold text-4xl tracking-tight text-ink md:text-5xl">{t.about.title}</h2>
        </Reveal>
        <div>
          <Reveal delay={80}>
            <p className="text-xl font-medium leading-snug tracking-tight text-ink">{t.about.lead}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-mute">{t.about.text}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.about.points.map((point, index) => (
              <Reveal key={point.title} delay={120 + index * 70} className="h-full">
                <article className="glow-card h-full p-5">
                  <p className="font-sans font-semibold text-xl text-ink">{point.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{point.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
