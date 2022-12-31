import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import RankingLevelSelector from '../components/RankingLevelSelector';

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
