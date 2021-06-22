import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Grid, Tabs, Tab, Box } from '@material-ui/core';

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

const WeatherNavigator = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.container}>
      <Box />
    </Paper>
  );
};
export default WeatherNavigator;
