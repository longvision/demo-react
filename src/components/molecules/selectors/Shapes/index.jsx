import React from 'react';
import SelectorFilter from '../../../atoms/selectors/SelectorFilter';
import { data } from './data.js';

const Shapes = ({ shape, setShape }) => {
  return (
    <>
      <SelectorFilter
        title="Contornos"
        label="Contornos"
        state={shape}
        setState={setShape}
        data={data}
      />
    </>
  );
};

export default Shapes;
