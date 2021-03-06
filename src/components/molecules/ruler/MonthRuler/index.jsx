import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import Ruler from '../../../atoms/ruler/Ruler';
import { setMonthName } from '../../../../utils/dates.js';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  button: {
    width: '80%',
    borderRadius: 10,
    height: 40,
    borderColor: '#BFBFBF',
    '&:hover': { backgroundColor: 'transparent' },
  },
}));
const MonthRuler = ({
  disabled,
  setMonth,
  month,
  handleClick,
  year,
  maxMonth,
  maxYear,
  analysis,
  variable,
}) => {
  const classes = useStyles();

  function setLastMonth(analys, variab) {
    if (analys === 1 && variab === 0) {
      return setMonthName(maxMonth - 1);
    }
    return setMonthName(maxMonth);
  }
  function setMaxMonth(analys, variab) {
    if (analys === 1 && variab === 0) {
      return 12 - maxMonth - 1;
    }
    return 12 - maxMonth;
  }

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
            <strong>JAN</strong>
          </Typography>
        </Grid>
        <Grid item md={10} lg={10} sm={10} xl={10} xs={8} align="center">
          <Ruler
            title=""
            defaultValue={0}
            step={1}
            min={0}
            max={year !== maxYear ? 11 : setMaxMonth(analysis, variable)}
            labelFunction={setMonthName}
            disabled={disabled}
            handleChange={setMonth}
            value={month}
            marks
            handleToggle={handleClick}
          />
        </Grid>
        <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="right">
          <Typography
            variant="h3"
            color={disabled ? 'textSecondary' : 'primary'}
          >
            <strong>
              {year !== maxYear ? 'DEZ' : setLastMonth(analysis, variable)}
            </strong>
          </Typography>
        </Grid>
      </Button>
    </Grid>
  );
};

export default MonthRuler;
