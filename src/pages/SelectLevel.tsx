import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Container from '../components/Container';
import LevelSelector from '../components/LevelSelector';
import AuthGoogleContext from '../contexts/AuthGoogleContext';
import GameContext from '../contexts/GameContext';

const SelectLevel = () => {
  const { resetGame } = useContext(GameContext);
  const { user } = useContext(AuthGoogleContext);

  useEffect(() => {
    resetGame();
  }, []);

  if (!user) return <Navigate to='/' />;
  return (
    <Container>
      <LevelSelector />
    </Container>
  );
};

export default SelectLevel;
