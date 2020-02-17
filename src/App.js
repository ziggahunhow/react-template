import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import ROUTES, { RenderRoutes } from './helpers/routes';
import getLocaleData from './locales';

function App() {
  const { language } = useSelector(state => state.user);

  return (
    <IntlProvider locale={language} messages={getLocaleData(language)}>
      <BrowserRouter>
        <Container maxWidth="lg" className="pt-10">
          <CssBaseline />
          <RenderRoutes routes={ROUTES} />
        </Container>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
