import { createContext, useContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const sendUserInfo = () => {};

  return (
    <RegisterContext.Provider value={{ userInfo, sendUserInfo }}>
      {children}
    </RegisterContext.Provider>
  );
};
