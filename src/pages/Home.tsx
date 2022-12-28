import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthGoogleContext from '../contexts/AuthGoogleContext';

const Home = () => {
  const { user } = useContext(AuthGoogleContext);
  if (user) return <Link to='/play'>Play</Link>;
  return <h2>Sign in to play</h2>;
};

export default Home;
