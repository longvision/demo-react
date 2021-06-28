import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
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
    [theme.breakpoints.down('sm')]: { width: 44 },
    height: 44,
    width: 95,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    [theme.breakpoints.down('sm')]: { width: 44 },
    height: 44,
    width: 95,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    <div className={classes.container}>
      <IconButton
        className={classes.leftIcon}
        icon={<RemoveIcon />}
        handle={handleDecrement}
        disabled={disableDecrement}
      />

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

      <IconButton
        icon={<AddIcon />}
        className={classes.rightIcon}
        disabled={disableIncrement}
        handle={handleIncrement}
      />
    </div>
  );
};

export default YearRuler;
