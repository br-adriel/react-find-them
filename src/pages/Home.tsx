import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Container from '../components/Container';
import RankingList from '../components/RankingList';
import Welcome from '../components/Welcome';
import GameContext from '../contexts/GameContext';

const Home = () => {
  const { resetGame } = useContext(GameContext);

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <>
      <Helmet>
        <title>FindThem!</title>
        <meta
          name='description'
          content="Game where you need to find characters on a image, similar to Where's Wally?"
        />
      </Helmet>
      ;
      <Container>
        <Wrapper>
          <Welcome />
          <RankingList levelId='all' />
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 4fr;
  }
`;

export default Home;
