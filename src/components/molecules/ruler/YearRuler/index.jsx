import React, { useState } from 'react';
import Ruler from '../../../atoms/ruler/Ruler';

const YearRuler = ({ disabled }) => {
  const [year, setYear] = useState(2021);

  function labelFunction(value) {
    return value;
  }
  return (
    <>
      <Ruler
        title="Ano"
        defaultValue={2021}
        value={year}
        step={1}
        min={year - 10}
        max={year}
        labelFunction={labelFunction}
        disabled={disabled}
      />
    </>
  );
};

export default YearRuler;
