import React from 'react';
// component
import Header from './components/Header';
import Navigation from './components/Navigation';
// connected-react-router
import { ConnectedRouter } from 'connected-react-router';
//route
import Route from './route/Route';
//redux
import { history } from './redux/configureStore';
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
