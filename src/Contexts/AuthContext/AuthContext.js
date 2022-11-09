import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../Configs/firebase.config";
export const MyAuthContext = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cUser) => {
      setUser(cUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const signInWithMail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  return (
    <div>
      <MyAuthContext.Provider
        value={{
          createUser,
          user,
          loading,
          signInWithMail,
          signOutUser,
          googleSignIn,
        }}
      >
        {children}
      </MyAuthContext.Provider>
    </div>
  );
};

export default AuthContext;
