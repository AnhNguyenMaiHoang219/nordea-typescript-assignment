type BandPlays = {
  [key: string]: string[];
};

interface BandMember {
  name: string;
  age: number;
  plays: string[];
}

interface Band {
  members: {
    current: BandMember[];
    past: BandMember[];
  };
}

interface ExpectedBand {
  members: {
    current: BandMember[];
    past: BandMember[];
    all: string[];
  };
  plays: BandPlays;
}

export type { Band, BandMember, BandPlays, ExpectedBand };
