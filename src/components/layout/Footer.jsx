import { site } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
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
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#inicio" aria-label={t.a11y.home}>
            <Logo />
          </a>
          <p className="mt-4 max-w-sm text-base font-medium leading-snug text-ink">{t.contact.final}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="text-sm text-mute transition-colors duration-300 hover:text-ink"
                >
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-mute">
          <p>{t.footer.note}</p>
          <p className="mt-2">
            © {year} Vale I Dev. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
