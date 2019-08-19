import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';
import pokemonFont from './assets/fonts/pokemon.ttf';

import Root from './components/Root';
import Routes from './routes';

interface Props {
  history: History;
  persistor: Persistor;
  store: Store;
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Pokemon GB;
    src: url(${pokemonFont}) format('truetype');

  }
  html {
    font-family: Pokemon GB, Arial, Helvetica, sans-serif;
  }
`;

const RootComponentWithRoutes: React.FunctionComponent = () => (
  <Root>
    <Routes />
  </Root>
);

const App: React.FunctionComponent<Props> = ({ history, persistor, store }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Route path="/" component={RootComponentWithRoutes} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
