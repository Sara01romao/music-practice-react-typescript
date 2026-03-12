import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { MetronomeSVG } from "./MetronomeSVG";
import { ChordDiagram } from "./Chord";

export function Metronome() {
  const [bpm, setBpm] = useState(80);
  const [beats, setBeats] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [currentChord, setCurrentChord] = useState(0);

  const progression = useMemo(() => ["Em", "C", "G", "D"], []);

  const audioContextRef = useRef<AudioContext | null>(null);
  const compassCountRef = useRef(0);

  const initAudioContext = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }
  }, []);

  const playClick = useCallback((isAccent: boolean) => {
    const audioContext = audioContextRef.current;
    if (!audioContext || audioContext.state !== "running") return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(
      isAccent ? 1000 : 800,
      audioContext.currentTime,
    );

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.1,
    );

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    let timeoutId: number | null = null;
    let nextTickTime = performance.now();
    const intervalMs = (60 / bpm) * 1000;

    const tick = () => {
      setCurrentBeat((prev) => {
        const next = (prev + 1) % beats;
        playClick(next === 0);
        return next;
      });

      nextTickTime += intervalMs;
      const delay = Math.max(0, nextTickTime - performance.now());
      timeoutId = window.setTimeout(tick, delay);
    };

    nextTickTime = performance.now() + intervalMs;
    timeoutId = window.setTimeout(tick, intervalMs);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isPlaying, bpm, beats, playClick]);

  useEffect(() => {
    if (currentBeat === 0 && isPlaying && progression.length > 0) {
      compassCountRef.current += 1;
      const novoIndice = (compassCountRef.current - 1) % progression.length;
      setCurrentChord(novoIndice);
    }
  }, [currentBeat, isPlaying, progression]);

  const toggleMetronome = async () => {
    await initAudioContext();

    if (!isPlaying) {
      setCurrentBeat(0);
      setCurrentChord(0);
      compassCountRef.current = 0;
      playClick(true);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold">Metrônomo</h1>

      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <label htmlFor="bpm">BPM</label>
          <input
            id="bpm"
            type="range"
            min="40"
            max="240"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-32"
            disabled={isPlaying}
          />
          <span>{bpm}</span>
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="beats">Tempos</label>
          <select
            id="beats"
            value={beats}
            onChange={(e) => setBeats(Number(e.target.value))}
            className="border rounded p-1"
            disabled={isPlaying}
          >
            <option value={2}>2/4</option>
            <option value={3}>3/4</option>
            <option value={4}>4/4</option>
            <option value={6}>6/8</option>
          </select>
        </div>
      </div>

      {progression.length > 0 ? (
        <MetronomeSVG bpmSpeed={bpm} isPlaying={isPlaying} />
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div>
            <ChordDiagram
              key={progression[currentChord]}
              chord={progression[currentChord]}
            />
          </div>
        </div>
      )}

      <div className="flex gap-2" aria-label="Batidas">
        {Array.from({ length: beats }).map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${
              index === currentBeat ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Batida ${index + 1}${index === currentBeat ? " (atual)" : ""}`}
          />
        ))}
      </div>

      <button
        onClick={toggleMetronome}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        aria-label={isPlaying ? "Parar metrônomo" : "Iniciar metrônomo"}
      >
        {isPlaying ? "Parar" : "Iniciar"}
      </button>
    </div>
  );
}
