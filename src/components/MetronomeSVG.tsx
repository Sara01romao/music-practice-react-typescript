type MetronomeSVGProps = {
  bpmSpeed: number;
  isPlaying: boolean;
};

export function MetronomeSVG({ bpmSpeed, isPlaying }: MetronomeSVGProps) {
  const duration = 60 / bpmSpeed;
  const animationStyle = isPlaying
    ? {
        transformOrigin: "60px 40px",
        animation: `swing ${duration / 2}s infinite alternate`,
      }
    : {
        transformOrigin: "60px 40px",
      };

  return (
    <div className="flex flex-col items-center gap-6">
      <svg
        width="140"
        height="200"
        viewBox="0 0 120 180"
        className="text-gray-800"
      >
        <path
          d="
      M60 20
      Q55 20 50 28
      L20 150
      Q20 165 35 165
      L85 165
      Q100 165 100 150
      L70 28
      Q65 20 60 20
      Z
    "
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <line
          x1="60"
          y1="60"
          x2="60"
          y2="130"
          stroke="#dae0e9"
          stroke-width="6"
          stroke-linecap="round"
        ></line>

        <line
          x1="60"
          y1="60"
          x2="60"
          y2="130"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          style={animationStyle}
        />

        <circle cx="60" cy="130" r="6" fill="#111827" style={animationStyle} />

        <rect
          x="54"
          y="95"
          width="12"
          height="6"
          rx="2"
          fill="#9ca3af"
          style={animationStyle}
        />

        <rect
          x="54"
          y="95"
          width="12"
          height="6"
          rx="2"
          fill="#9ca3af"
          style={animationStyle}
        />

        <style>
          {`
    @keyframes swing {
      from {
        transform: rotate(-30deg);
      }
      to {
        transform: rotate(30deg);
      }
    }
    `}
        </style>
      </svg>
    </div>
  );
}
