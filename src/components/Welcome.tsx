import styled from 'styled-components';
import gamer_img from '../assets/img/gamer.svg';
import { useContext } from 'react';
import AuthGoogleContext from '../contexts/AuthGoogleContext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user, signInGoogle } = useContext(AuthGoogleContext);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>Can you find the characters fast?</h2>
      <p>Play some levels and make your way up the leaderboard</p>
      <img src={gamer_img} alt='' width='70%' />
      {user ? (
        <button onClick={() => navigate('/play')}>Play a level</button>
      ) : (
        <button onClick={() => signInGoogle()}>Sign in with Google</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-0);
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;

  img {
    margin-top: 10px;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default Welcome;
