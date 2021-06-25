import React from 'react';
import Ruler from '../../../atoms/ruler/Ruler';
import { setTrimesterName } from '../../../../utils/dates.js';

const MonthRuler = ({ disabled, setTrimester, trimester }) => {
  return (
    <>
      <Ruler
        title="Trimestre"
        defaultValue={0}
        step={1}
        min={0}
        max={11}
        labelFunction={setTrimesterName}
        disabled={disabled}
        handleChange={setTrimester}
        value={trimester}
      />
    </>
  );
};

export default MonthRuler;
