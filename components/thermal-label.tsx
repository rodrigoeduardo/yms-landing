import type { Dictionary } from "@/lib/i18n/dictionaries";

const SIZE = 21;

// Deterministic module pattern so server and client render the same QR art.
// Decorative only: it is not a scannable code.
function isDark(x: number, y: number): boolean {
  const inFinder = (fx: number, fy: number) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7;
  if (inFinder(0, 0) || inFinder(SIZE - 7, 0) || inFinder(0, SIZE - 7)) {
    const lx = x >= SIZE - 7 ? x - (SIZE - 7) : x;
    const ly = y >= SIZE - 7 ? y - (SIZE - 7) : y;
    const ring = lx === 0 || lx === 6 || ly === 0 || ly === 6;
    const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
    return ring || core;
  }
  const nearFinder =
    (x < 8 && y < 8) || (x >= SIZE - 8 && y < 8) || (x < 8 && y >= SIZE - 8);
  if (nearFinder) return false;
  return ((x * 7 + y * 13 + x * y * 3) % 5) < 2;
}

export function QrMark({ className }: { className?: string }) {
  const cells: React.ReactNode[] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (isDark(x, y)) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" />);
    }
  }
  return (
    <svg className={className} viewBox={`0 0 ${SIZE} ${SIZE}`} shapeRendering="crispEdges" aria-hidden>
      {cells}
    </svg>
  );
}

export function ThermalLabel({
  label,
  className = "",
}: {
  label: Dictionary["demo"]["label"];
  className?: string;
}) {
  return (
    <div className={`thermal-label ${className}`} aria-hidden>
      <QrMark className="thermal-qr" />
      <div className="thermal-fields">
        <strong>{label.item}</strong>
        <span>{label.invoice}</span>
        <span>{label.material}</span>
        <span>{label.intake}</span>
      </div>
      <span className="thermal-weight">{label.weight}</span>
    </div>
  );
}
