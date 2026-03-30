export type Barre = {
  fret: number;
  fromString: number;
  toString: number;
};

export type ChordType = {
  frets: number[];
  type: string;
  barre?: Barre;
};

export const chordList: Record<string, ChordType> = {
  C: { frets: [-1, 3, 2, 0, 1, 0], type: "major" },

  D: { frets: [-1, -1, 0, 2, 3, 2], type: "major" },

  E: { frets: [0, 2, 2, 1, 0, 0], type: "major" },

  F: {
    frets: [1, 3, 3, 2, 1, 1],
    type: "major",
    barre: { fret: 1, fromString: 6, toString: 1 },
  },

  G: { frets: [3, 2, 0, 0, 0, 3], type: "major" },

  A: { frets: [-1, 0, 2, 2, 2, 0], type: "major" },

  B: {
    frets: [-1, 2, 4, 4, 4, 2],
    type: "major",
    barre: { fret: 2, fromString: 6, toString: 2 },
  },

  Cm: {
    frets: [-1, 3, 5, 5, 4, 3],
    type: "minor",
    barre: { fret: 3, fromString: 6, toString: 1 },
  },

  Dm: { frets: [-1, -1, 0, 2, 3, 1], type: "minor" },

  Em: { frets: [0, 2, 2, 0, 0, 0], type: "minor" },

  Fm: {
    frets: [1, 3, 3, 1, 1, 1],
    type: "minor",
    barre: { fret: 1, fromString: 6, toString: 1 },
  },

  Gm: {
    frets: [3, 5, 5, 3, 3, 3],
    type: "minor",
    barre: { fret: 3, fromString: 6, toString: 1 },
  },

  Am: { frets: [-1, 0, 2, 2, 1, 0], type: "minor" },

  Bm: {
    frets: [-1, 2, 4, 4, 3, 2],
    type: "minor",
    barre: { fret: 2, fromString: 6, toString: 1 },
  },
  
  Bb: {
    frets: [-1, 1, 3, 3, 3, 1],
    type: "major",
    barre: { fret: 1, fromString: 6, toString: 1 },
  },

  Bbm: {
    frets: [-1, 1, 3, 3, 2, 1],
    type: "minor",
    barre: { fret: 1, fromString: 6, toString: 1 },
  },
};