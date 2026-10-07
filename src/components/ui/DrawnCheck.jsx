import { motion, useReducedMotion } from "framer-motion";

export default function DrawnCheck({ delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 24 24" className="check-draw" aria-hidden="true">
      <motion.path
        d="M5 12.5 9.2 17 19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: reduce ? 0 : 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
