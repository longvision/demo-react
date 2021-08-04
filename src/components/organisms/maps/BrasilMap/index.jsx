import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Map from '../../../atoms/map/Map';
import Bacias from '../../../../assets/images/contornos/web_brasil_layer3.png';
import Estados from '../../../../assets/images/contornos/web_brasil_layer4.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BFBFBF',
    position: 'relative',
    // minHeight: 370,
    // essa imagem nao eh quadrada, por isso da borda.
    minWidth: 254,
    // margin: 7,
    [theme.breakpoints.up('sm')]: { width: 454, height: 454 },
    [theme.breakpoints.up('md')]: { width: 256, height: 256 },
    [theme.breakpoints.up('lg')]: { width: 384, height: 385 },
    [theme.breakpoints.up('xl')]: { width: 505, height: 505 },
  },
  image: {
    // marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    width: 254,
    height: 254,
    [theme.breakpoints.up('sm')]: {
      width: 450,
      height: 450,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
    },
    [theme.breakpoints.up('lg')]: {
      width: 380,
      height: 380,
    },
    [theme.breakpoints.up('xl')]: {
      width: 500,
      height: 500,
    },
  },
  message: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: 255, height: 255 },
    [theme.breakpoints.up('md')]: { width: 572.4, height: 250 },
    [theme.breakpoints.up('lg')]: { width: 870, height: 380 },
    [theme.breakpoints.up('xl')]: { width: 1144.74, height: 500 },
  },
  shapes: {
    zIndex: 0,
    position: 'absolute',

    // marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    width: 254,
    height: 260,
    top: 0,
    left: 0,

    [theme.breakpoints.up('sm')]: {
      width: 450,
      height: 450,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 1,
    },
    [theme.breakpoints.up('lg')]: {
      width: 380,
      height: 380,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: 500,
      height: 500,
    },
  },
  bacias: {
    zIndex: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    width: 254,
    height: 260,
    top: 0,
    left: 0,

    [theme.breakpoints.up('sm')]: {
      width: 450,
      height: 450,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 1,
    },
    [theme.breakpoints.up('lg')]: {
      width: 380,
      height: 380,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 0,
      position: 'absolute',
      top: -4,
      left: -5,
      width: 500,
      height: 500,
    },
  },
  subtitle: {
    width: '100%',
    zIndex: 0,
    position: 'absolute',
    top: 190,
    left: 0,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      zIndex: 0,
      position: 'absolute',
      top: 390,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      zIndex: 0,
      position: 'absolute',
      top: 210,
      left: 0,
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      zIndex: 0,
      position: 'absolute',
      top: 310,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      zIndex: 0,
      position: 'absolute',
      top: 410,
      left: 0,
    },
  },
}));

function BrasilMap({ shape }) {
  const classes = useStyles();

  const selectedBrasilMap = useSelector(
    (state) => state.images.selectedBrasilMap,
  );

  const subtitle = useSelector((state) => state.images.subtitle);
  console.log({ shape });
  return (
    <Box className={classes.container} border={selectedBrasilMap[0] ? 2 : 0}>
      {selectedBrasilMap && selectedBrasilMap.length ? (
        <>
          {subtitle && (
            <img src={subtitle} alt="label" className={classes.subtitle} />
          )}

          <img className={classes.shapes} src={Estados} alt="Estados" />
          {shape && shape.includes('Bacias') && (
            <img className={classes.bacias} src={Bacias} alt="Bacias" />
          )}
          <Map className={classes.image} selectedMap={selectedBrasilMap[0]} />
        </>
      ) : (
        <div className={classes.message}>
          <CircularProgress color="primary" />
        </div>
      )}
    </Box>
  );
}

export default BrasilMap;
