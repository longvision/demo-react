import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MUIIconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({ root: { '& > *': {} } }));

const IconButton = ({
  icon, handleclick, title = '', disabled, ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MUIIconButton
        disabled={disabled}
        variant="contained"
        size="medium"
        onClick={handleclick}
        {...props}
      >
        {icon}
      </MUIIconButton>
    </div>
  );
};

export default IconButton;
