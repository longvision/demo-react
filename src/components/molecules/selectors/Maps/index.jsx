import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const Display = ({ map, setMap }) => {
  return (
    <>
      <SelectorFilter
        title="Visualização"
        label="Visualização"
        state={map}
        setState={setMap}
        data={data}
        style={{ minWidth: 150 }}
      />
    </>
  );
};

export default Display;
