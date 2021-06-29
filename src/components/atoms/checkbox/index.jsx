import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': { color: green[600] },
  },
  checked: {},
})((props) => <MUICheckbox color="default" {...props} />);

const Checkbox = ({
  handleCheck, checked, name, label,
}) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={(
          <GreenCheckbox
            checked={checked}
            onChange={handleCheck}
            name={name}
            color="primary"
          />
        )}
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
