import { createContext, useContext, useState } from "react";

export const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const sendUserInfo = () => {};

  return (
    <InfoContext.Provider value={{ userInfo, sendUserInfo }}>
      
      {children}
    </InfoContext.Provider>
  );
};
