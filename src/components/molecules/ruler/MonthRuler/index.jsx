import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Ruler from '../../../atoms/ruler/Ruler';
import { setMonthName } from '../../../../utils/dates.js';

const useStyles = makeStyles((theme) => ({
  container: {
    // height: 600,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftLabel: {
    height: 44,
    width: 105,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightLabel: {
    height: 44,
    width: 105,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { border: 'none' },
}));
const MonthRuler = ({
  disabled, setMonth, month, handleClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.leftLabel}>
        <h2>JAN</h2>
      </Box>
      <Ruler
        title=""
        defaultValue={0}
        step={1}
        min={0}
        max={11}
        labelFunction={setMonthName}
        disabled={disabled}
        handleChange={setMonth}
        value={month}
        marks
        handleToggle={handleClick}
      />
      <Box className={classes.rightLabel}>
        <h2>DEZ</h2>
      </Box>
    </div>
  );
};

export default MonthRuler;
