import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconChat, IconNodes, IconServer, IconWindow } from "@/components/ui/Icons";

const icons = {
  backend: IconServer,
  apps: IconWindow,
  apis: IconNodes,
  consulting: IconChat,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <Section id="servicios">
      <SectionHeading index={t.services.index} title={t.services.title} subtitle={t.services.subtitle} />
      <ul className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
        {t.services.items.map((item) => {
          const Icon = icons[item.id] ?? IconServer;
          return (
            <li key={item.id} className="group bg-canvas p-8 transition-colors hover:bg-surface md:p-10">
              <div className="flex items-start justify-between gap-6">
                <span className="font-serif text-3xl text-mute transition-colors group-hover:text-accent">
                  {item.index}
                </span>
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-10 font-serif text-2xl tracking-tight text-ink md:text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-mute md:text-base">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
