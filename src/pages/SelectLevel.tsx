import { useContext, useEffect } from 'react';
import Container from '../components/Container';
import LevelSelector from '../components/LevelSelector';
import GameContext from '../contexts/GameContext';

const SelectLevel = () => {
  const { resetGame } = useContext(GameContext);
  useEffect(() => {
    resetGame();
  }, []);
  return (
    <Container>
      <LevelSelector />
    </Container>
  );
};

export default SelectLevel;
