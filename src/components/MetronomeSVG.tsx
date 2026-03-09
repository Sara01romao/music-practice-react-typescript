type MetronomeSVGProps = {
  bpmSpeed: number;
  isPlaying: boolean;
};

export function MetronomeSVG({ bpmSpeed, isPlaying }: MetronomeSVGProps) {
  const duration = 60 / bpmSpeed;
  const animationStyle = isPlaying
    ? {
        transformOrigin: "60px 40px",
        animation: `swing ${duration / 2}s infinite alternate`
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
       
        <polygon
          points="30,170 90,170 75,20 45,20"
          fill="#e5e7eb"
          stroke="#374151"
          strokeWidth="3"
        />

        <rect
          x="25"
          y="170"
          width="70"
          height="10"
          fill="#374151"
        />

        <line
          x1="60"
          y1="40"
          x2="60"
          y2="140"
          stroke="#111827"
          strokeWidth="4"
          style={animationStyle}
        />

        <circle
          cx="60"
          cy="120"
          r="8"
          fill="#111827"
          style={animationStyle}
        />

        <style>
          {`
          @keyframes swing {
            from {
              transform: rotate(-25deg);
            }
            to {
              transform: rotate(25deg);
            }
          }
          `}
        </style>
      </svg>
    </div>
  );
}