import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingTheme from "@/components/layout/FloatingTheme";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Maintenance from "@/components/sections/Maintenance";
import Classes from "@/components/sections/Classes";
import Contact from "@/components/sections/Contact";

function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="mesh-grid absolute inset-0" />
      <div
        className="orb absolute -top-52 left-[-12%] h-[640px] w-[640px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-a), transparent 68%)" }}
      />
      <div
        className="orb orb-b absolute top-[18%] -right-24 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-b), transparent 70%)" }}
      />
      <div
        className="orb absolute bottom-[-18%] left-[28%] h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-a), transparent 72%)", opacity: 0.55 }}
      />
    </div>
  );
}

function Shell() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen overflow-x-clip bg-canvas font-sans text-ink antialiased">
      <Atmosphere />
      <a className="skip-link" href="#inicio">
        {t.a11y.skip}
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Maintenance />
        <Classes />
        <Contact />
      </main>
      <Footer />
      <FloatingTheme />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Shell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
