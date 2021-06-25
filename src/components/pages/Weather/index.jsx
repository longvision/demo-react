import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import WeatherTemplate from '../../smartTemplates/WeatherTemplate';

const Weather = () => {
  return (
    <Switch>
      <Route path="/">
        <WeatherTemplate />
      </Route>
    </Switch>
  );
};

export default Weather;
