import { useState } from "react";
import { site } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { IconArrow, IconInstagram, IconMail, IconWhatsapp } from "@/components/ui/Icons";

export default function Contact() {
  const { t } = useLanguage();
  const [opened, setOpened] = useState(false);

  const channels = [
    { label: t.contact.emailLabel, value: site.email, href: `mailto:${site.email}`, icon: IconMail },
    { label: t.contact.whatsappLabel, value: site.whatsappDisplay, href: site.whatsapp, icon: IconWhatsapp, external: true },
    { label: t.contact.instagramLabel, value: site.instagramHandle, href: site.instagram, icon: IconInstagram, external: true },
  ];

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`${t.contact.subject} — ${name}`);
    const body = encodeURIComponent(`${t.contact.name}: ${name}\n${t.contact.email}: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <Section id="contacto">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">{t.contact.index}</p>
          <h2 className="mt-4 font-sans font-semibold text-4xl tracking-tight text-ink md:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-mute">{t.contact.lead}</p>
          <p className="mt-6 max-w-md text-lg font-medium leading-snug text-ink">{t.contact.final}</p>
          <ul className="mt-10">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="group flex items-center justify-between gap-4 border-b border-line py-4"
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="h-4 w-4 text-accent" />
                      <span>
                        <span className="block text-[11px] tracking-[0.16em] text-mute uppercase">{channel.label}</span>
                        <span className="mt-1 block text-base text-ink">{channel.value}</span>
                      </span>
                    </span>
                    <IconArrow className="h-4 w-4 text-mute transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="glow-card is-static shadow-panel p-6 md:p-8">
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.16em] text-mute uppercase">{t.contact.name}</span>
                <input
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink transition-colors duration-300"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.16em] text-mute uppercase">{t.contact.email}</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink transition-colors duration-300"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] tracking-[0.16em] text-mute uppercase">{t.contact.message}</span>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full resize-y rounded-xl border border-line bg-canvas px-4 py-3 text-ink transition-colors duration-300"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-sheen mt-6 w-full bg-accent px-5 py-3 text-sm font-medium text-on-accent transition duration-300 hover:-translate-y-0.5"
            >
              {t.contact.send}
            </button>
            <p className="mt-4 text-sm leading-relaxed text-mute">{t.contact.note}</p>
            {opened && (
              <p className="mt-3 text-sm text-ink" role="status">
                {t.contact.opened} {t.contact.fallback}{" "}
                <a className="border-b border-ink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
