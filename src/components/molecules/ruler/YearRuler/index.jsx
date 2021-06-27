import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '../../button/IconButton';
import Ruler from '../../../atoms/ruler/Ruler';

const useStyles = makeStyles(() => ({
  container: {
    // height: 600,
    display: 'flex',
    flexDirection: 'row',
  },

  icon: {
    height: 44,
    width: 44,
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
    console.log(length);
    return new Array(length).map((item, index) => ({
      value: dates - index,
      // label: `${dates - index}`,
    }));
  }

  // useEffect(() => {
  //   if (year > maxYear + range) {
  //     setYear(maxYear);
  //   }
  // }, [year]);

  return (
    <div className={classes.container}>
      <IconButton
        className={classes.icon}
        icon={<RemoveIcon />}
        handle={handleDecrement}
        disabled={disableDecrement}
      />

      <Ruler
        title=""
        defaultValue={maxYear}
        step={1}
        // min={year - range > maxYear ? maxYear - 10 : maxYear - range - 10}
        // max={year - range > maxYear ? maxYear : maxYear - range}
        min={maxYear - range - 10}
        max={maxYear - range}
        labelFunction={labelFunction}
        disabled={disabled}
        handleChange={setYear}
        value={year}
        marks
        handleToggle={handleClick}
      />

      <IconButton
        icon={<AddIcon />}
        className={classes.icon}
        disabled={disableIncrement}
        handle={handleIncrement}
      />
    </div>
  );
};

export default YearRuler;
