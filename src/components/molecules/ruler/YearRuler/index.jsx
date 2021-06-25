import React, { useState, useEffect } from 'react';
import Ruler from '../../../atoms/ruler/Ruler';

const YearRuler = ({ disabled, setYear, year, range, maxYear }) => {
  function labelFunction(textValue) {
    return textValue;
  }

  function createDates(dates) {
    const list = new Array(300).map((item, index) => {
      return {
        value: dates - index,
        label: `${dates - index}`,
      };
    });
    return list;
  }

  useEffect(() => {
    if (year > maxYear + range) {
      setYear(maxYear);
    }
  }, [year]);

  return (
    <>
      <h1>{range}</h1>

      <Ruler
        title={`Ano ${year - range}`}
        defaultValue={maxYear}
        step={1}
        min={year - range > maxYear ? maxYear - 10 : maxYear - range - 10}
        max={year - range > maxYear ? maxYear : maxYear - range}
        labelFunction={labelFunction}
        disabled={disabled}
        handleChange={setYear}
        value={year}
        marks={createDates(maxYear)}
      />
    </>
  );
};

export default YearRuler;
