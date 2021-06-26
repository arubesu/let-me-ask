import { createContext, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase';

export const AuthContext = createContext({} as AuthContextValue)

interface AuthContextProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  signInWithGoogle: () => Promise<void>;
  user: User | undefined;
}

interface User {
  id: string;
  name: string;
  avatar: string;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (!user.displayName || !user.photoURL) {
          throw new Error("Missing google account information");
        }

        setUser({
          id: user.uid,
          avatar: user.photoURL,
          name: user.displayName,
        });
      }

    });
    return () => {
      unsubscribe();
    }
  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {

      if (!result.user.displayName || !result.user.photoURL) {
        throw new Error("Missing google account information");
      }

      setUser({
        id: result.user.uid,
        avatar: result.user.photoURL,
        name: result.user.displayName,
      });
    }
  }

  return (
    <AuthContext.Provider value={{
      signInWithGoogle,
      user,
    }
    }>
      {children}
    </AuthContext.Provider>
  )
}