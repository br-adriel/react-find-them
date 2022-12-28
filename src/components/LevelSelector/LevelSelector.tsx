import GameContext from '../../contexts/GameContext';
import { useContext } from 'react';
import * as S from './style';
import LevelCard from '../LevelCard';

const LevelSelector = () => {
  const { levels, setSelectedLevel } = useContext(GameContext);
  return (
    <S.LevelsGrid>
      {levels.map((l) => {
        return (
          <LevelCard key={l.id} level={l} onClick={() => setSelectedLevel(l)} />
        );
      })}
    </S.LevelsGrid>
  );
};

export default LevelSelector;
