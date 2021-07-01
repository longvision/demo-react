import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { requirePropFactory } from '@material-ui/core';
import brasil from '../../../../assets/images/web_brasil_hist_clim_t2m_Mar_layer1.png';

const useStyles = makeStyles((theme) => ({
  map: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    // minHeight: 370,
    minWidth: 310,
    margin: 7,

    [theme.breakpoints.up('sm')]: { width: 450, height: '100%' },
    [theme.breakpoints.up('md')]: { width: 250, height: '100%' },

    [theme.breakpoints.up('lg')]: { width: 310, height: '100%' },
    [theme.breakpoints.up('xl')]: { width: 310, height: '100%' },
  },
  image: {
    padding: 5,
    height: 310,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      padding: 5,
      height: 450,
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('md')]: {
      padding: 5,
      height: 250,
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
      padding: 5,
      height: 310,
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('xl')]: {
      padding: 5,
      height: 310,
      backgroundSize: 'cover',
    },
  },
}));

function BrasilMap() {
  const classes = useStyles();
  return (
    <div className={classes.map}>
      <img className={classes.image} alt="mapa_brasil" src={brasil} />
    </div>
  );
}

export default BrasilMap;
