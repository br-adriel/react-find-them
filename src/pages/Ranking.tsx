import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import RankingLevelSelector from '../components/RankingLevelSelector';
import RankingList from '../components/RankingList';

const Ranking = () => {
  let { levelId } = useParams();
  if (!levelId) levelId = ' ';
  return (
    <Container>
      <Wrapper>
        <RankingLevelSelector currentId={levelId} />
        <RankingList levelId={levelId} />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Ranking;
