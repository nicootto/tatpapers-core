import React from "react";

import { Routes } from "./routes/AppRoutes";
import { MainMenu } from "../components/organisms/MainMenu/MainMenu";

export const App = () => {
  return (
    <>
      <header>
        <MainMenu />
      </header>
      <Routes />
    </>
  );
};
