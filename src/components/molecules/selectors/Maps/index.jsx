import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';
import config from '../../../../utils/globalValues.js';

const Display = ({
  map, setMap, variable, analysis,
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
      />
    </>
  );
};

export default Display;
