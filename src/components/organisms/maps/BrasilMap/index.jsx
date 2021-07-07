import React from 'react';
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

    // minHeight: 370,
    minWidth: 310,
    margin: 7,

    [theme.breakpoints.up('sm')]: { width: 450, height: '100%' },
    [theme.breakpoints.up('md')]: { width: 254, height: '100%' },

    [theme.breakpoints.up('lg')]: { height: 318 },
    [theme.breakpoints.up('xl')]: { height: 318 },
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

  const selectedBrasilMap = useSelector(
    (state) => state.images.selectedBrasilMap,
  );
  return (
    <Box className={classes.map} border={2}>
      {selectedBrasilMap && selectedBrasilMap.length ? (
        <Map style={classes.image} selectedMap={selectedBrasilMap[0]} />
      ) : (
        <h3>Sem imagem disponível</h3>
      )}
    </Box>
  );
}

export default BrasilMap;
