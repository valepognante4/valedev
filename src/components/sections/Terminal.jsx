import { motion, useReducedMotion } from "framer-motion";

const tone = {
  cmd: "text-ink",
  ok: "text-brass",
  out: "text-accent",
};

export default function Terminal({ title, lines }) {
  const reduce = useReducedMotion();

  return (
    <div className="glow-card is-static relative p-3 shadow-panel md:p-4">
      <div
        className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-a), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[0.85rem] border border-line bg-canvas/80">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-mute uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brass shadow-[0_0_10px_var(--brass)]" aria-hidden="true" />
            {title}
          </p>
        </div>
        <motion.ol
          className="space-y-3 px-5 py-6 font-mono text-[13px] leading-relaxed md:text-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.16, delayChildren: reduce ? 0 : 0.15 } },
          }}
        >
          {lines.map((line) => (
            <motion.li
              key={line.text}
              variants={{
                hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
              }}
              className={tone[line.kind] || "text-ink"}
            >
              {line.kind === "cmd" ? <span className="text-accent">$ </span> : <span className="text-mute">→ </span>}
              {line.text}
            </motion.li>
          ))}
          <li className="text-mute" aria-hidden="true">
            <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-accent" />
          </li>
        </motion.ol>
      </div>
    </div>
  );
}
