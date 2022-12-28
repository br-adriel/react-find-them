import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../contexts/GameContext';
import { Level } from '../../global/types';
import LevelCard from '../LevelCard';
import * as S from './style';

const LevelSelector = () => {
  const { levels } = useContext(GameContext);
  const navigate = useNavigate();

  const selectLevel = (l: Level) => {
    navigate(`/play/${l.id}`);
  };

  return (
    <S.LevelsGrid>
      {levels.map((l) => {
        return (
          <LevelCard key={l.id} level={l} onClick={() => selectLevel(l)} />
        );
      })}
    </S.LevelsGrid>
  );
};

export default LevelSelector;
