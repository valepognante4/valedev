import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function HashOnLoad() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return undefined;
    const id = window.location.hash.replace("#", "");
    const target = id && document.getElementById(id);
    if (!target) return undefined;
    const frame = requestAnimationFrame(() => {
      lenis.scrollTo(target, { offset: 0, immediate: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [lenis]);

  return null;
}

const options = {
  autoRaf: true,
  duration: 1.05,
  smoothWheel: true,
  syncTouch: false,
  anchors: { offset: 0, duration: 1.05 },
};

export default function SmoothScroll({ children }) {
  const [reduce] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  if (reduce) return children;

  return (
    <ReactLenis root options={options}>
      <HashOnLoad />
      {children}
    </ReactLenis>
  );
}
