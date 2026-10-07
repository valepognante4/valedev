export default function CodeCard({ caption }) {
  const lines = [
    [{ text: "@RestController", tone: "text-accent" }],
    [{ text: '@RequestMapping("/api/v1")', tone: "text-accent" }],
    [{ text: "class ProfileController {", tone: "text-ink" }],
    [{ text: "", tone: "text-mute" }],
    [{ text: '    @GetMapping("/profile")', tone: "text-accent" }],
    [{ text: "    Profile profile() {", tone: "text-ink" }],
    [{ text: "        return new Profile(", tone: "text-mute" }],
    [{ text: '            "Vale I Dev",', tone: "text-ink" }],
    [{ text: '            "Backend"', tone: "text-ink" }],
    [{ text: "        );", tone: "text-mute" }],
    [{ text: "    }", tone: "text-ink" }],
    [{ text: "}", tone: "text-ink" }],
  ];

  return (
    <figure className="rise shadow-panel border border-line bg-surface" style={{ animationDelay: "180ms" }}>
      <figcaption className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 md:px-6">
        <span className="font-mono text-[11px] text-mute">ProfileController.java</span>
        <span className="text-[11px] tracking-[0.16em] text-mute uppercase">{caption}</span>
      </figcaption>
      <div className="overflow-x-auto px-5 py-6 font-mono text-[12.5px] leading-7 md:px-6" aria-hidden="true">
        {lines.map((line, index) => (
          <div key={index} className="min-h-7 whitespace-pre">
            {line.map((token) => (
              <span key={token.text || "blank"} className={token.tone}>
                {token.text || " "}
              </span>
            ))}
          </div>
        ))}
      </div>
    </figure>
  );
}
