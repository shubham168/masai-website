import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginForm = () => {
  const { checkLoginInfo } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={(e) => checkLoginInfo(e)}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <input type="submit" name="submit" value="submit" />
      </form>
    </div>
  );
};
