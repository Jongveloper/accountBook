import React from 'react';
import { history } from '../redux/configureStore';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

import { pathURI } from './Path';

//pages
import SignIn from '../pages/SignIn';

import { Section } from '../elements';
const Route = () => {
  return (
    <>
      <Section>
        <Switch>
          <PublicRoute path={pathURI.signIn} component={SignIn} exact />
        </Switch>
      </Section>
    </>
  )
}

export default Route;