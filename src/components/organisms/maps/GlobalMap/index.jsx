import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Map from '../../../atoms/map/Map';
import Ruler from '../../../../assets/icons/ruler.svg';
import { positions } from '../sharedPositions.js';
// A altura do mapa de Global deve ser igual aos lados do quadrado do mapa Brasil.
const MOBILE_HEIGHT = 158;
const TABLET_HEIGHT = 258;
const LAPTOP_HEIGHT = 256;
const DESKTOP_HEIGHT = 364;
const XL_HEIGHT = 455;
const WIDTH = '100%';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BFBFBF',
    position: 'relative',
    // minHeight: 161.55,
    // minWidth: 370,

    margin: 7,
    height: MOBILE_HEIGHT,
    // 1920
    // 1080
    [theme.breakpoints.up('sm')]: {
      height: TABLET_HEIGHT + 4,
      minWidth: TABLET_HEIGHT * 2.23,
    },
    [theme.breakpoints.up('md')]: {
      height: LAPTOP_HEIGHT + 4,
      minWidth: LAPTOP_HEIGHT * 2.23,
    },
    [theme.breakpoints.up('lg')]: {
      height: DESKTOP_HEIGHT + 4,
      minWidth: DESKTOP_HEIGHT * 2.23,
    },
    [theme.breakpoints.up('xl')]: {
      height: XL_HEIGHT + 5,
      minWidth: XL_HEIGHT * 2.23,
    },
  },
  image: {
    height: MOBILE_HEIGHT,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: { height: TABLET_HEIGHT },
    [theme.breakpoints.up('md')]: { height: LAPTOP_HEIGHT },
    [theme.breakpoints.up('lg')]: { height: DESKTOP_HEIGHT },
    [theme.breakpoints.up('xl')]: { height: XL_HEIGHT },
  },
  message: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: WIDTH,
    [theme.breakpoints.up('sm')]: { width: WIDTH, height: TABLET_HEIGHT },
    [theme.breakpoints.up('md')]: { width: WIDTH, height: LAPTOP_HEIGHT },
    [theme.breakpoints.up('lg')]: { width: WIDTH, height: DESKTOP_HEIGHT },
    [theme.breakpoints.up('xl')]: { width: WIDTH, height: XL_HEIGHT },
  },
  subtitle: {
    zIndex: 0,
    position: 'absolute',
    top: positions.TOP_MOBILE,
    left: 44,
    [theme.breakpoints.up('sm')]: {
      height: 44,
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_TABLET,
      left: 44,
    },
    [theme.breakpoints.up('md')]: {
      height: 44,
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_LAPTOP,
      left: 44,
    },
    [theme.breakpoints.up('lg')]: {
      height: 44,
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_DESKTOP,
      left: 44,
    },
    [theme.breakpoints.up('xl')]: {
      height: 44,
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_XL,
      left: 44,
    },
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: 'gray',
    zIndex: 0,
    position: 'absolute',
    left: 0,
    top: positions.TOP_MOBILE,
    [theme.breakpoints.up('sm')]: {
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_TABLET,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      zIndex: 0,
      position: 'absolute',
      top: positions.SOP_LAPTOP,
      left: 0,
    },
    [theme.breakpoints.up('lg')]: {
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_DESKTOP,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      zIndex: 0,
      position: 'absolute',
      top: positions.TOP_XL,
      left: 0,
    },
  },
  ruler: { height: 35, width: 35 },
  subBox: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
}));

function GlobalMap() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const loading = useSelector(
    (state) => state.loading.effects.images.getImageAsync,
  );

  const selectedGlobalMap = useSelector(
    (state) => state.images.selectedGlobalMap,
  );

  const subtitle = useSelector((state) => state.images.subtitle);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    setShow(!show);
  };
  useEffect(() => {}, [loading, selectedGlobalMap]);

  return (
    <Box className={classes.container} border={selectedGlobalMap[0] ? 2 : 0}>
      {selectedGlobalMap && selectedGlobalMap.length ? (
        <>
          <Map className={classes.image} selectedMap={selectedGlobalMap[0]} />
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton
              value="bold"
              aria-label="bold"
              className={classes.button}
            >
              <img src={Ruler} className={classes.ruler} />
            </ToggleButton>
          </ToggleButtonGroup>
          {subtitle && show && (
            <div className={classes.subBox}>
              <img src={subtitle} alt="label" className={classes.subtitle} />
            </div>
          )}
        </>
      ) : (
        <div className={classes.message}>
          <CircularProgress color="primary" />
        </div>
      )}
    </Box>
  );
}

export default GlobalMap;
