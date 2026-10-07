import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuroraBackground from "@/components/ui/AuroraBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Maintenance from "@/components/sections/Maintenance";
import Classes from "@/components/sections/Classes";
import Contact from "@/components/sections/Contact";

function Shell() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink antialiased">
      <AuroraBackground />
      <CursorGlow />
      <ScrollProgress />
      <div className="top-scrim" aria-hidden="true" />
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
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll>
          <Shell />
        </SmoothScroll>
      </LanguageProvider>
    </ThemeProvider>
  );
}
