import { ArrowRight } from "lucide-react";

export default function ListRow({ index, title, text, href }) {
  return (
    <a href={href} className="class-row">
      <span className="class-index">{index}</span>
      <span className="class-name">{title}</span>
      <span className="class-text">{text}</span>
      <ArrowRight className="class-arrow" size={20} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
