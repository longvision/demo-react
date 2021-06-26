import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const useStyles = makeStyles({ root: { width: '100%' } });

const boxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const CustomSlider = withStyles({
  root: {
    color: '#68E3EE',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    boxShadow,
    marginTop: -14,
    // marginLeft: -14,

    '&:focus, &:hover, &$active': {
      backgroundColor: '#68E3EE',
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': { boxShadow },
    },
  },
  active: { backgroundColor: '#68E3EE' },
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -30,
    background: 'grey ',
    '& *': {
      background: 'grey ',
      color: 'white',
    },
  },
  track: { height: 4 },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: 'white',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: '#68E3EE',
  },
})(Slider);

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
  ...props
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
      <CustomSlider
        disabled={disabled}
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        // aria-labelledby="|"
        aria-label="ios slider"
        valueLabelDisplay="on"
        valueLabelFormat={valuetext}
        onChange={(e, v) => handleChange(v)}
        value={value}
        step={step}
        marks={marks}
        aria-labelledby="discrete-slider-small-steps"
        min={min}
        max={max}
        {...props}
      />
    </div>
  );
};

export default Ruler;
