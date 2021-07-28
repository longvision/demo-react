import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data1, data2 } from './data.js';

const IndexVariables = ({
  variable, setVariable, indexType,
}) => {
  const selectData = (type) => {
    switch (type) {
      case 0:
        return data1;
      case 1:
        return data2;
      case 2:
        return data2;
      case 3:
        return data2;
      case 4:
        return data2;
      default:
        return data2;
    }
  };

  function handleEmptyValue() {
    if (
      selectData(indexType).filter((item) => item.value === variable).length ===
      0
    ) {
      return selectData(indexType)[0].value;
    }
    return variable;
  }

  function handleEmptyState() {
    if (
      selectData(indexType).filter((item) => item.value === variable).length ===
      0
    ) {
      return setVariable(selectData(indexType)[0].value);
    }
    return setVariable;
  }

  return (
    <>
      <SelectorFilter
        title="Variável"
        label="Variável"
        state={handleEmptyValue()}
        setState={handleEmptyState()}
        data={selectData(indexType)}
      />
    </>
  );
};

export default IndexVariables;
