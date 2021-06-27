import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Slider, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: { width: '100%' },
  slider: {
    // border: 'none',
    width: '100%',
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
  markLabel: { display: 'none' },
  markLabelActive: { display: 'block' },
  thumb: {
    boxShadow,
    height: 28,
    width: 28,
    marginTop: -14,
    // marginLeft: -14,
    right: 5,
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
    background: '#bfbfbf',
    // visibility: 'hidden',
    '&:focus, &:hover, &$inactive': { display: 'none' },
    // '& *': {
    //   background: 'grey',
    //   color: 'white',
    // },
  },
  track: { height: 2, backgroundColor: '#bfbfbf' },
  rail: {
    height: 2,
    opacity: 1,
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 5,
    marginTop: -3,
    bottom: -2,
    marginRight: 5,
  },
  markActive: {
    opacity: 1,
    width: 5,
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
      <Button
        type="button"
        className={classes.slider}
        onClick={handleToggle}
        variant="outlined"
        color="primary"
      >
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
      </Button>
    </div>
  );
};

export default Ruler;
