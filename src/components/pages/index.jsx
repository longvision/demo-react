import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeNavigator from '../organisms/navigators/HomeNavigator';
import Weather from './Weather';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#eaeaea',
  },
}));
const Pages = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <HomeNavigator />
      <Switch>
        <Route path="/clima">
          <Weather />
        </Route>
      </Switch>
    </Box>
  );
};

export default Pages;
