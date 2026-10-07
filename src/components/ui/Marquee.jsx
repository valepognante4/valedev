import { useReducedMotion } from "framer-motion";

export default function Marquee({ items, label }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  if (reduce) {
    return (
      <ul className="marquee-static" aria-label={label}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
