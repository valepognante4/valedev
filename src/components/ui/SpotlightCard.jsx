import { useRef } from "react";
import { cn } from "@/lib/cn";

export default function SpotlightCard({ featured = false, className, children }) {
  const ref = useRef(null);

  function move(event) {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <article ref={ref} onPointerMove={move} className={cn("spotlight", featured && "is-featured", className)}>
      {featured ? <span className="spotlight-ring" aria-hidden="true" /> : null}
      <span className="spotlight-glow" aria-hidden="true" />
      <div className="spotlight-body">{children}</div>
    </article>
  );
}
