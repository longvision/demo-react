import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const Analysis = ({ analysis, setAnalysis }) => {
  return (
    <>
      <SelectorFilter
        title="Análise"
        label="Análise"
        state={analysis}
        setState={setAnalysis}
        data={data}
      />
    </>
  );
};

export default Analysis;
