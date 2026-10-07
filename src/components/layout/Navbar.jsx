import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import Logo from "@/components/layout/Logo";
import LanguageSwitch from "@/components/layout/LanguageSwitch";
import ThemeToggle from "@/components/layout/ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lenis) return undefined;
    if (open) lenis.stop();
    else lenis.start();
    return undefined;
  }, [lenis, open]);

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
    <header className="nav-fixed">
      <div className={cn("nav-shell", compact && "is-compact")}>
        <a href="#inicio" aria-label={t.a11y.home} onClick={close}>
          <Logo />
        </a>
        <nav className="nav-links" aria-label={t.a11y.menu}>
          {t.nav.map((link) => {
            const current = active === link.href.slice(1);
            return (
              <a key={link.href} href={link.href} aria-current={current ? "page" : undefined} className={cn("nav-link", current && "is-current")}>
                {current ? <motion.span layoutId="nav-active" className="nav-active" transition={{ type: "spring", bounce: 0.18, duration: 0.5 }} /> : null}
                <span style={{ position: "relative" }}>{link.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="nav-tools">
          <LanguageSwitch />
          <ThemeToggle />
          <MagneticButton href="#contacto" className="btn-gradient nav-cta">
            {t.navCta}
          </MagneticButton>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="nav-menu" aria-label={t.a11y.menu}>
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <MagneticButton href="#contacto" className="btn-gradient" onClick={close}>
            {t.navCta}
          </MagneticButton>
        </nav>
      ) : null}
    </header>
  );
}
