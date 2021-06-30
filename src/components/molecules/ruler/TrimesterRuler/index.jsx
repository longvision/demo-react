import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Ruler from '../../../atoms/ruler/Ruler';
import { setTrimesterName } from '../../../../utils/dates.js';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { border: 'none' },
}));

const MonthRuler = ({
  disabled, setTrimester, trimester, handleClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="center">
        <h2>DJF</h2>
      </Grid>
      <Grid item md={10} lg={10} sm={10} xl={10} xs={8} align="center">
        <Ruler
          title=""
          defaultValue={0}
          step={1}
          min={0}
          max={11}
          labelFunction={setTrimesterName}
          disabled={disabled}
          handleChange={setTrimester}
          value={trimester}
          marks
          handleToggle={handleClick}
        />
      </Grid>
      <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="center">
        <h2>NDJ</h2>
      </Grid>
    </div>
  );
};

export default MonthRuler;
