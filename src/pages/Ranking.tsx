import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import RankingLevelSelector from '../components/RankingLevelSelector';
import RankingList from '../components/RankingList';

const Ranking = () => {
  let { levelId } = useParams();
  if (!levelId) levelId = ' ';
  return (
    <>
      <Helmet>
        <title>Leaderboard</title>
        <meta
          name='description'
          content='Ranking with the best players of each level'
        />
      </Helmet>
      <Container>
        <Wrapper>
          <RankingLevelSelector currentId={levelId} />
          <RankingList levelId={levelId} />
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Ranking;
