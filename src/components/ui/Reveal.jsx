import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function Reveal({ children, className = "", delay = 0, immediate = false }) {
  const reduce = useReducedMotion();
  const hidden = reduce ? false : { opacity: 0, y: immediate ? 22 : 28 };

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-12% 0px" } })}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
