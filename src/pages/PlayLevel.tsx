import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterBar from '../components/CharacterBar';
import GameImage from '../components/GameImage';
import GameContext from '../contexts/GameContext';
import Container from '../components/Container';
import Timer from '../components/Timer';
import styled from 'styled-components';

const PlayLevel = () => {
  const { levels, setSelectedLevel } = useContext(GameContext);
  const { levelId } = useParams();

  useEffect(() => {
    const level = levels.filter((l) => l.id === levelId)[0];
    if (level === undefined && levels.length === 0) setSelectedLevel(null);
    else setSelectedLevel(level);
  }, [levels]);

  return (
    <Container>
      <TopBar>
        <CharacterBar />
        <Timer />
      </TopBar>
      <GameImage />
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
