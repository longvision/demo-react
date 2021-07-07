import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { fases, temp } from './data.js';

const Phases = ({
  phase, setPhase, indexType,
}) => {
  const selectData = (type) => {
    switch (type) {
      case 0:
        return fases;
      case 1:
        return temp;
      case 2:
        return temp;
      case 3:
        return temp;
      case 4:
        return temp;
      default:
        return temp;
    }
  };
  return (
    <>
      <SelectorFilter
        title="Fase"
        label="Fase"
        state={phase}
        setState={setPhase}
        data={selectData(indexType)}
      />
    </>
  );
};

export default Phases;
