export type progressionType ={
  id: string;
  type: string;
  key: string;
  chords: string[];
}

export const progressionList: progressionType[] = [
  {
    id: "a",
    type: "major",
    key: "A",
    chords: ["A", "D", "A", "E"]
  },
  {
    id: "am",
    type: "minor",
    key: "A",
    chords: ["Am", "Dm", "Am", "E"]
  },
  {
    id: "c",
    type: "major",
    key: "C",
    chords: ["C", "F", "C", "G"]
  },
  {
    id: "cm",
    type: "minor",
    key: "C",
    chords: ["Cm", "Fm", "Cm", "G"]
  },
  {
    id: "d",
    type: "major",
    key: "D",
    chords: ["D", "G", "D", "A"]
  },
  {
    id: "dm",
    type: "minor",
    key: "D",
    chords: ["Dm", "Gm", "Dm", "A"]
  },
  {
    id: "e",
    type: "major",
    key: "E",
    chords: ["E", "A", "E", "B"]
  },
  {
    id: "em",
    type: "minor",
    key: "E",
    chords: ["Em", "Am", "Em", "B"]
  },
  {
    id: "f",
    type: "major",
    key: "F",
    chords: ["F", "Bb", "F", "C"]
  },
  {
    id: "fm",
    type: "minor",
    key: "F",
    chords: ["Fm", "Bbm", "Fm", "C"]
  },
  {
    id: "g",
    type: "major",
    key: "G",
    chords: ["G", "C", "G", "D"]
  },
  {
    id: "gm",
    type: "minor",
    key: "G",
    chords: ["Gm", "Cm", "Gm", "D"]
  }
];