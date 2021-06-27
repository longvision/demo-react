import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Ruler from '../../../atoms/ruler/Ruler';
import { setTrimesterName } from '../../../../utils/dates.js';

const useStyles = makeStyles(() => ({
  container: {
    // height: 600,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    height: 44,
    width: 84,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { border: 'none' },
}));

const MonthRuler = ({
  disabled, setTrimester, trimester, handleClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.label}>DJF</h2>
      <Ruler
        title=""
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
      <h2 className={classes.label}>NDJ</h2>
    </div>
  );
};

export default MonthRuler;
