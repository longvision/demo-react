import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Slider, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: { width: '100%', marginTop: 10, marginBottom: 5 },
  button: {
    // border: 'none',

    width: '100%',
    borderColor: '#BFBFBF',
    '&:hover': { backgroundColor: 'transparent' },
  },
});

const boxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const CustomSlider = withStyles({
  root: {
    color: '#bfbfbf',
    height: 2,
    padding: '15px 0',
  },
  markLabel: { display: 'block' },

  markLabelActive: { display: 'block' },
  thumb: {
    boxShadow,
    height: 20,
    width: 20,
    marginTop: -14,
    // marginLeft: -14,
    backgroundColor: '#68E3EE',
    right: 5,

    '&:focus, &:hover, &$active': {
      backgroundColor: '#68E3EE',
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': { boxShadow },
    },
  },
  valueLabel: {
    left: 'calc(-95%)',
    top: -30,
    width: 58,

    background: 'black',
    // visibility: 'hidden',
    '&:focus, &:hover, &$inactive': { display: 'block' },
    '& *': {
      background: 'black',
      color: 'white',
      marginLeft: 0,
    },
  },
  track: { height: 2, backgroundColor: '#bfbfbf' },
  rail: {
    height: 2,
    opacity: 1,
  },

  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 3,
    marginTop: -3,
    bottom: -2,
    marginLeft: 2,
  },
  markActive: {
    opacity: 1,
    width: 3,
    backgroundColor: '#bfbfbf',
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
  handleToggle,
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
        aria-label="ios slider"
        valueLabelDisplay={!disabled ? 'on' : 'off'}
        classes={{ thumb: { display: disabled && 'none' } }}
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
