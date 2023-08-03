import { createContext, useContext, useState } from "react";

interface IUserContext {
  userInfo: IUserInfo;
  setUser: ({ userId, userName }: IUserInfo) => void;
}

interface IUserInfo {
  userId: String;
  userName: String;
}

const UserContext = createContext<IUserContext>({
  userInfo: { userId: "", userName: "" },
  setUser: () => {},
});

export const useUserContent = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userId: "",
    userName: "",
  });

  const value: IUserContext = {
    userInfo,
    setUserInfo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
