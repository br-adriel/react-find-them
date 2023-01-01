import { useContext } from 'react';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import * as S from './style';
import Container from '../Container';
import { Google, BoxArrowRight, Trophy } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, signInGoogle, signOutGoogle } = useContext(AuthGoogleContext);
  const navigate = useNavigate();
  return (
    <S.HeaderTag>
      <Container>
        <S.LinkTag to='/'>
          <h1>FindThem!</h1>
        </S.LinkTag>
        <div>
          {user ? (
            <div>
              <img
                src={user.photoURL ? user.photoURL : ''}
                alt='Profile picture'
                title='Your profile picture'
                referrerPolicy='no-referrer'
              />
              <button
                type='button'
                onClick={() => signOutGoogle()}
                title='Sign out'
              >
                <BoxArrowRight />
              </button>
            </div>
          ) : (
            <button
              type='button'
              onClick={() => signInGoogle()}
              title='Sign in with google'
            >
              <Google />
            </button>
          )}
          <button
            type='button'
            onClick={() => navigate('/ranking')}
            title='Ranking'
          >
            <Trophy />
          </button>
        </div>
      </Container>
    </S.HeaderTag>
  );
};

export default Header;
