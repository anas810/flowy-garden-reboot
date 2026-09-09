type State = "expansion" | "contraction";

export function Licenses({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";

  return (
    <div
      className="licenses pointer-events-none flex w-48 flex-col items-center"
      aria-hidden="true"
    >
      <span className="label flex h-4 w-full items-center justify-center text-center text-[10px] text-muted-foreground">
        Licenses
      </span>

      <div className="relative mt-1 flex h-28 w-full flex-col items-center justify-center">
        {/* paper license + price tag */}
        <div className="relative flex h-16 items-center justify-center">
          {/* paper license */}
          <svg
            viewBox="0 0 40 48"
            className="h-10 w-8"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="4" width="28" height="40" rx="2" />
            <path d="M12 14 L28 14" />
            <path d="M12 22 L28 22" />
            <path d="M12 30 L22 30" />
            <circle cx="28" cy="34" r="3" fill="currentColor" stroke="none" opacity={0.25} />
          </svg>

          {/* price tag overlapping bottom-right of license */}
          <svg
            viewBox="0 0 28 36"
            className="absolute -right-2 -bottom-1 h-8 w-6"
            fill="none"
          >
            {/* tag body */}
            <path
              d="M14 3 L25 12 L25 33 L3 33 L3 12 Z"
              fill="color-mix(in srgb, var(--paper) 70%, transparent)"
              stroke={accent}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* hole */}
            <circle cx="14" cy="12" r="2.5" fill="var(--background)" stroke={accent} strokeWidth="1.2" />
            {/* string loop */}
            <path d="M14 9 L14 4" stroke={accent} strokeWidth="1.2" strokeLinecap="round" />
            {/* dollar text */}
            <text
              x="14"
              y="27"
              textAnchor="middle"
              fontSize="6"
              fontWeight="600"
              fill={accent}
              style={{ letterSpacing: "-0.3px" }}
            >
              {positive ? "$ $ $ $ $" : "$ $"}
            </text>
          </svg>
        </div>

        {/* up / down sparkline */}
        <div className="relative mt-2 h-6 w-12">
          <svg
            viewBox="0 0 48 24"
            className="h-full w-full"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <marker
                id={`arrow-${state}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M0 0 L10 5 L0 10 L2 5 Z" fill={accent} />
              </marker>
            </defs>
            {positive ? (
              <path
                d="M4 18 L16 14 L28 10 L40 6"
                strokeDasharray="52"
                strokeDashoffset="52"
                markerEnd={`url(#arrow-${state})`}
                opacity={0.9}
                style={{ animation: "license-sparkline-up 2s ease-out infinite" }}
              />
            ) : (
              <path
                d="M4 6 L16 10 L28 14 L40 18"
                strokeDasharray="52"
                strokeDashoffset="52"
                markerEnd={`url(#arrow-${state})`}
                opacity={0.9}
                style={{ animation: "license-sparkline-down 2s ease-out infinite" }}
              />
            )}
          </svg>
        </div>
      </div>

      <span className="label mt-2 flex h-8 w-full items-start justify-center text-center text-[10px] leading-tight text-black">
        {positive ? "cost more (floor scales with the rate)" : "cost less"}
      </span>

      <style>{`
        @keyframes license-sparkline-up {
          0%   { stroke-dashoffset: 52; opacity: 0; transform: translateY(2px); }
          15%  { opacity: 0.9; }
          70%  { stroke-dashoffset: 0; opacity: 0.9; transform: translateY(-1px); }
          100% { stroke-dashoffset: 0; opacity: 0; transform: translateY(-2px); }
        }
        @keyframes license-sparkline-down {
          0%   { stroke-dashoffset: 52; opacity: 0; transform: translateY(-2px); }
          15%  { opacity: 0.9; }
          70%  { stroke-dashoffset: 0; opacity: 0.9; transform: translateY(1px); }
          100% { stroke-dashoffset: 0; opacity: 0; transform: translateY(2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .licenses * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
