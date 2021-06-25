import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const IndexStatistics = ({ statistics, setStatistics }) => {
  return (
    <>
      <SelectorFilter
        title="Estatística"
        label="Estatística"
        state={statistics}
        setState={setStatistics}
        data={data}
      />
    </>
  );
};

export default IndexStatistics;
