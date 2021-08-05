import React from 'react';
import { makeStyles,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Checkbox,
  ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: 5,
    minWidth: 100,
  },
  selectEmpty: { marginTop: theme.spacing(2) },
  select: { height: 44 },
  checkbox: { transform: 'scale(1.5)' },
}));

const CheckboxSelectorFilter = ({
  title,
  label,
  state,
  setState,
  data,
  handleChange,
  handleSelected,
  ...props
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl} {...props}>
      <InputLabel id="demo-mutiple-checkbox-label">{title}</InputLabel>
      <Select
        multiple
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        value={state}
        onChange={handleChange}
        renderValue={(selected) => {
          return selected.length > 1
            ? selected.filter((item) => item !== 'Selecione').join(', ')
            : 'Selecione';
        }}
        label={label}
        className={classes.select}
      >
        {data.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox
              checked={state.indexOf(item) > -1}
              className={classes.checkbox}
            />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CheckboxSelectorFilter;
