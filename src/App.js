import React from "react";
import { BrowserRouter } from "react-router-dom";
import ROUTES, { RenderRoutes } from "./helpers/routes";

function App() {
  return (
    <BrowserRouter>
      <RenderRoutes routes={ROUTES} />
    </BrowserRouter>
  );
}

export default App;
