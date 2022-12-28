import React from 'react';
import { Level } from '../../global/types';
import * as S from './style';

const LevelCard: React.FC<{ level: Level; onClick: Function }> = ({
  level,
  onClick,
}) => {
  return (
    <S.Card>
      <div>
        <div>
          <h3>{level.name}</h3>
          <p>{level.characters.length} characters to find</p>
        </div>
        <button onClick={() => onClick()}>Play</button>
      </div>
      <img src={level.image} alt={`Level ${level.name} image`} />
    </S.Card>
  );
};

export default LevelCard;
