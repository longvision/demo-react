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
    marginTop: 20,
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
  range,
  setYear,
  statistic,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <MonthRuler
        handleClick={() => setIsTrimesterSearch(false)}
        disabled={isTrimesterSearch}
        setMonth={setMonth}
        month={month}
        year={year}
      />

      <TrimesterRuler
        disabled={!isTrimesterSearch}
        handleClick={() => setIsTrimesterSearch(true)}
        setTrimester={setTrimester}
        trimester={trimester}
        year={year}
      />
      {statistic !== 1 && (
        <YearRuler
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          disableDecrement={year > maxYear || (year <= 1988 && range === 33)}
          disableIncrement={year >= maxYear || range === 0}
          handleClick={() => {}}
          disabled={year > maxYear}
          year={year}
          setYear={setYear}
          range={range}
          maxYear={maxYear}
        />
      )}
    </Box>
  );
};

export default RulerControls;
