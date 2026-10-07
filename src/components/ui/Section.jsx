import { cn } from "@/lib/cn";

export default function Section({ id, children, glow = false, className }) {
  return (
    <section id={id} className={cn("section", glow && "section-glow", className)}>
      <div className="section-rule" aria-hidden="true" />
      <div className="wrap">{children}</div>
    </section>
  );
}
