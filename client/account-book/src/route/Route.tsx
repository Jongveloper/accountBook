import React from 'react';
import { history } from '../redux/configureStore';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

import { pathURI } from './Path';

//pages
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Calendar from '../components/Calendar';
import WriteAccount from '../pages/WriteAccount';
import Statistics from '../pages/Statistics';

import { Section } from '../elements';
const Route = () => {
  return (
    <>
      <Section>
        <Switch>
          <PublicRoute path={pathURI.signIn} component={SignIn} exact />
          <PublicRoute path={pathURI.home} component={Home} exact />
          <PublicRoute path={pathURI.calendar} component={Calendar} exact />
          <PublicRoute path={pathURI.write} component={WriteAccount} exact />
          <PublicRoute path={pathURI.chart} component={Statistics} exact />
        </Switch>
      </Section>
    </>
  )
}

export default Route;