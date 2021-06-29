import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  map: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 300,
    margin: 7,
    width: '100%',
    [theme.breakpoints.up('tablet')]: { height: 300, width: 600 },
  },
}));

function GlobalMap() {
  const classes = useStyles();
  return <div className={classes.map} />;
}

export default GlobalMap;
