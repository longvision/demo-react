import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const IconButton = ({ iconName, handleChange, title = '' }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={iconName}
        onClick={handleChange}
      >
        {title}
      </Button>
    </div>
  );
};

export default IconButton;
