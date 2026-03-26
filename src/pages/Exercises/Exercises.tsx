import { useParams } from "react-router-dom";
import { Metronome } from "../../components/Metronome";
import { progressionList } from "../../data/progression";

type Params = {
  id?: string;
};

export function Exercises() {
  const { id } = useParams<Params>();
  const chord = progressionList.find((item) => item.id === id);
  const prog: string[] = chord?.chords ?? [];

  return (
    <>
      {!chord ? (
        <header>
          <h2 className="text-xl text-center font-bold text-gray-900 sm:text-3xl">
            Exercício Não encontrado
          </h2>
        </header>
      ) : (
        <>
          <header>
            <h2 className="text-xl text-center font-bold text-gray-900 sm:text-3xl">
              {chord?.key}
              {chord?.type === "major" ? " Maior" : " Menor"}
            </h2>
          </header>

          <p className="mt-4 text-center text-lg mx-auto max-w-md text-gray-500">
            Progressão {chord.chords.join(" - ")}
          </p>

          <Metronome prog={prog} />
        </>
      )}
    </>
  );
}
