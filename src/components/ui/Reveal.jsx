import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1];

export default function Reveal({ children, className = "", delay = 0, immediate = false }) {
  const reduce = useReducedMotion();
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: reduce ? 0.2 : 0.55, delay: delay / 1000, ease };

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      {...(immediate
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: true, margin: "-10% 0px" } })}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
