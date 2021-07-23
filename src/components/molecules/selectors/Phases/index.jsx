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

  function handleEmptyValue() {
    if (
      selectData(indexType).filter((item) => item.value === phase).length === 0
    ) {
      return selectData(indexType)[0].value;
    }
    return phase;
  }

  return (
    <>
      <SelectorFilter
        title="Fase"
        label="Fase"
        state={handleEmptyValue()}
        setState={setPhase}
        data={selectData(indexType)}
      />
    </>
  );
};

export default Phases;
