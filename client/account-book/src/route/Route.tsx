import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { pathURI } from './Path';

//pages
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Calendar from '../components/Calendar';
import WriteAccount from '../pages/WriteAccount';
import Statistics from '../pages/Statistics';
import Info from '../pages/Info';
import SignUp from '../pages/SignUp';

import { Section } from '../elements';
const Route = () => {
  return (
    <>
      <Section>
        <Switch>
          <PublicRoute path={pathURI.signIn} component={SignIn} exact />
          <PrivateRoute path={pathURI.home} component={Home} exact />
          <PrivateRoute path={pathURI.calendar} component={Calendar} exact />
          <PrivateRoute path={pathURI.write} component={WriteAccount} exact />
          <PrivateRoute path={pathURI.chart} component={Statistics} exact />
          <PrivateRoute path={pathURI.info} component={Info} exact />
          <PublicRoute path={pathURI.signUp} component={SignUp} exact />
        </Switch>
      </Section>
    </>
  )
}

export default Route;