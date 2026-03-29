import { ChordDiagram } from "../../../components/Chord";
import { chordList } from "../../../data/chords";

type ListType = {
  typeChord: string;
}

export function ChordList({typeChord}:ListType){
  const list = Object.entries(chordList).filter(item => item[1].type === typeChord)
  
  return(
    <>
      <h2 className="text-2xl font-bold text-center mt-10 mb-10 ">Acordes {typeChord === "major"? "Maiores": "Menores"}</h2>
      <div className="flex justify-center flex-wrap">
          {list.map(item => <ChordDiagram key={item[0]} chord={item[0]} /> )}
      </div>
    </>
  )
}