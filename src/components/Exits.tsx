type State = "expansion" | "contraction";

export function Exits({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";
  

  return (
    <div
      className="exits pointer-events-none absolute right-8 bottom-8 flex w-40 flex-col items-center sm:right-14 sm:bottom-10 sm:w-48"
      aria-hidden="true"
    >
      <span className="label flex h-4 w-full items-center justify-center text-center text-[10px] text-muted-foreground">
        Exits
      </span>

      <div className="relative mt-1 flex h-28 w-full flex-col items-center justify-center">
        {/* closed bank + running man */}
        <svg
          viewBox="0 0 118 76"
          className="h-20 w-auto translate-x-2"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* pediment */}
          <path d="M8 24 L40 6 L72 24" />
          <path d="M12 24 L68 24" />

          {/* cross on top — closed */}
          <path d="M40 6 L40 16" />
          <path d="M35 11 L45 11" />

          {/* architrave */}
          <rect x="10" y="24" width="60" height="7" rx="0.5" />

          {/* columns */}
          <rect x="18" y="34" width="6" height="30" rx="0.5" />
          <rect x="30" y="34" width="6" height="30" rx="0.5" />
          <rect x="44" y="34" width="6" height="30" rx="0.5" />
          <rect x="56" y="34" width="6" height="30" rx="0.5" />

          {/* base */}
          <rect x="8" y="64" width="64" height="7" rx="0.5" />

          {/* closed doors / barrier line */}
          <path d="M40 34 L40 64" strokeDasharray="3 2" opacity="0.6" />

          {/* running man — runs out, fades away, loops */}
          <g transform="translate(80, 66)">
            <g className="exit-runner-move">
              {/* pose A — legs apart */}
              <g className="exit-pose-a">
                <circle cx="0" cy="-17" r="2.8" />
                <path d="M0 -14 L0 -5" />
                <path d="M0 -12 L5 -8" />
                <path d="M0 -12 L-5 -9" />
                <path d="M0 -5 L5 1 L6 4" />
                <path d="M0 -5 L-5 0 L-6 4" />
              </g>
              {/* pose B — legs crossed */}
              <g className="exit-pose-b">
                <circle cx="0" cy="-17" r="2.8" />
                <path d="M0 -14 L0 -5" />
                <path d="M0 -12 L-5 -7" />
                <path d="M0 -12 L5 -10" />
                <path d="M0 -5 L-2 1 L1 4" />
                <path d="M0 -5 L2 0 L-1 4" />
              </g>
            </g>
          </g>
        </svg>

        <span className="label block -translate-x-2 text-center text-[10px] text-black">
          {positive ? "cheap" : "priced by the crowd"}
        </span>
      </div>

      <style>{`
        .exit-runner-move {
          animation: exit-runner-move 2.6s linear infinite;
        }
        @keyframes exit-runner-move {
          0% { transform: translateX(-8px); opacity: 0; }
          12% { opacity: 1; }
          65% { opacity: 1; }
          100% { transform: translateX(30px); opacity: 0; }
        }
        .exit-pose-a {
          animation: exit-pose-a 0.4s steps(1) infinite;
        }
        .exit-pose-b {
          animation: exit-pose-b 0.4s steps(1) infinite;
        }
        @keyframes exit-pose-a {
          0%, 49.9% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes exit-pose-b {
          0%, 49.9% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .exits * { animation: none !important; }
          .exit-pose-b { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
