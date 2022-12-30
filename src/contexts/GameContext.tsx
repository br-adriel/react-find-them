import React, { createContext, useEffect, useState } from 'react';
import { Character, Level } from '../global/types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { StopwatchResult, useStopwatch } from 'react-timer-hook';

type GameContextProviderType = {
  levels: Level[];
  selectedLevel: Level | null;
  setLevels: Function;
  setSelectedLevel: Function;
  clickLevelImage: Function;
  timer: StopwatchResult;
};

const GameContext = createContext<GameContextProviderType>({
  levels: [],
  selectedLevel: null,
  setLevels: () => {},
  setSelectedLevel: () => {},
  clickLevelImage: () => {},
  timer: {} as StopwatchResult,
});

interface IProps {
  children?: any;
}

export const GameContextProvider: React.FC<IProps> = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const timer = useStopwatch({ autoStart: false });

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

  const finishLevel = () => {
    timer.pause();
  };

  useEffect(() => {
    if (selectedLevel) {
      let allCharactersFound = true;
      for (let character of selectedLevel.characters) {
        if (!character.found) {
          allCharactersFound = false;
          break;
        }
      }
      if (allCharactersFound) finishLevel();
    }
  }, [selectedLevel]);

  const clickLevelImage = (x: number, y: number) => {
    if (selectedLevel && selectedLevel.characters) {
      for (let character of selectedLevel.characters) {
        if (
          character.position.start.x <= x &&
          x <= character.position.end.x &&
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
  };

  return (
    <GameContext.Provider
      value={{
        levels,
        selectedLevel,
        setLevels,
        setSelectedLevel,
        clickLevelImage,
        timer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
