import { useContext } from 'react';
import GameContext from '../../contexts/GameContext';
import RankingLevelButton from './RankingLevelButton';
import styled from 'styled-components';

interface IProps {
  currentId: string;
}

const RankingLevelSelector: React.FC<IProps> = ({ currentId }) => {
  const { levels } = useContext(GameContext);
  return (
    <Wrapper>
      <RankingLevelButton
        level={{ name: 'All', id: 'all' }}
        current={currentId === 'all'}
      />
      {levels.map((level) => {
        return (
          <RankingLevelButton
            key={level.id}
            level={level}
            current={currentId === level.id}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-wrap: wrap;
`;

export default RankingLevelSelector;
