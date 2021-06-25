import React from 'react';
import Ruler from '../../../atoms/ruler/Ruler';
import { setMonthName } from '../../../../utils/dates.js';

const MonthRuler = ({ disabled }) => {
  return (
    <>
      <Ruler
        title="Mes"
        defaultValue={0}
        step={1}
        min={0}
        max={11}
        labelFunction={setMonthName}
        disabled={disabled}
      />
    </>
  );
};

export default MonthRuler;
