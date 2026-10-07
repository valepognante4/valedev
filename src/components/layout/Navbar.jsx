import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import LanguageSwitch from "@/components/layout/LanguageSwitch";
import Logo from "@/components/layout/Logo";

export default function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav-glow fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/70 backdrop-blur-2xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label={t.a11y.home} onClick={close} className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label={t.a11y.menu}>
          {t.nav.map((link) => {
            const current = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm transition-colors duration-300",
                  current ? "text-ink" : "text-mute hover:text-ink"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-300",
                    current ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <a
            href="#contacto"
            className="btn-sheen hidden bg-accent px-4 py-2 text-sm font-medium text-on-accent transition duration-300 hover:-translate-y-0.5 lg:inline-flex"
          >
            {t.navCta}
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-canvas xl:hidden" aria-label={t.a11y.menu}>
          <Container className="flex flex-col py-4">
            {t.nav.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="border-b border-line py-3 text-base text-ink">
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={close} className="btn-sheen mt-4 bg-accent px-4 py-3 text-center text-sm font-medium text-on-accent">
              {t.navCta}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
