import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HistoryTemplate from './HistoryTemplate';
import IndexTemplate from './IndexTemplate';

import HeaderControls from '../../organisms/controls/HeaderControls';
import RulerControls from '../../organisms/controls/RulerControls';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const WeatherTemplate = () => {
  const classes = useStyles();
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
    <Box className={classes.container}>
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
    </Box>
  );
};

export default WeatherTemplate;
