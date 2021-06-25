import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';

const data = [
  {
    value: 0,
    label: 'Índices',
  },
  {
    value: 1,
    label: 'Histórico',
  },
  {
    value: 2,
    label: 'Previsão ',
  },
  {
    value: 3,
    label: 'Ano Típico',
  },
];

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
