import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  map: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    // minHeight: 161.55,
    // minWidth: 370,

    margin: 7,
    height: 150,
    // 1920
    // 1080
    [theme.breakpoints.up('sm')]: { height: 300 },
    [theme.breakpoints.up('md')]: { height: 250 },
    [theme.breakpoints.up('lg')]: { height: 310 },
    [theme.breakpoints.up('xl')]: { height: 310 },
  },
  image: {
    height: 150,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: { height: 300, backgroundSize: 'cover' },
    [theme.breakpoints.up('md')]: { height: 250, backgroundSize: 'cover' },
    [theme.breakpoints.up('lg')]: { height: 310, backgroundSize: 'cover' },
    [theme.breakpoints.up('xl')]: { height: 310, backgroundSize: 'cover' },
  },
}));

function GlobalMap() {
  const classes = useStyles();
  return (
    <div className={classes.map}>
      <img
        className={classes.image}
        alt="mapa_global"
        src="https://storage.googleapis.com/imagens.clima.tempook.com/web/global/hist/med/pnmm/web_global_hist_med_pnmm_2020-Feb_layer1_3f090255.png"
      />
    </div>
  );
}

export default GlobalMap;
