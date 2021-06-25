import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HomeNavigator from '../organisms/navigators/HomeNavigator';
import Weather from './Weather';

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Weather />
        </Route>
      </Switch>
    </>
  );
};

export default Pages;
