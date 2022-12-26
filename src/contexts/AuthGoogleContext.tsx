import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../services/firebase.config';

type AuthGoogleProviderType = {
  user: User | null;
  signInGoogle: Function;
};

const AuthGoogleContext = createContext<AuthGoogleProviderType>({
  signInGoogle: () => {},
  user: null,
});

interface IProps {
  children?: any;
}

export const AuthGoogleProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUser(user);
        if (token) {
          sessionStorage.setItem('@AuthFirebase:token', token);
          sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <AuthGoogleContext.Provider value={{ user, signInGoogle }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};

export default AuthGoogleContext;
