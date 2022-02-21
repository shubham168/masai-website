import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [prerequisite, setPrerequisite] = useState({});
  const sendUserInfo = (e) => {

  };
  const setUserprerequisite = (e) => {
    e.preventDefault();
    const { attend, laptop } = e.currentTarget;

    //validate
    setPrerequisite({
      attend: attend.checked,
      laptop: laptop.checked,
    });
    console.log(prerequisite)
    
  };

  return (
    <RegisterContext.Provider
      value={{ userInfo, setUserprerequisite, sendUserInfo }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
