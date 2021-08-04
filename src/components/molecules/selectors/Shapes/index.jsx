import React from 'react';
import CheckboxSelectorFilter from '../../../atoms/selectors/CheckboxSelectorFilter';
import { data } from './data.js';

const Shapes = ({
  shape, setShape, ...props
}) => {
  const handleChange = (event) => {
    setShape(event.target.value);
  };
  return (
    <>
      <CheckboxSelectorFilter
        title="Camadas"
        label="Camadas"
        state={shape}
        handleChange={handleChange}
        setState={setShape}
        data={data}
        {...props}
      />
    </>
  );
};

export default Shapes;
