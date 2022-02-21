import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const Home = () => {
  return (
    <div>
        
      <div>
        <Link to="/register"> Sign up!</Link>
      </div>
      <LoginForm />
      <Outlet />
    </div>
  );
};
