import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import InfoIcon from '@material-ui/icons/Info';
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
  singleContainer: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BFBFBF',
    position: 'relative',
    // minHeight: 370,
    // essa imagem nao eh quadrada, por isso da borda.
    minWidth: 354,
    // margin: 7,
    [theme.breakpoints.up('sm')]: { width: 454, height: 454 },
    [theme.breakpoints.up('md')]: { width: 456, height: 456 },
    [theme.breakpoints.up('lg')]: { width: 584, height: 585 },
    [theme.breakpoints.up('xl')]: { width: 805, height: 805 },
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
  singleImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    width: 354,
    height: 354,
    [theme.breakpoints.up('sm')]: {
      width: 450,
      height: 450,
    },
    [theme.breakpoints.up('md')]: {
      width: 450,
      height: 450,
    },
    [theme.breakpoints.up('lg')]: {
      width: 580,
      height: 580,
    },
    [theme.breakpoints.up('xl')]: {
      width: 800,
      height: 800,
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
  singleShapes: {
    zIndex: 0,
    position: 'absolute',
    // marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    width: 354,
    height: 360,
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
      width: 450,
      height: 450,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 1,
    },
    [theme.breakpoints.up('lg')]: {
      width: 580,
      height: 580,
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
      width: 800,
      height: 800,
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
  singleBacias: {
    zIndex: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    width: 354,
    height: 360,
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
      width: 450,
      height: 450,
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 1,
    },
    [theme.breakpoints.up('lg')]: {
      width: 580,
      height: 580,
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
      width: 800,
      height: 800,
    },
  },
  subtitle: {
    width: '60%',
    zIndex: 0,
    position: 'absolute',
    top: 235,
    left: 44,
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      zIndex: 0,
      position: 'absolute',
      top: 403,
      left: 44,
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      zIndex: 0,
      position: 'absolute',
      top: 225,
      left: 44,
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
      zIndex: 0,
      position: 'absolute',
      top: 340,
      left: 44,
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
      zIndex: 0,
      position: 'absolute',
      top: 448,
      left: 44,
    },
  },
  singleSubtitle: {
    width: '50%',
    zIndex: 0,
    position: 'absolute',
    top: 320,
    left: 44,
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      zIndex: 0,
      position: 'absolute',
      top: 410,
      left: 44,
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      zIndex: 0,
      position: 'absolute',
      top: 410,
      left: 44,
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
      zIndex: 0,
      position: 'absolute',
      top: 520,
      left: 44,
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
      zIndex: 0,
      position: 'absolute',
      top: 718,
      left: 44,
    },
  },
  singleButton: {
    top: 310,
    left: 0,
    width: 44,
    height: 44,
    backgroundColor: 'gray',
    zIndex: 0,
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      zIndex: 0,
      position: 'absolute',
      top: 405,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      zIndex: 0,
      position: 'absolute',
      top: 410,
      left: 0,
    },
    [theme.breakpoints.up('lg')]: {
      zIndex: 0,
      position: 'absolute',
      top: 520,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 0,
      position: 'absolute',
      top: 758,
      left: 0,
    },
  },

  button: {
    width: 44,
    height: 44,
    backgroundColor: 'gray',
    zIndex: 0,
    position: 'absolute',
    left: 0,

    [theme.breakpoints.up('sm')]: {
      zIndex: 0,
      position: 'absolute',
      top: 408,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      zIndex: 0,
      position: 'absolute',
      top: 208,
      left: 0,
    },
    [theme.breakpoints.up('lg')]: {
      zIndex: 0,
      position: 'absolute',
      top: 338,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 0,
      position: 'absolute',
      top: 458,
      left: 0,
    },
  },
}));

function BrasilMap({ shape, checked }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const selectedBrasilMap = useSelector(
    (state) => state.images.selectedBrasilMap,
  );

  const subtitle = useSelector((state) => state.images.subtitle);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    setShow(!show);
  };
  return (
    <Box
      className={
        checked === 'brasil' ? classes.singleContainer : classes.container
      }
      border={selectedBrasilMap[0] ? 2 : 0}
    >
      {selectedBrasilMap && selectedBrasilMap.length ? (
        <>
          {subtitle && show && (
            <img
              src={subtitle}
              alt="label"
              className={
                checked === 'brasil' ? classes.singleSubtitle : classes.subtitle
              }
            />
          )}

          <img
            className={
              checked === 'brasil' ? classes.singleShapes : classes.shapes
            }
            src={Estados}
            alt="Estados"
          />
          {shape && shape.includes('Bacias') && (
            <img
              className={
                checked === 'brasil' ? classes.singleBacias : classes.bacias
              }
              src={Bacias}
              alt="Bacias"
            />
          )}
          <Map
            className={
              checked === 'brasil' ? classes.singleImage : classes.image
            }
            selectedMap={selectedBrasilMap[0]}
          />
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton
              value="bold"
              aria-label="bold"
              className={
                checked === 'brasil' ? classes.singleButton : classes.button
              }
            >
              <InfoIcon />
            </ToggleButton>
          </ToggleButtonGroup>
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
