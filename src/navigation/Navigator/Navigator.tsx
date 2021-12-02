import React from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "../../pages/GamePage";

import { paths } from "../paths";

const { root } = paths;

function Navigator() {
  return (
    <Routes>
      <Route path={root} element={<GamePage />} />
    </Routes>
  );
}

export default React.memo(Navigator);
