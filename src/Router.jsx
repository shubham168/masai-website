import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { RegisterPage } from "./components/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
