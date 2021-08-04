import React from 'react';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import GlobalMap from '../../../organisms/maps/GlobalMap';
import BrasilMap from '../../../organisms/maps/BrasilMap';

const useStyles = makeStyles((theme) => ({
  maps: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // [theme.breakpoints.up('md')]: { flexWrap: 'nowrap' },
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'space-evenly',
      flexWrap: 'nowrap',
    },
  },
  checkboxes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
}));

const MapsTemplate = ({
  checked, shape, setShape,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.maps}>
        {checked === 'global' && <GlobalMap />}
        {checked === 'brasil' && <BrasilMap shape={shape} />}
        {checked === 'todas' && (
          <>
            <GlobalMap />
            <BrasilMap shape={shape} />
          </>
        )}
      </Grid>
    </>
  );
};

export default MapsTemplate;
