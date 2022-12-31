import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
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
  resetGame: Function;
};

const GameContext = createContext<GameContextProviderType>({
  levels: [],
  selectedLevel: null,
  setLevels: () => {},
  setSelectedLevel: () => {},
  clickLevelImage: () => {},
  timer: {} as StopwatchResult,
  match: {} as Match,
  resetGame: () => {},
});

interface IProps {
  children?: any;
}

export const GameContextProvider: React.FC<IProps> = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const timer = useStopwatch({ autoStart: false });
  const [match, setMatch] = useState({ points: 0, finished: false } as Match);
  const { user } = useContext(AuthGoogleContext);

  const resetGame = () => {
    setSelectedLevel(null);
    setMatch({ finished: false, points: 0 });
  };

  const finishLevel = async () => {
    timer.pause();
    setMatch((prev) => {
      return {
        ...prev,
        finished: true,
      };
    });
    if (user && selectedLevel) {
      const highScoreRef = doc(
        db,
        'users',
        user.uid,
        'highscores',
        selectedLevel.id
      );
      const highScoreData = await getDoc(highScoreRef);
      if (highScoreData.exists()) {
        if (highScoreData.data().points < match.points) {
          await updateDoc(highScoreRef, { points: match.points });
          await setDoc(doc(db, 'matches', `${user.uid}-${selectedLevel.id}`), {
            points: match.points,
            level: { id: selectedLevel?.id, name: selectedLevel?.name },
            player: user?.displayName,
          });
        }
      } else {
        await setDoc(highScoreRef, {
          level: { id: selectedLevel?.id, name: selectedLevel?.name },
          points: match.points,
        });
        await setDoc(doc(db, 'matches', `${user.uid}-${selectedLevel.id}`), {
          points: match.points,
          level: { id: selectedLevel?.id, name: selectedLevel?.name },
          player: user?.displayName,
        });
      }
    }
    finishLevel;
  };

  const clickLevelImage = (x: number, y: number) => {
    if (selectedLevel && selectedLevel.characters) {
      let clickTime = timer.minutes * 60 + timer.seconds;
      let clickedOnCharacter = false;
      let characterAlreadyFound = false;
      if (clickTime > 200) clickTime = 200;

      for (let character of selectedLevel.characters) {
        if (
          character.position.start.x <= x &&
          x <= character.position.end.x &&
          character.position.start.y <= y &&
          y <= character.position.end.y
        ) {
          clickedOnCharacter = true;
          characterAlreadyFound = character.found;
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
            (clickedOnCharacter && !characterAlreadyFound
              ? 1500 + 200 - clickTime
              : -150 - clickTime),
        };
      });
    }
  };

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
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
