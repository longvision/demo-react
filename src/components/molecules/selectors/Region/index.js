import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const Region = ({ region, setRegion }) => {
  return (
    <>
      <SelectorFilter
        title="Região"
        label="Região"
        state={region}
        setState={setRegion}
        data={data}
      />
    </>
  );
};

export default Region;
