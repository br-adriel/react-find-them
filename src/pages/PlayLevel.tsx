import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterBar from '../components/CharacterBar';
import GameImage from '../components/GameImage';
import GameContext from '../contexts/GameContext';
import Container from '../components/Container';

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
      <CharacterBar />
      <GameImage />
    </Container>
  );
};

export default PlayLevel;
