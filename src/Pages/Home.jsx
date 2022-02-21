import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";

export const Home = () => {
  return (
    <div>
        
      <div>
        <Link to="/prerequisite"> Sign up!</Link>
      </div>
      <LoginForm />
      <Outlet />
    </div>
  );
};
