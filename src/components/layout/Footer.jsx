import { site } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const channels = [
    { label: t.contact.emailLabel, href: `mailto:${site.email}` },
    { label: t.contact.whatsappLabel, href: site.whatsapp },
    { label: t.contact.instagramLabel, href: site.instagram },
  ];

  return (
    <footer className="site-footer">
      <div className="section-rule" aria-hidden="true" />
      <div className="footer-row">
        <div>
          <a href="#inicio" aria-label={t.a11y.home}>
            <Logo />
          </a>
          <ul className="footer-links">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                >
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-meta">
          <p>{t.footer.note}</p>
          <p>
            © {year} Vale I Dev. {t.footer.rights}
          </p>
        </div>
      </div>
      <p className="watermark" aria-hidden="true">
        Vale DEV
      </p>
    </footer>
  );
}
