import { useParams, type Params } from "react-router-dom";
import { ChordList } from "./components/ChordList";

export default function Chords() {
  const { type } = useParams<Params>();

  return <div>{type ? <ChordList typeChord={type} /> : <>"Carregando"</>}</div>;
}
