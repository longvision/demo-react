import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const IndexTypes = ({ indexType, setIndexType }) => {
  return (
    <>
      <SelectorFilter
        title="Índices'"
        label="Índices"
        state={indexType}
        setState={setIndexType}
        data={data}
      />
    </>
  );
};

export default IndexTypes;
