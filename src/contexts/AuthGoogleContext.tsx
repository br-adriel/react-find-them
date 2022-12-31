import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { app, db } from '../services/firebase.config';

type AuthGoogleProviderType = {
  user: User | null;
  signInGoogle: Function;
  signOutGoogle: Function;
};

const AuthGoogleContext = createContext<AuthGoogleProviderType>({
  signInGoogle: () => {},
  signOutGoogle: () => {},
  user: null,
});

interface IProps {
  children?: any;
}

export const AuthGoogleProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) setUser(JSON.parse(sessionUser));
    };

    loadStoreAuth();
  }, []);

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

          const userData = {
            name: user.displayName,
          };
          const docRef = doc(db, 'users', user.uid);
          await setDoc(docRef, userData, { merge: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const signOutGoogle = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('@AuthFirebase:token');
        sessionStorage.removeItem('@AuthFirebase:user');
        setUser(null);
      })
      .catch((error) => {});
  };

  return (
    <AuthGoogleContext.Provider value={{ user, signInGoogle, signOutGoogle }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};

export default AuthGoogleContext;
