import RevealText from "@/components/ui/RevealText";

export default function SectionHeader({ index, title, mark, subtitle }) {
  return (
    <header>
      {index ? <p className="section-index">{index}</p> : null}
      <RevealText text={title} mark={mark} />
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </header>
  );
}
