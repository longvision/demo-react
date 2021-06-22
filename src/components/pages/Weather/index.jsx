import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherNavigator from '../../organisms/navigators/WeatherNavigator';
import HistoryTemplate from '../../smartTemplates/WeatherTemplate/HistoryTemplate';
import IndexTemplate from '../../smartTemplates/WeatherTemplate/IndexTemplate';

const Weather = () => {
  return (
    <div>
      <WeatherNavigator />
      <Switch>
        <Route path="/clima/historico">
          <HistoryTemplate />
        </Route>
        <Route path="/clima/indices">
          <IndexTemplate />
        </Route>
      </Switch>
    </div>
  );
};

export default Weather;
