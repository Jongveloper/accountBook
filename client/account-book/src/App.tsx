import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Route from './route/Route';
import { history } from './redux/configureStore';
import SignIn from './pages/SignIn';
function App() {
  return (
    <ConnectedRouter history={history}>
      <Route />
    </ConnectedRouter>
  );
}

export default App;
