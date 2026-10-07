import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import { IconInstagram, IconWhatsapp } from "@/components/ui/Icons";

export default function Contact() {
  const { t } = useLanguage();
  const [opened, setOpened] = useState(false);

  const channels = [
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
    <Section id="contacto" glow>
      <p className="section-index">{t.contact.index}</p>
      <RevealText text={t.contact.title} mark={t.contact.mark} />
      <div className="contact-grid">
        <div>
          <p className="section-sub">{t.contact.lead}</p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={28} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <ul className="channel-list">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label}>
                  <a href={channel.href} target="_blank" rel="noreferrer noopener">
                    <span>
                      <Icon className="h-[18px] w-[18px]" />
                      <span>
                        <small>{channel.label}</small>
                        {channel.value}
                      </span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="trust">
            <span className="status-dot" aria-hidden="true" />
            {t.contact.reply}
          </p>
        </div>
        <form className="glass" onSubmit={onSubmit}>
          <p className="about-voice" style={{ marginTop: 0 }}>
            {t.contact.final}
          </p>
          <label className="field">
            <input name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" placeholder=" " />
            <span>{t.contact.name}</span>
          </label>
          <label className="field">
            <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder=" " />
            <span>{t.contact.email}</span>
          </label>
          <label className="field">
            <textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder=" " />
            <span>{t.contact.message}</span>
          </label>
          <MagneticButton type="submit" className="btn-gradient card-cta btn-block">
            {t.contact.send}
          </MagneticButton>
          <p className="form-note">{t.contact.note}</p>
          {opened ? (
            <p className="form-status" role="status">
              {t.contact.opened} {t.contact.fallback} <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
