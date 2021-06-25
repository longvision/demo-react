import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HomeNavigator from '../organisms/navigators/HomeNavigator';
import Weather from './Weather';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  tabs: {
    '& .MuiTab-textColorPrimary.Mui-selected ': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: 6,
  },
}));
const Pages = () => {
  const classes = useStyles();

  return (
    <Switch>
      <Route path="/">
        <Weather />
      </Route>
    </Switch>
  );
};

export default Pages;
