import { User } from '@firebase/auth';

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

export type Match = {
  points: number;
  finished: boolean;
};

export type Highscore = {
  id: string;
  level: {
    id: string;
    name: string;
  };
  player: string;
  points: number;
  time: {
    minutes: number;
    seconds: number;
  };
};
