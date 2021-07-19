import React from 'react';
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
    // minHeight: 370,
    minWidth: 310,
    margin: 7,

    [theme.breakpoints.up('sm')]: { width: 450, height: '100%' },
    [theme.breakpoints.up('md')]: { width: 254, height: '100%' },

    [theme.breakpoints.up('lg')]: { height: 318 },
    [theme.breakpoints.up('xl')]: { height: 418, width: 418 },
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
      height: 418,
      backgroundSize: 'cover',
    },
  },
}));

function BrasilMap() {
  const classes = useStyles();

  const selectedBrasilMap = useSelector(
    (state) => state.images.selectedBrasilMap,
  );
  return (
    <Box className={classes.map} border={selectedBrasilMap[0] ? 2 : 0}>
      {selectedBrasilMap && selectedBrasilMap.length ? (
        <Map style={classes.image} selectedMap={selectedBrasilMap[0]} />
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Box>
  );
}

export default BrasilMap;
