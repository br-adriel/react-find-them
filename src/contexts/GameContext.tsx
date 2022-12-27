import React, { createContext, useEffect, useState } from 'react';
import { Level } from '../global/types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';

type GameContextProviderType = {
  levels: Level[];
  selectedLevel: Level | null;
  setLevels: Function;
  setSelectedLevel: Function;
};

const GameContext = createContext<GameContextProviderType>({
  levels: [],
  selectedLevel: null,
  setLevels: () => {},
  setSelectedLevel: () => {},
});

interface IProps {
  children?: any;
}

export const GameContextProvider: React.FC<IProps> = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const loadLevels = async () => {
      const collectionRef = collection(db, 'levels');
      const data = await getDocs(collectionRef);
      const fetchedLlevels = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      }) as Level[];
      setLevels(fetchedLlevels);
    };

    loadLevels();
  }, []);

  return (
    <GameContext.Provider
      value={{ levels, selectedLevel, setLevels, setSelectedLevel }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
