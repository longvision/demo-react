import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  map: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 600,
    height: 300,
    margin: 7,
  },
}));

function GlobalMap() {
  const classes = useStyles();
  return <div className={classes.map} />;
}

export default GlobalMap;
