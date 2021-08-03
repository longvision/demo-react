import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Map from '../../../atoms/map/Map';
import Bacia from '../../../../assets/images/contornos/web_brasil_layer4.png';
import Estado from '../../../../assets/images/contornos/web_brasil_layer3.png';

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
    width: 254 * 1.026,
    height: 260 * 1.026,
    top: -3,
    left: -4,

    [theme.breakpoints.up('sm')]: {
      width: 450 * 1.026,
      height: 450 * 1.026,
      zIndex: 0,
      position: 'absolute',
      top: -5,
      left: -6,
    },
    [theme.breakpoints.up('md')]: {
      width: 250 * 1.026,
      height: 250 * 1.026,
      zIndex: 0,
      position: 'absolute',
      top: -2,
      left: -2,
    },
    [theme.breakpoints.up('lg')]: {
      width: 380 * 1.026,
      height: 380 * 1.026,
      zIndex: 0,
      position: 'absolute',
      top: -4,
      left: -5,
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 0,
      position: 'absolute',
      top: -4,
      left: -5,
      width: 500 * 1.026,
      height: 500 * 1.026,
    },
  },
}));

function BrasilMap({ shape }) {
  const classes = useStyles();

  const selectedBrasilMap = useSelector(
    (state) => state.images.selectedBrasilMap,
  );

  function changeShape(shapes) {
    switch (shapes) {
      case '0':
        return Bacia;
      case 1:
        return Estado;
      default:
        return Bacia;
    }
  }

  return (
    <Box className={classes.container} border={selectedBrasilMap[0] ? 2 : 0}>
      {selectedBrasilMap && selectedBrasilMap.length ? (
        <>
          {shape !== null && (
            <img
              className={classes.shapes}
              src={changeShape(shape)}
              alt="Contorno"
            />
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
