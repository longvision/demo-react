import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { mjo, pdo, aao } from './data.js';

const IndexVariables = ({
  variables, setVariables, region,
}) => {
  const selectData = (selectedRegion) => {
    switch (selectedRegion) {
      case 0:
        return mjo;
      case 1:
        return pdo;
      case 2:
        return aao;
      default:
        return mjo;
    }
  };
  return (
    <>
      <SelectorFilter
        title="Variável"
        label="Variável"
        state={variables}
        setState={setVariables}
        data={selectData(region)}
      />
    </>
  );
};

export default IndexVariables;
