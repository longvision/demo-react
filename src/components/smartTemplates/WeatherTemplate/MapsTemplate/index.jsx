import React from 'react';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import GlobalMap from '../../../organisms/maps/GlobalMap';
import BrasilMap from '../../../organisms/maps/BrasilMap';
import Shapes from '../../../molecules/selectors/Shapes';
import Checkbox from '../../../atoms/checkbox';

const useStyles = makeStyles((theme) => ({
  maps: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',

    // [theme.breakpoints.up('md')]: { flexWrap: 'nowrap' },
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'space-between',
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
  checked, toggleGlobal, toggleBrasil,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.maps}>
        {checked.global && <GlobalMap />}
        {checked.brasil && <BrasilMap />}
      </Grid>
      <Grid className={classes.checkboxes}>
        <Checkbox
          label="Global"
          name="global"
          checked={checked.global}
          handleCheck={toggleGlobal}
        />
        <Checkbox
          label="Brasil"
          name="brasil"
          checked={checked.brasil}
          handleCheck={toggleBrasil}
        />
      </Grid>
    </>
  );
};

export default MapsTemplate;
