import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const checkLoginInfo = (e) => {
      e.preventDefault();
      const {username,password} = e.currentTarget;

      //validate
      username.value = "";
      password.value = "";
      
  };

  return (
    <AuthContext.Provider value={{ userInfo, checkLoginInfo }}>
      
      {children}
    </AuthContext.Provider>
  );
};
