import { chordList } from "../data/chords";

type ChordDiagramProps = {
  chord: string;
};

export function ChordDiagram({ chord }: ChordDiagramProps) {
  const stringX = [20, 35, 50, 65, 80, 95];
  const chordData = chordList[chord];

  if (!chordData) {
    return <div>Acorde não encontrado</div>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-bold text-3xl">{chord}</span>

      <svg width="120" height="140">
        {stringX.map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="20"
            x2={x}
            y2="120"
            stroke="black"
            strokeWidth="2"
          />
        ))}

        <line x1="15" y1="20" x2="100" y2="20" stroke="black" strokeWidth="4" />

        {[30, 50, 70, 90, 110].map((y, i) => (
          <line
            key={i}
            x1="15"
            y1={y}
            x2="100"
            y2={y}
            stroke="black"
            strokeWidth="2"
          />
        ))}

        {chordData.frets.map((fret, stringIndex) => {
          const x = stringX[stringIndex];

          if (fret > 0) {
            const y = 30 + (fret - 1) * 20;

            return (
              <circle key={stringIndex} cx={x} cy={y} r="6" fill="black" />
            );
          }

          return null;
        })}

        {chordData.frets.map((fret, stringIndex) => {
          if (fret !== 0) return null;

          const x = stringX[stringIndex];

          return (
            <circle
              key={`open-${stringIndex}`}
              cx={x}
              cy="10"
              r="5"
              fill="none"
              stroke="green"
              strokeWidth="2"
            />
          );
        })}

        {chordData.frets.map((fret, stringIndex) => {
          if (fret !== -1) return null;

          const x = stringX[stringIndex];

          return (
            <text
              key={`mute-${stringIndex}`}
              x={x}
              y="12"
              textAnchor="middle"
              fontSize="12"
              fill="red"
            >
              X
            </text>
          );
        })}
      </svg>
    </div>
  );
}
