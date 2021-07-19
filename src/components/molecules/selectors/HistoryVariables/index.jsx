import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const HistoryVariables = ({ variable, setVariable }) => {
  return (
    <>
      <SelectorFilter
        title="Variável"
        label="Variável"
        state={variable}
        setState={setVariable}
        data={data}
      />
    </>
  );
};

export default HistoryVariables;
