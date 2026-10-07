import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const DOTS = [
  [6, 14, 2, 14],
  [12, 48, 3, 22],
  [18, 78, 2, 16],
  [28, 22, 2, 26],
  [34, 66, 3, 18],
  [46, 12, 2, 12],
  [52, 84, 2, 20],
  [58, 30, 3, 32],
  [64, 58, 2, 24],
  [70, 16, 2, 18],
  [74, 74, 4, 36],
  [80, 42, 2, 28],
  [86, 18, 3, 22],
  [90, 62, 2, 16],
  [94, 34, 2, 30],
  [22, 36, 2, 14],
  [40, 44, 2, 20],
  [68, 88, 2, 18],
  [84, 82, 3, 26],
  [96, 8, 2, 12],
];

export default function HeroField() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return undefined;
    const node = ref.current;
    const section = node?.closest("section");
    if (!node || !section) return undefined;

    function onMove(event) {
      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--px", x.toFixed(3));
      node.style.setProperty("--py", y.toFixed(3));
    }

    section.addEventListener("pointermove", onMove);
    return () => section.removeEventListener("pointermove", onMove);
  }, [reduce]);

  return (
    <div ref={ref} className="hero-field" aria-hidden="true">
      {DOTS.map(([left, top, size, depth], index) => (
        <span
          key={index}
          className="hero-dot"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            "--depth": depth,
            animationDelay: `${(index % 7) * 0.35}s`,
          }}
        />
      ))}
    </div>
  );
}
