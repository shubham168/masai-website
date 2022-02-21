import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { InfoPage } from "./Pages/InfoPage";
import { PrerequisitePage } from "./Pages/PrerequisitePage";
import { RegisterPage } from "./Pages/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prerequisite" element={<PrerequisitePage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
};
