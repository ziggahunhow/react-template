import React from "react";
import { BrowserRouter } from "react-router-dom";
import ROUTES, { RenderRoutes } from "./helpers/routes";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import getLocaleData from "./locales";

function App() {
  const { language } = useSelector(state => state.user);
  return (
    <IntlProvider locale={language} messages={getLocaleData(language)}>
      <BrowserRouter>
        <RenderRoutes routes={ROUTES} />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
