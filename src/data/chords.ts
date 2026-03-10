export type ChordType = {
  frets: number[];
  type: string;
};

export const chordList: Record<string, ChordType> = {
  A: { frets: [-1, 0, 2, 2, 2, 0], type: "Maior" },
  B: { frets: [-1, 2, 4, 4, 4, 2], type: "Maior" },
  C: { frets: [-1, 3, 2, 0, 1, 0], type: "Maior" },
  D: { frets: [-1, -1, 0, 2, 3, 2], type: "Maior" },
  E: { frets: [0, 2, 2, 1, 0, 0], type: "Maior" },
  F: { frets: [1, 3, 3, 2, 1, 1], type: "Maior" },
  G: { frets: [3, 2, 0, 0, 0, 3], type: "Maior" },

  Am: { frets: [-1, 0, 2, 2, 1, 0], type: "Menor" },
  Bm: { frets: [-1, 2, 4, 4, 3, 2], type: "Menor" },
  Cm: { frets: [-1, 3, 5, 5, 4, 3], type: "Menor" },
  Dm: { frets: [-1, -1, 0, 2, 3, 1], type: "Menor" },
  Em: { frets: [0, 2, 2, 0, 0, 0], type: "Menor" },
  Fm: { frets: [1, 3, 3, 1, 1, 1], type: "Menor" },
  Gm: { frets: [3, 5, 5, 3, 3, 3], type: "Menor" },
};