import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Weather from './Weather';

const Pages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.images.getTokenAsync();
  }, []);

  return (
    <Switch>
      <Route path="/">
        <Weather />
      </Route>
    </Switch>
  );
};

export default Pages;
