import { useContext } from 'react';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import * as S from './style';
import Container from '../Container';
import { Google, BoxArrowRight } from 'react-bootstrap-icons';

const Header = () => {
  const { user, signInGoogle, signOutGoogle } = useContext(AuthGoogleContext);
  return (
    <S.HeaderTag>
      <Container>
        <S.LinkTag to='/'>
          <h1>FindThem!</h1>
        </S.LinkTag>
        {user ? (
          <div>
            <img
              src={user.photoURL ? user.photoURL : ''}
              alt='Profile picture'
              title='Your profile picture'
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
      </Container>
    </S.HeaderTag>
  );
};

export default Header;
