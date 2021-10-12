import React from 'react';
import { history } from '../redux/configureStore';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

import { pathURI } from './Path';

import { Section } from '../elements';
const Route = () => {
  return (
    <>
      <Section>
        <Switch>
        </Switch>
      </Section>
    </>
  )
}