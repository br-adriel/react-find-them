import { useContext, useEffect } from 'react';
import GameContext from '../contexts/GameContext';
import Container from '../components/Container';
import CharacterBar from '../components/CharacterBar';
import { useParams } from 'react-router-dom';

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
    </Container>
  );
};

export default PlayLevel;
