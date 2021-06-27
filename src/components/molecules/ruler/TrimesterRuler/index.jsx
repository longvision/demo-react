import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Ruler from '../../../atoms/ruler/Ruler';
import { setTrimesterName } from '../../../../utils/dates.js';

const useStyles = makeStyles((theme) => ({ button: { border: 'none' } }));
const MonthRuler = ({
  disabled, setTrimester, trimester, handleClick,
}) => {
  const classes = useStyles();
  return (
    <>
      <Ruler
        title="Trimestre"
        defaultValue={0}
        step={1}
        min={0}
        max={11}
        labelFunction={setTrimesterName}
        disabled={disabled}
        handleChange={setTrimester}
        value={trimester}
        marks
        handleToggle={handleClick}
      />
    </>
  );
};

export default MonthRuler;
