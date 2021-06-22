import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    heigh: 73,
    width: 100,
  },
  active: {
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  inactive: {
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const NavButton = ({ value, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <ToggleButton
        value={value}
        className={props.selected ? classes.active : classes.inactive}
      >
        {value}
      </ToggleButton>
    </Box>
  );
};

export default NavButton;
