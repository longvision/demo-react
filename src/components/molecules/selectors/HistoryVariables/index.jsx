import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data1, data2 } from './data.js';

const HistoryVariables = ({
  variable, setVariable, statistic,
}) => {
  const selectData = (type) => {
    switch (type) {
      case 0:
        return data2;
      case 1:
        return data1;
      case 2:
        return data1;
      default:
        return data1;
    }
  };

  function handleEmptyValue() {
    if (
      selectData(statistic).filter((item) => item.value === variable).length ===
      0
    ) {
      return selectData(statistic)[0].value;
    }
    return variable;
  }
  function handleEmptyState() {
    if (
      selectData(statistic).filter((item) => item.value === variable).length ===
      0
    ) {
      return setVariable(selectData(statistic)[0].value);
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
        data={selectData(statistic)}
      />
    </>
  );
};

export default HistoryVariables;
