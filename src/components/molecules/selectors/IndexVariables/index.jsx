import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { mjo, pdo, aao } from './data.js';

const IndexVariables = ({
  variables, setVariables, region,
}) => {
  const selectData = (selectedRegion) => {
    switch (selectedRegion) {
      case 'mjo':
        return mjo;
      case 'pdo':
        return pdo;
      case 'aao':
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
