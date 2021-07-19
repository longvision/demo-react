import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import Ruler from '../../../atoms/ruler/Ruler';
import { setTrimesterName } from '../../../../utils/dates.js';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  button: {
    width: '90%',
    borderColor: '#BFBFBF',
    borderRadius: 15,
    '&:hover': { backgroundColor: 'transparent' },
  },
}));

const MonthRuler = ({
  disabled, setTrimester, trimester, handleClick,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Button
        type="button"
        className={classes.button}
        onClick={handleClick}
        variant="outlined"
      >
        <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="center">
          <Typography
            variant="h3"
            color={disabled ? 'textSecondary' : 'primary'}
          >
            <strong>DJF</strong>
          </Typography>
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
          />
        </Grid>
        <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="center">
          <Typography
            variant="h3"
            color={disabled ? 'textSecondary' : 'primary'}
          >
            <strong>NDJ</strong>
          </Typography>
        </Grid>
      </Button>
    </Grid>
  );
};

export default MonthRuler;
