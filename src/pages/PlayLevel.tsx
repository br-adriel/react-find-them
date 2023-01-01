import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CharacterBar from '../components/CharacterBar';
import Container from '../components/Container';
import GameImage from '../components/GameImage';
import MatchFinished from '../components/MatchFinished';
import Timer from '../components/Timer';
import AuthGoogleContext from '../contexts/AuthGoogleContext';
import GameContext from '../contexts/GameContext';
import { Level } from '../global/types';

const PlayLevel = () => {
  const { levels, setSelectedLevel, match, timer, selectedLevel } =
    useContext(GameContext);
  const { user } = useContext(AuthGoogleContext);
  const { levelId } = useParams();

  useEffect(() => {
    const level = levels.filter((l) => l.id === levelId)[0] as Level;
    if (level === undefined && levels.length === 0) setSelectedLevel(null);
    else setSelectedLevel(JSON.parse(JSON.stringify(level)));
    timer.reset();
  }, [levels]);

  if (!user) return <Navigate to='/' />;
  return (
    <>
      <Helmet>
        <title>{`Playing ${selectedLevel?.name}`}</title>
        <meta
          name='description'
          content='Find all the characters of this level'
        />
      </Helmet>
      <Container>
        {match.finished ? (
          <MatchFinished />
        ) : (
          <>
            <TopBar>
              <CharacterBar />
              <Timer />
            </TopBar>
            <GameImage />
          </>
        )}
      </Container>
    </>
  );
};

const TopBar = styled.div`
  display: flex;
  width: calc(100% -20px);
  gap: 10px;
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: stretch;
`;

export default PlayLevel;
