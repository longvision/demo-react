import React, { useState, useEffect } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import MonthRuler from '../../../molecules/ruler/MonthRuler';
import TrimesterRuler from '../../../molecules/ruler/TrimesterRuler';
import YearRuler from '../../../molecules/ruler/YearRuler';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
  },
}));

const RulerControls = ({
  setIsTrimesterSearch,
  isTrimesterSearch,
  setMonth,
  month,
  setTrimester,
  trimester,
  handleDecrement,
  handleIncrement,
  year,
  maxYear,
  maxMonth,
  range,
  setYear,
  statistic,
  analysis,
  variable,
}) => {
  const classes = useStyles();

  const firstDataSetYear = 1988;

  return (
    <Box className={classes.container}>
      <MonthRuler
        handleClick={() => setIsTrimesterSearch(false)}
        disabled={isTrimesterSearch}
        setMonth={setMonth}
        month={month}
        year={year}
        maxYear={maxYear}
        maxMonth={maxMonth}
        variable={variable}
        analysis={analysis}
      />

      <TrimesterRuler
        disabled={!isTrimesterSearch}
        handleClick={() => setIsTrimesterSearch(true)}
        setTrimester={setTrimester}
        trimester={trimester}
        year={year}
        maxMonth={maxMonth}
        maxYear={maxYear}
        analysis={analysis}
        variable={variable}
      />
      {statistic !== 1 && analysis !== 0 && (
        <YearRuler
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          disableDecrement={
            year > maxYear ||
            (year <= firstDataSetYear && range === maxYear - firstDataSetYear)
          }
          disableIncrement={year >= maxYear || range === 0}
          handleClick={() => {}}
          disabled={year > maxYear}
          year={year}
          setYear={setYear}
          range={range}
          maxYear={maxYear}
          maxMonth={maxMonth}
        />
      )}
    </Box>
  );
};

export default RulerControls;
