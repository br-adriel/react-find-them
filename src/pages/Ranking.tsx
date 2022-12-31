import styled from 'styled-components';
import Container from '../components/Container';
import RankingLevelSelector from '../components/RankingLevelSelector';
import { Navigate, useParams } from 'react-router-dom';

const Ranking = () => {
  let { levelId } = useParams();
  if (!levelId) levelId = ' ';
  return (
    <Wrapper>
      <RankingLevelSelector currentId={levelId} />
    </Wrapper>
  );
};

const Wrapper = styled(Container)``;

export default Ranking;
