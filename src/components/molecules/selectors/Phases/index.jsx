import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { mjo, pdo, aao } from './data.js';

const Phases = ({
  phase, setPhase, region,
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
        title="Fase"
        label="Fase"
        state={phase}
        setState={setPhase}
        data={selectData(region)}
      />
    </>
  );
};

export default Phases;
