type State = "expansion" | "contraction";

export function IssuanceRate({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";

  return (
    <div
      className="issuance-rate pointer-events-none flex w-48 flex-col items-center"
      aria-hidden="true"
    >
      <span className="label flex h-4 w-full items-center justify-center text-center text-[10px] text-muted-foreground">
        Issuance rate
      </span>

      <div className="relative mt-1 h-28 w-full">
        {/* sparkline behind the token */}
        <svg
          viewBox="0 0 120 70"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          {positive ? (
            <path
              key="up"
              d="M4 62 L28 52 L48 56 L72 34 L92 26 L116 8"
              stroke={accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="220"
              strokeDashoffset="220"
              style={{ animation: "issuance-draw 2.6s ease-in-out infinite" }}
              opacity={0.55}
            />
          ) : (
            <line
              key="flat"
              x1="4"
              y1="44"
              x2="116"
              y2="44"
              stroke={accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={0.55}
            />
          )}
        </svg>

        {/* token */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            key={state}
            className="relative h-9 w-9"
            style={{
              animation: positive
                ? "issuance-mint 2.6s ease-in-out infinite"
                : "none",
            }}
          >
            <svg viewBox="0 0 36 36" className="h-full w-full" fill="none">
              {/* reeded edge: many short radial dashes around the rim */}
              <circle
                cx="18"
                cy="18"
                r="16.5"
                stroke={accent}
                strokeWidth="2.5"
                strokeDasharray="1.5 2.37"
                fill="color-mix(in srgb, var(--paper) 82%, transparent)"
              />
              {/* inner rim */}
              <circle cx="18" cy="18" r="13" stroke={accent} strokeWidth="1.2" />
              <text
                x="18"
                y="22.5"
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill={accent}
              >
                S
              </text>
            </svg>
          </div>

          {positive && (
            <>
              <span
                className="absolute left-1/2 top-0 text-[10px] font-medium"
                style={{
                  color: accent,
                  animation: "issuance-plus 2.6s ease-out infinite",
                }}
              >
                +1
              </span>
              <span
                className="absolute left-1/2 top-0 text-[10px] font-medium"
                style={{
                  color: accent,
                  animation: "issuance-plus 2.6s ease-out infinite",
                  animationDelay: "1.3s",
                }}
              >
                +1
              </span>
            </>
          )}
        </div>
      </div>

      <span className="label mt-2 flex h-8 w-full items-start justify-center text-center text-[10px] leading-tight text-black">
        {positive ? "climbing (if sustained)" : "cut immediately"}
      </span>

      <style>{`
        @keyframes issuance-mint {
          0%   { transform: scale(0) translateY(10px); opacity: 0; }
          25%  { transform: scale(1) translateY(0);    opacity: 1; }
          70%  { transform: scale(1) translateY(-14px); opacity: 1; }
          100% { transform: scale(0.9) translateY(-30px); opacity: 0; }
        }
        @keyframes issuance-plus {
          0%   { transform: translate(-50%, 6px);  opacity: 0; }
          30%  { opacity: 0.9; }
          100% { transform: translate(-50%, -26px); opacity: 0; }
        }
        @keyframes issuance-draw {
          0%   { stroke-dashoffset: 220; opacity: 0; }
          15%  { opacity: 0.55; }
          70%  { stroke-dashoffset: 0; opacity: 0.55; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .issuance-rate * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
