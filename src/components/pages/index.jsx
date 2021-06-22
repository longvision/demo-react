import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeNavigator from '../organisms/navigators/HomeNavigator';
import Weather from './Weather';

const Pages = () => {
  return (
    <>
      <HomeNavigator />
      <Switch>
        <Route path="/clima">
          <Weather />
        </Route>
      </Switch>
    </>
  );
};

export default Pages;
