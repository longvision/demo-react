import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const Display = ({
  map, setMap, variable, analysis, ...props
}) => {
  function selectMap(variab, ana) {
    if ((ana === 1 && variab === 0) || (ana === 0 && variab === 3)) {
      return [
        {
          value: 'brasil',
          label: 'Brasil',
        },
      ];
    }
    return data;
  }

  return (
    <>
      <SelectorFilter
        title="Visualização"
        label="Visualização"
        state={map}
        setState={setMap}
        data={selectMap(variable, analysis)}
        style={{ minWidth: 150 }}
        {...props}
      />
    </>
  );
};

export default Display;
