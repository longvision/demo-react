import React, { useState, useEffect } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MonthRuler from '../../../molecules/ruler/MonthRuler';
import TrimesterRuler from '../../../molecules/ruler/TrimesterRuler';
import YearRuler from '../../../molecules/ruler/YearRuler';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const RulerControls = () => {
  const classes = useStyles();
  const [isTrimesterSearch, setIsTrimesterSearch] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [trimester, setTrimester] = useState(0);
  const [month, setMonth] = useState(0);
  const [range, setRange] = useState(0);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  function handleDecrement() {
    if (year <= new Date().getFullYear() && range >= 0) {
      setRange(range + 1);
      setYear(year - 1);
    } else {
      setRange(0);
      setYear(maxYear);
    }
  }
  function handleIncrement() {
    if (year < new Date().getFullYear() && range > 0) {
      setRange(range - 1);
      setYear(year + 1);
    }
  }
  return (
    <Box className={classes.container}>
      <MonthRuler
        handleClick={() => setIsTrimesterSearch(false)}
        disabled={isTrimesterSearch}
        setMonth={setMonth}
        month={month}
      />

      <TrimesterRuler
        disabled={!isTrimesterSearch}
        handleClick={() => setIsTrimesterSearch(true)}
        setTrimester={setTrimester}
        trimester={trimester}
      />

      <YearRuler
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        disableDecrement={isTrimesterSearch || year > maxYear}
        disableIncrement={isTrimesterSearch || year >= maxYear}
        handleToggle={() => setIsTrimesterSearch(false)}
        disabled={isTrimesterSearch || year > maxYear}
        year={year}
        setYear={setYear}
        range={range}
        maxYear={maxYear}
      />
    </Box>
  );
};

export default RulerControls;
