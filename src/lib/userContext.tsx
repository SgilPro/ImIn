"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/lib/firebase";
import { User } from "@firebase/auth";

interface IUserContext {
  userInfo: IUserInfo;
  setUserInfo: ({ user, userName }: IUserInfo) => void;
}

interface IUserInfo {
  user: User | null;
  userName: string | null;
}

export const UserContext = createContext<IUserContext>({
  userInfo: { user: null, userName: null },
  setUserInfo: () => {},
});

export const useUserContent = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    user: null,
    userName: null,
  });

  useEffect(() => {
    let unsubscribe = false;

    if (user) {
      // const ref = firestore.collection('users').doc(user.uid);
      // const json = firestore.toJSON();
      setUserInfo({
        user,
        userName: user.displayName,
      });
    } else {
      setUserInfo({
        user: null,
        userName: null,
      });
    }
  }, [user]);

  const value: IUserContext = {
    userInfo,
    setUserInfo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
