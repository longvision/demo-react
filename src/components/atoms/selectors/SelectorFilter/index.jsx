import React from 'react';
import { makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: 5,
    minWidth: 150,
  },
  selectEmpty: { marginTop: theme.spacing(2) },
}));

const SelectorFilter = ({
  title, label, state, setState, data,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="simple-select-outlined-label">{title}</InputLabel>
      <Select
        labelId="simple-select-outlined-label"
        id="simple-select-outlined"
        value={state}
        onChange={handleChange}
        label={label}
      >
        {data.map((item) => (
          <MenuItem key={item.label} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorFilter;
