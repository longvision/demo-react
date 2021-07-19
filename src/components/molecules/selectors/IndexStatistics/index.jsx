import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const IndexStatistics = ({ statistic, setStatistic }) => {
  return (
    <>
      <SelectorFilter
        title="Estatística"
        label="Estatística"
        state={statistic}
        setState={setStatistic}
        data={data}
      />
    </>
  );
};

export default IndexStatistics;
