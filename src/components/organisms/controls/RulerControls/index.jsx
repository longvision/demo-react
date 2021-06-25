import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  return (
    <>
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsTrimesterSearch(false)}
      >
        <MonthRuler disabled={isTrimesterSearch} />
      </button>
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsTrimesterSearch(true)}
      >
        <TrimesterRuler disabled={!isTrimesterSearch} />
      </button>
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsTrimesterSearch(false)}
      >
        <YearRuler disabled={isTrimesterSearch} />
      </button>
    </>
  );
};

export default RulerControls;
