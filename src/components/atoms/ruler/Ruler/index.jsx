import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const Ruler = ({
  title,
  defaultValue,
  step,
  min,
  max,
  labelFunction,
  disabled,
}) => {
  const classes = useStyles();

  function valuetext(value) {
    return labelFunction(value);
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {title}
      </Typography>
      <Slider
        disabled={disabled}
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        step={step}
        marks
        min={min}
        max={max}
      />
    </div>
  );
};

export default Ruler;
