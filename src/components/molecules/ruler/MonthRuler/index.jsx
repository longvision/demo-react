import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Ruler from '../../../atoms/ruler/Ruler';
import { setMonthName } from '../../../../utils/dates.js';

const useStyles = makeStyles((theme) => ({ button: { border: 'none' } }));

const MonthRuler = ({
  disabled, setMonth, month, handleClick,
}) => {
  const classes = useStyles();
  return (
    <>
      <Ruler
        title="Mes"
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
    </>
  );
};

export default MonthRuler;
