export default function Section({ id, children }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
