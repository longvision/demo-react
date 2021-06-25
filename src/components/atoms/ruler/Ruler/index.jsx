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
  marks,
  defaultValue,
  step,
  min,
  max,
  labelFunction,
  disabled,
  value,
  handleChange,
}) => {
  const classes = useStyles();

  function valuetext(textValue) {
    return labelFunction(textValue);
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
        valueLabelDisplay="on"
        valueLabelFormat={valuetext}
        onChange={(e, v) => handleChange(v)}
        value={value}
        step={step}
        marks={marks}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Ruler;
