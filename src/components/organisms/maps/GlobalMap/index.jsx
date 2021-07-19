import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Map from '../../../atoms/map/Map';

const useStyles = makeStyles((theme) => ({
  map: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BFBFBF',

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
    width: '53%',
    zIndex: 1,
    position: 'absolute',
    top: 368,
    left: 120,
    [theme.breakpoints.up('sm')]: {
      width: '33%',
      zIndex: 1,
      position: 'absolute',
      top: 400,
      left: 100,
    },
    [theme.breakpoints.up('md')]: {
      width: '13%',
      zIndex: 1,
      position: 'absolute',
      top: 368,
      left: 85,
    },
    [theme.breakpoints.up('lg')]: {
      width: '13%',
      zIndex: 1,
      position: 'absolute',
      top: 420,
      left: 200,
    },
    [theme.breakpoints.up('xl')]: {
      width: '13%',
      zIndex: 1,
      position: 'absolute',
      top: 420,
      left: 200,
    },
  },
  image: {
    height: 150,
    backgroundSize: 'cover',

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
    <Box className={classes.map} border={2}>
      {selectedGlobalMap && selectedGlobalMap.length ? (
        <>
          <Map style={classes.image} selectedMap={selectedGlobalMap[0]} />
          {subtitle && (
            <img src={subtitle} alt="label" className={classes.subtitle} />
          )}
        </>
      ) : (
        <h3>Sem imagem disponível</h3>
      )}
    </Box>
  );
}

export default GlobalMap;
