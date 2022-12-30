import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { StopwatchResult, useStopwatch } from 'react-timer-hook';
import { Character, Level, Match } from '../global/types';
import { db } from '../services/firebase.config';
import AuthGoogleContext from './AuthGoogleContext';

type GameContextProviderType = {
  levels: Level[];
  selectedLevel: Level | null;
  setLevels: Function;
  setSelectedLevel: Function;
  clickLevelImage: Function;
  timer: StopwatchResult;
  match: Match;
};

const GameContext = createContext<GameContextProviderType>({
  levels: [],
  selectedLevel: null,
  setLevels: () => {},
  setSelectedLevel: () => {},
  clickLevelImage: () => {},
  timer: {} as StopwatchResult,
  match: {} as Match,
});

interface IProps {
  children?: any;
}

export const GameContextProvider: React.FC<IProps> = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const timer = useStopwatch({ autoStart: false });
  const [match, setMatch] = useState({ points: 0 } as Match);
  const { user } = useContext(AuthGoogleContext);

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
    setMatch((prev) => {
      return {
        ...prev,
        level: selectedLevel,
        player: user,
      };
    });
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
      let clickTime = timer.minutes * 60 + timer.seconds;
      let clickedOnCharacter = false;
      if (clickTime > 200) clickTime = 200;

      for (let character of selectedLevel.characters) {
        if (
          character.position.start.x <= x &&
          x <= character.position.end.x &&
          character.position.start.y <= y &&
          y <= character.position.end.y
        ) {
          clickedOnCharacter = true;
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

      setMatch((prev) => {
        return {
          ...prev,
          points:
            prev.points +
            (clickedOnCharacter ? 1500 + 200 - clickTime : -150 - clickTime),
        };
      });
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
        match,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
