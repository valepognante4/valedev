function Bars() {
  const heights = [22, 40, 68, 32, 92, 54, 28, 78, 46, 62, 36, 50];

  return (
    <div className="flex h-36 items-end gap-1.5">
      {heights.map((height, index) => (
        <span key={index} className="w-1.5 bg-current" style={{ height }} />
      ))}
    </div>
  );
}

function Stock() {
  const rows = [
    ["SKU-104", "128"],
    ["SKU-221", "046"],
    ["SKU-018", "312"],
  ];

  return (
    <div className="w-full max-w-[220px] font-mono text-xs">
      {rows.map(([sku, qty]) => (
        <div key={sku} className="hairline flex items-center justify-between py-2.5">
          <span>{sku}</span>
          <span>{qty}</span>
        </div>
      ))}
    </div>
  );
}

function Receipt() {
  const lines = [
    ["SKU-104", "02"],
    ["SKU-018", "01"],
    ["SKU-221", "03"],
  ];

  return (
    <div className="shadow-panel w-44 bg-canvas px-4 py-5 font-mono text-[11px] text-ink">
      <p className="text-center tracking-[0.22em]">TICKET</p>
      <div className="hairline my-3" />
      <div className="space-y-1.5">
        {lines.map(([sku, qty]) => (
          <p key={sku} className="flex justify-between gap-4">
            <span>{sku}</span>
            <span>{qty}</span>
          </p>
        ))}
      </div>
      <div className="hairline my-3" />
      <p className="flex justify-between font-medium">
        <span>TOTAL</span>
        <span>06</span>
      </p>
    </div>
  );
}

export default function ProjectVisual({ id, label }) {
  return (
    <div
      className="relative flex min-h-60 items-center justify-center overflow-hidden bg-ink px-6 pt-10 pb-8 text-canvas"
      aria-hidden="true"
    >
      <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.18em] uppercase opacity-70">
        {label}
      </span>
      {id === "soundly" && <Bars />}
      {id === "aurastock" && <Stock />}
      {id === "pos" && <Receipt />}
    </div>
  );
}
