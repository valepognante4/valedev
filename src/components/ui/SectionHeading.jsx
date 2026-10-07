export default function SectionHeading({ index, title, subtitle }) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">{index}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-mute md:text-lg">{subtitle}</p>
    </header>
  );
}
