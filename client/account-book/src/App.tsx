import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Route from './route/Route';
import { history } from './redux/configureStore';
import Header from './components/Header';
import Navigation from './components/Navigation';
function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route />
      <Navigation />
    </ConnectedRouter>
  );
}

export default App;
