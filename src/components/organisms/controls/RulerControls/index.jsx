import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '../../../atoms/button/IconButton';
import MonthRuler from '../../../molecules/ruler/MonthRuler';
import TrimesterRuler from '../../../molecules/ruler/TrimesterRuler';
import YearRuler from '../../../molecules/ruler/YearRuler';

const useStyles = makeStyles((theme) => ({
  button: {
    border: 'none',
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

  return (
    <>
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsTrimesterSearch(false)}
      >
        <MonthRuler
          disabled={isTrimesterSearch}
          setMonth={setMonth}
          month={month}
        />
      </button>
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsTrimesterSearch(true)}
      >
        <TrimesterRuler
          disabled={!isTrimesterSearch}
          setTrimester={setTrimester}
          trimester={trimester}
        />
      </button>
      <IconButton
        iconName={<RemoveIcon />}
        handleChange={() => {
          if (year <= new Date().getFullYear() && range >= 0) {
            setRange(range + 1);
            setYear(year - 1);
          } else {
            setRange(0);
            setYear(maxYear);
          }
        }}
      />
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsTrimesterSearch(false)}
      >
        <YearRuler
          disabled={isTrimesterSearch || year > maxYear}
          year={year}
          setYear={setYear}
          range={range}
          maxYear={maxYear}
        />
      </button>
      <IconButton
        iconName={<AddIcon />}
        handleChange={() => {
          if (year < new Date().getFullYear() && range > 0) {
            setRange(range - 1);
            setYear(year + 1);
          }
        }}
      />
    </>
  );
};

export default RulerControls;
