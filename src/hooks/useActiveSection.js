import { useEffect, useState } from "react";

export const SECTION_IDS = ["inicio", "acerca", "servicios", "mantenimiento", "clases", "contacto"];

export function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.35;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= marker) current = id;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}
