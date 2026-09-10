type State = "expansion" | "contraction";

function SmallBank({ x, accent }: { x: number; accent: string }) {
  return (
    <g transform={`translate(${x}, 0)`} stroke={accent}>
      {/* pediment */}
      <path d="M0 14 L12 4 L24 14" />
      <path d="M2 14 L22 14" />
      {/* architrave */}
      <rect x="1" y="14" width="22" height="4" rx="0.5" />
      {/* columns */}
      <rect x="4" y="19" width="3" height="16" rx="0.5" />
      <rect x="10.5" y="19" width="3" height="16" rx="0.5" />
      <rect x="17" y="19" width="3" height="16" rx="0.5" />
      {/* base */}
      <rect x="0" y="35" width="24" height="4" rx="0.5" />
    </g>
  );
}

export function RationalMove({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";

  return (
    <div
      className="rational-move pointer-events-none flex w-full flex-col items-center"
      aria-hidden="true"
    >
      <span className="label flex h-4 items-center justify-center text-center text-[10px] text-muted-foreground">
        Rational move
      </span>

      <div className="relative mt-1 flex h-32 w-full items-end justify-center">
        {positive ? (
          /* expansion — 4 small banks + happy jumping stickman */
          <svg
            viewBox="0 0 200 76"
            className="h-28 w-auto"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g transform="translate(14, 18)">
              <SmallBank x={0} accent={accent} />
              <SmallBank x={36} accent={accent} />
              <SmallBank x={72} accent={accent} />
              <SmallBank x={108} accent={accent} />
            </g>

            {/* happy stickman — jumping with arms up, loops */}
            <g transform="translate(172, 70)" stroke={accent}>
              <g className="happy-jump">
                <circle cx="0" cy="-20" r="3" />
                <path d="M0 -17 L0 -7" />
                {/* arms up — celebrate */}
                <path d="M0 -15 L-6 -22" />
                <path d="M0 -15 L6 -22" />
                {/* legs */}
                <path d="M0 -7 L-5 0 L-6 3" />
                <path d="M0 -7 L5 0 L6 3" />
              </g>
            </g>
          </svg>
        ) : (
          /* contraction — stickman in a slow yoga tree pose */
          <svg
            viewBox="0 0 120 76"
            className="h-28 w-auto"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g transform="translate(60, 72)">
              <g className="yoga-breathe">
                {/* head */}
                <circle cx="0" cy="-30" r="3.2" />
                {/* torso */}
                <path d="M0 -27 L0 -12" />
                {/* arms raised together overhead — tree pose */}
                <path d="M0 -24 L-5 -32 L-1 -37" />
                <path d="M0 -24 L5 -32 L1 -37" />
                {/* standing leg */}
                <path d="M0 -12 L0 0" />
                {/* bent leg — foot to knee */}
                <path d="M0 -12 L7 -8 L3 -3" />
              </g>
              {/* slow breath rings */}
              <circle className="breath-ring" cx="0" cy="-16" r="10" opacity="0" />
              <circle className="breath-ring breath-ring-late" cx="0" cy="-16" r="10" opacity="0" />
            </g>
          </svg>
        )}
      </div>

      <style>{`
        .happy-jump {
          animation: happy-jump 0.9s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          transform-origin: 0 3px;
        }
        @keyframes happy-jump {
          0%, 100% { transform: translateY(0) scaleY(1); }
          15% { transform: translateY(1px) scaleY(0.92); }
          45% { transform: translateY(-14px) scaleY(1.04); }
          70% { transform: translateY(0) scaleY(1); }
          82% { transform: translateY(0.5px) scaleY(0.96); }
        }
        .yoga-breathe {
          animation: yoga-sway 4s ease-in-out infinite;
          transform-origin: 0 0;
        }
        @keyframes yoga-sway {
          0%, 100% { transform: rotate(-2deg) translateY(0); }
          50% { transform: rotate(2deg) translateY(-2px); }
        }
        .breath-ring {
          animation: breath-ring 4s ease-out infinite;
          stroke-width: 1;
        }
        .breath-ring-late {
          animation-delay: 2s;
        }
        @keyframes breath-ring {
          0% { transform: scale(0.4); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rational-move * { animation: none !important; }
          .breath-ring { opacity: 0 !important; }
        }
      `}</style>
    </div>
  );
}
