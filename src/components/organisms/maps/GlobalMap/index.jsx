import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Map from '../../../atoms/map/Map';

const useStyles = makeStyles((theme) => ({
  map: {
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
    [theme.breakpoints.up('md')]: { height: 258 },
    [theme.breakpoints.up('lg')]: { height: 318 },
    [theme.breakpoints.up('xl')]: { height: 418 },
  },
  subtitle: {
    width: '50%',
    zIndex: 0,
    position: 'absolute',
    top: 120,
    left: 0,
    [theme.breakpoints.up('sm')]: {
      width: '33%',
      zIndex: 0,
      position: 'absolute',
      top: 220,
      left: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      zIndex: 0,
      position: 'absolute',
      top: 220,
      left: 0,
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
      zIndex: 0,
      position: 'absolute',
      top: 270,
      left: 0,
    },
    [theme.breakpoints.up('xl')]: {
      width: '30%',
      zIndex: 0,
      position: 'absolute',
      top: 360,
      left: 0,
    },
  },
  image: {
    height: 150,
    backgroundSize: 'cover',
    position: 'relative',
    [theme.breakpoints.up('sm')]: { height: 250 },
    [theme.breakpoints.up('md')]: { height: 250 },
    [theme.breakpoints.up('lg')]: { height: 310 },
    [theme.breakpoints.up('xl')]: { height: 410 },
  },
}));

function GlobalMap() {
  const classes = useStyles();
  const loading = useSelector(
    (state) => state.loading.effects.images.getImageAsync,
  );
  const subtitle = useSelector((state) => state.images.subtitle);

  const selectedGlobalMap = useSelector(
    (state) => state.images.selectedGlobalMap,
  );

  useEffect(() => {}, [loading, selectedGlobalMap]);
  return (
    <Box className={classes.map} border={selectedGlobalMap[0] ? 2 : 0}>
      {selectedGlobalMap && selectedGlobalMap.length ? (
        <>
          <Map style={classes.image} selectedMap={selectedGlobalMap[0]} />
          {subtitle && (
            <img src={subtitle} alt="label" className={classes.subtitle} />
          )}
        </>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Box>
  );
}

export default GlobalMap;
