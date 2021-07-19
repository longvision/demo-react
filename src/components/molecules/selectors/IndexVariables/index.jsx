import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { var1, var2 } from './data.js';

const IndexVariables = ({
  variable, setVariable, indexType,
}) => {
  const selectData = (type) => {
    switch (type) {
      case 0:
        return var1;
      case 1:
        return var2;
      case 2:
        return var2;
      case 3:
        return var2;
      case 4:
        return var2;
      default:
        return var2;
    }
  };
  return (
    <>
      <SelectorFilter
        title="Variável"
        label="Variável"
        state={variable}
        setState={setVariable}
        data={selectData(indexType)}
      />
    </>
  );
};

export default IndexVariables;
