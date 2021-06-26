import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: { '& > *': { margin: theme.spacing(1) } },
}));

const IconButton = ({ icon, handle, title = '', disabled }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        disabled={disabled}
        variant="contained"
        color="primary"
        size="large"
        startIcon={icon}
        onClick={handle}
      >
        {title}
      </Button>
    </div>
  );
};

export default IconButton;
