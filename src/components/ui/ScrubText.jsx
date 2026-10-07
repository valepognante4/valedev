import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Word({ word, progress, index, total }) {
  const opacity = useTransform(progress, [index / total, (index + 0.85) / total], [0.28, 1]);
  return (
    <motion.span style={{ opacity }} className="scrub-word">
      {word}{" "}
    </motion.span>
  );
}

export default function ScrubText({ text, className = "lead" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  if (reduce) return <p className={className}>{text}</p>;

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <Word key={`${word}-${index}`} word={word} progress={scrollYProgress} index={index} total={words.length} />
      ))}
    </p>
  );
}
