import React from 'react';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import GlobalMap from '../../../organisms/maps/GlobalMap';
import BrasilMap from '../../../organisms/maps/BrasilMap';
import Checkbox from '../../../atoms/checkbox';

const useStyles = makeStyles((theme) => ({
  maps: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
}));

const HistoryTemplate = ({
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

export default HistoryTemplate;
