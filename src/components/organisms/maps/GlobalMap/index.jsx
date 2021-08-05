import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import InfoIcon from '@material-ui/icons/Info';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Map from '../../../atoms/map/Map';

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
    height: 158,
    // 1920
    // 1080
    [theme.breakpoints.up('sm')]: { height: 258 },
    [theme.breakpoints.up('md')]: { height: 256 },
    [theme.breakpoints.up('lg')]: { height: 384 },
    [theme.breakpoints.up('xl')]: { height: 505 },
  },
  image: {
    height: 150,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: 583.85, height: 255 },
    [theme.breakpoints.up('md')]: { width: 572.4, height: 250 },
    [theme.breakpoints.up('lg')]: { width: 870, height: 380 },
    [theme.breakpoints.up('xl')]: { width: 1144.74, height: 500 },
  },
  message: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: 583.85, height: 255 },
    [theme.breakpoints.up('md')]: { width: 572.4, height: 250 },
    [theme.breakpoints.up('lg')]: { width: 870, height: 380 },
    [theme.breakpoints.up('xl')]: { width: 1144.74, height: 500 },
  },
  subtitle: {
    width: '50%',
    zIndex: 0,
    position: 'absolute',
    top: 125,
    left: 44,
    [theme.breakpoints.up('sm')]: {
      width: '48%',
      zIndex: 0,
      position: 'absolute',
      top: 205,
      left: 44,
    },
    [theme.breakpoints.up('md')]: {
      width: '28%',
      zIndex: 0,
      position: 'absolute',
      top: 223,
      left: 44,
    },
    [theme.breakpoints.up('lg')]: {
      width: '28%',
      zIndex: 0,
      position: 'absolute',
      top: 335,
      left: 44,
    },
    [theme.breakpoints.up('xl')]: {
      width: '28%',
      zIndex: 0,
      position: 'absolute',
      top: 440,
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
    top: 110,
    [theme.breakpoints.up('sm')]: {
      zIndex: 0,
      position: 'absolute',
      top: 212,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      zIndex: 0,
      position: 'absolute',
      top: 210,
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
              <InfoIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          {subtitle && show && (
            <img src={subtitle} alt="label" className={classes.subtitle} />
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
