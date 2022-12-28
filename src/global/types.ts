export type Character = {
  id: string;
  image: string;
  found: boolean;
  position: {
    start: {
      x: number;
      y: number;
    };
    end: {
      x: number;
      y: number;
    };
  };
};

export type Level = {
  id: string;
  name: string;
  image: string;
  characters: Character[];
};
