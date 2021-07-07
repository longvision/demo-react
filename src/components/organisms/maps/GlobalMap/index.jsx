import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Map from '../../../atoms/map/Map';

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
    [theme.breakpoints.up('sm')]: { height: 300 },
    [theme.breakpoints.up('md')]: { height: 250 },
    [theme.breakpoints.up('lg')]: { height: 310 },
    [theme.breakpoints.up('xl')]: { height: 310 },
  },
}));

function GlobalMap() {
  const classes = useStyles();
  const loading = useSelector(
    (state) => state.loading.effects.images.getImageAsync,
  );

  const selectedGlobalMap = useSelector(
    (state) => state.images.selectedGlobalMap,
  );

  useEffect(() => {}, [loading, selectedGlobalMap]);
  return (
    <div className={classes.map}>
      {selectedGlobalMap && selectedGlobalMap.length ? (
        <Map style={classes.image} selectedMap={selectedGlobalMap[0]} />
      ) : (
        <h3>Sem imagem disponível</h3>
      )}
    </div>
  );
}

export default GlobalMap;
