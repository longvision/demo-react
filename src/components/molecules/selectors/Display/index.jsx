import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const Display = ({ display, setDisplay }) => {
  return (
    <>
      <SelectorFilter
        title="Exibição"
        label="Exibição"
        state={display}
        setState={setDisplay}
        data={data}
      />
    </>
  );
};

export default Display;
