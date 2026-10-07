import { useReducedMotion } from "framer-motion";

function Chip({ children }) {
  return (
    <span className="marquee-chip">
      <span className="marquee-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function Marquee({ items, label }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-5" aria-label={label}>
        {items.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>
    );
  }

  const unit = [...items, ...items];
  const loop = [...unit, ...unit];

  return (
    <div className="marquee" role="region" aria-label={label}>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="marquee-track" aria-hidden="true">
        {loop.map((item, index) => (
          <Chip key={`${item}-${index}`}>{item}</Chip>
        ))}
      </div>
    </div>
  );
}
