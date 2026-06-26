type SymbolConfig = {
  symbol: string;
  top: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
};

const configs: SymbolConfig[] = [
  { symbol: "∇", top: "8%",  left: "5%",  duration: "8s",  delay: "0s",    size: "text-4xl" },
  { symbol: "∑", top: "15%", left: "88%", duration: "11s", delay: "1s",    size: "text-5xl" },
  { symbol: "∫", top: "35%", left: "3%",  duration: "9s",  delay: "2s",    size: "text-3xl" },
  { symbol: "λ", top: "60%", left: "92%", duration: "13s", delay: "0.5s",  size: "text-4xl" },
  { symbol: "σ", top: "75%", left: "8%",  duration: "10s", delay: "3s",    size: "text-3xl" },
  { symbol: "∂", top: "20%", left: "50%", duration: "14s", delay: "1.5s",  size: "text-2xl" },
  { symbol: "π", top: "80%", left: "75%", duration: "7s",  delay: "2.5s",  size: "text-5xl" },
  { symbol: "∞", top: "45%", left: "60%", duration: "12s", delay: "4s",    size: "text-3xl" },
  { symbol: "∈", top: "90%", left: "40%", duration: "9s",  delay: "0.8s",  size: "text-4xl" },
  { symbol: "Δ", top: "5%",  left: "70%", duration: "11s", delay: "3.5s",  size: "text-3xl" },
];

export function FloatingSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {configs.map((c, i) => (
        <span
          key={i}
          className={`float-symbol absolute font-serif text-primary ${c.size}`}
          style={{
            top: c.top,
            left: c.left,
            animationDuration: c.duration,
            animationDelay: c.delay,
          }}
        >
          {c.symbol}
        </span>
      ))}
    </div>
  );
}
