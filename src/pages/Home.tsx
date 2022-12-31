import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthGoogleContext from '../contexts/AuthGoogleContext';
import GameContext from '../contexts/GameContext';

const Home = () => {
  const { user } = useContext(AuthGoogleContext);
  const { resetGame } = useContext(GameContext);

  useEffect(() => {
    resetGame();
  }, []);

  if (user) return <Link to='/play'>Play</Link>;
  return <h2>Sign in to play</h2>;
};

export default Home;
