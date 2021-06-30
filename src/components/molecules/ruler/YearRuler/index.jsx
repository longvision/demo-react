import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '../../button/IconButton';
import Ruler from '../../../atoms/ruler/Ruler';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightIcon: {
    [theme.breakpoints.down('tablet')]: { width: 44 },
    height: 44,
    width: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  leftIcon: {
    [theme.breakpoints.down('tablet')]: { width: 44 },
    height: 44,
    width: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
}));

const YearRuler = ({
  disabled,
  setYear,
  year,
  range,
  maxYear,
  handleClick,
  handleDecrement,
  handleIncrement,
  disableDecrement,
  disableIncrement,
}) => {
  const classes = useStyles();

  function labelFunction(textValue) {
    return textValue;
  }

  function createDates(dates) {
    const length = dates - 1978;
    return new Array(length).map((item, index) => ({
      value: dates - index,
      // label: `${dates - index}`,
    }));
  }

  return (
    <Grid container className={classes.container}>
      <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="center">
        <IconButton
          icon={<RemoveIcon />}
          className={classes.leftIcon}
          handleclick={handleDecrement}
          disabled={disableDecrement}
        />
      </Grid>
      <Grid item md={10} lg={10} sm={10} xl={10} xs={8} align="center">
        <Ruler
          title=""
          defaultValue={maxYear}
          step={1}
          min={maxYear - range - 10}
          max={maxYear - range}
          labelFunction={labelFunction}
          disabled={false}
          handleChange={setYear}
          value={year}
          marks
          handleToggle={handleClick}
        />
      </Grid>
      <Grid item md={1} lg={1} sm={1} xl={1} xs={2} align="center">
        <IconButton
          icon={<AddIcon />}
          className={classes.rightIcon}
          disabled={disableIncrement}
          handleclick={handleIncrement}
        />
      </Grid>
    </Grid>
  );
};

export default YearRuler;
