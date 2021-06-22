import React from 'react';
import { Paper, Grid, Tabs, Tab, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  tabs: {
    '& .MuiTab-textColorPrimary.Mui-selected ': {
      backgroundColor: theme.palette.secondary.light,
      height: 70,
      fontWeight: 'bold',
    },
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: 6,
  },
}));

const HomeNavigator = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper square className={classes.container}>
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="primary"
          onChange={handleChange}
          aria-label="Tempo Ok menu"
          className={classes.tabs}
        >
          <Tab label="Mapas" />
          <Tab label="Clima" />
          <Tab label="Animações" />
          <Tab label="Hídrica" />
          <Tab label="Eólica" />
          <Tab label="Estações" />
          <Tab label="Arquivos" />
        </Tabs>
      </Paper>
      <Box className={classes.divider} />
    </>
  );
};

export default HomeNavigator;
