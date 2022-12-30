import React, { createContext, useEffect, useState } from 'react';
import { Character, Level } from '../global/types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';

type GameContextProviderType = {
  levels: Level[];
  selectedLevel: Level | null;
  setLevels: Function;
  setSelectedLevel: Function;
  clickLevelImage: Function;
};

const GameContext = createContext<GameContextProviderType>({
  levels: [],
  selectedLevel: null,
  setLevels: () => {},
  setSelectedLevel: () => {},
  clickLevelImage: () => {},
});

interface IProps {
  children?: any;
}

export const GameContextProvider: React.FC<IProps> = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const fetchCharacters = async (levelId: string) => {
      const collectionCharacterRef = collection(
        db,
        'levels',
        levelId,
        'characters'
      );
      const data = await getDocs(collectionCharacterRef);
      const characters = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
          found: false,
        };
      }) as Character[];
      return characters;
    };
    const loadLevels = async () => {
      const collectionRef = collection(db, 'levels');
      const data = await getDocs(collectionRef);
      const fetchedLevels = await Promise.all(
        data.docs.map(async (doc) => {
          const characters = await fetchCharacters(doc.id);
          return {
            ...doc.data(),
            id: doc.id,
            characters,
          } as unknown as Level;
        })
      );
      setLevels(fetchedLevels);
    };

    loadLevels();
  }, []);

  const clickLevelImage = (x: number, y: number) => {
    if (selectedLevel && selectedLevel.characters) {
      for (let character of selectedLevel.characters) {
        if (character.position.start.x <= x && x <= character.position.end.x) {
          if (
            character.position.start.y <= y &&
            y <= character.position.end.y
          ) {
            setSelectedLevel((prev) => {
              if (!prev) return null;
              return {
                ...prev,
                characters: prev?.characters.map((ch) => {
                  if (ch.id === character.id) {
                    character.found = true;
                    return character;
                  }
                  return ch;
                }),
              };
            });
          }
        }
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        levels,
        selectedLevel,
        setLevels,
        setSelectedLevel,
        clickLevelImage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
