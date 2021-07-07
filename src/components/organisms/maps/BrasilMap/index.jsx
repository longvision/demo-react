import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

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
    [theme.breakpoints.up('md')]: { width: 250, height: '100%' },

    [theme.breakpoints.up('lg')]: { width: 310, height: '100%' },
    [theme.breakpoints.up('xl')]: { width: 310, height: '100%' },
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
    <div className={classes.map}>
      {selectedBrasilMap && selectedBrasilMap.length ? (
        <img
          className={classes.image}
          alt="mapa_brasil"
          src={`https://storage.googleapis.com/imagens.clima.tempook.com/${selectedBrasilMap[0]}`}
        />
      ) : (
        <h3>Sem imagem disponível</h3>
      )}
    </div>
  );
}

export default BrasilMap;
