import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const HistoryVariables = ({ variables, setVariables }) => {
  return (
    <>
      <SelectorFilter
        title="Variável"
        label="Variável"
        state={variables}
        setState={setVariables}
        data={data}
      />
    </>
  );
};

export default HistoryVariables;