import { useContext } from 'react';
import GameContext from '../../contexts/GameContext';
import * as S from './style';

const CharcterBar = () => {
  const { selectedLevel } = useContext(GameContext);

  if (!selectedLevel)
    return (
      <S.Wrapper>
        <h2>
          {selectedLevel === undefined ? 'Level not found' : 'Loading...'}
        </h2>
      </S.Wrapper>
    );
  return (
    <S.Wrapper>
      {selectedLevel.characters.map((c) => {
        return (
          <S.CharacterImage found={c.found} src={c.image} alt='' key={c.id} />
        );
      })}
    </S.Wrapper>
  );
};

export default CharcterBar;
