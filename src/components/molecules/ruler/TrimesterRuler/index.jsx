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
    marginTop: 10,
  },
  button: {
    width: '80%',
    borderColor: '#BFBFBF',
    borderRadius: 10,
    height: 40,
    '&:hover': { backgroundColor: 'transparent' },
  },
}));

const MonthRuler = ({
  disabled,
  setTrimester,
  trimester,
  handleClick,
  year,
}) => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  const currentYearLastMonth = new Date().getMonth();

  return (
    <Grid container className={classes.container}>
      <Button
        type="button"
        className={classes.button}
        onClick={handleClick}
        variant="outlined"
      >
        <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="left">
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
            max={year !== currentYear ? 11 : 11 - currentYearLastMonth - 1}
            labelFunction={setTrimesterName}
            disabled={disabled}
            handleChange={setTrimester}
            value={trimester}
            marks
          />
        </Grid>
        <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="right">
          <Typography
            variant="h3"
            color={disabled ? 'textSecondary' : 'primary'}
          >
            <strong>
              {' '}
              {year !== currentYear
                ? 'NDJ'
                : setTrimesterName(currentYearLastMonth - 2)}
            </strong>
          </Typography>
        </Grid>
      </Button>
    </Grid>
  );
};

export default MonthRuler;
