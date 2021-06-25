import React, { useState, useEffect } from 'react';
import HistoryTemplate from './HistoryTemplate';
import IndexTemplate from './IndexTemplate';

import HeaderControls from '../../organisms/controls/HeaderControls';
import RulerControls from '../../organisms/controls/RulerControls';

const WeatherTemplate = () => {
  const [analysis, setAnalysis] = useState(1);
  const [statistics, setStatistics] = useState(0);
  const [variables, setVariables] = useState(0);
  const [region, setRegion] = useState('mjo');
  const [phase, setPhase] = useState(0);

  const renderTab = (selection) => {
    switch (selection) {
      case 0:
        return <IndexTemplate />;
      case 1:
        return <HistoryTemplate />;
      case 2:
        return <h1>No page yet</h1>;
      case 3:
        return <h1>No page yet</h1>;
      default:
        return <IndexTemplate />;
    }
  };

  useEffect(() => {
    if (analysis === 0) {
      setStatistics(0);
      setVariables(0);
      setPhase(0);
      setRegion('mjo');
    }
  }, [analysis]);

  useEffect(() => {
    if (region !== 'mjo') {
      setStatistics(0);
      setVariables(0);
      setPhase(0);
    }
  }, [region]);

  return (
    <>
      <HeaderControls
        analysis={analysis}
        statistics={statistics}
        variables={variables}
        region={region}
        phase={phase}
        setAnalysis={setAnalysis}
        setStatistics={setStatistics}
        setVariables={setVariables}
        setRegion={setRegion}
        setPhase={setPhase}
      />
      {renderTab(analysis)}
      <RulerControls />
    </>
  );
};

export default WeatherTemplate;
