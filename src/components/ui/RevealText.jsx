import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1];

function partsOf(text, mark) {
  if (!mark || !text.includes(mark)) return [{ text, italic: false }];
  const index = text.indexOf(mark);
  return [
    { text: text.slice(0, index), italic: false },
    { text: mark, italic: true },
    { text: text.slice(index + mark.length), italic: false },
  ].filter((part) => part.text);
}

export default function RevealText({ as: Tag = "h2", text, mark, className, immediate = false }) {
  const reduce = useReducedMotion();
  const parts = partsOf(text, mark);
  const variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { y: "110%" }, show: { y: "0%" } };

  return (
    <Tag className={cn("section-title", className)}>
      <motion.span
        className="line-mask"
        initial="hidden"
        variants={{ hidden: {}, show: {} }}
        {...(immediate
          ? { animate: "show" }
          : { whileInView: "show", viewport: { once: true, margin: "-8% 0px" } })}
      >
        <motion.span className="line-inner" variants={variants} transition={{ duration: reduce ? 0.25 : 0.85, ease }}>
          {parts.map((part) =>
            part.italic ? (
              <em key={part.text} className="serif-mark">
                {part.text}
              </em>
            ) : (
              <span key={part.text}>{part.text}</span>
            )
          )}
        </motion.span>
      </motion.span>
    </Tag>
  );
}
