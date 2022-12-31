import { useContext, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CharacterBar from '../components/CharacterBar';
import GameImage from '../components/GameImage';
import GameContext from '../contexts/GameContext';
import Container from '../components/Container';
import Timer from '../components/Timer';
import styled from 'styled-components';
import MatchFinished from '../components/MatchFinished';
import { Level } from '../global/types';
import AuthGoogleContext from '../contexts/AuthGoogleContext';

const PlayLevel = () => {
  const { levels, setSelectedLevel, match, timer } = useContext(GameContext);
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
