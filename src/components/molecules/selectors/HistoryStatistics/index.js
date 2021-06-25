import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const HistoryStatistics = ({ statistics, setStatistics }) => {
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

export default HistoryStatistics;
