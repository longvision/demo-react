import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@material-ui/core';
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
    justifyContent: 'center',
  },
  paper: { backgroundColor: 'white', padding: 15 },
  body: {
    backgroundColor: 'white',
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const WeatherTemplate = () => {
  const classes = useStyles();
  const [analysis, setAnalysis] = useState(1);
  const [statistics, setStatistics] = useState(0);
  const [variables, setVariables] = useState(0);
  const [region, setRegion] = useState('mjo');
  const [phase, setPhase] = useState(0);
  const [check, setChecked] = React.useState({
    global: true,
    brasil: true,
  });

  const toggleGlobal = (event) => {
    if (check.global && check.brasil) {
      setChecked({ ...check, [event.target.name]: event.target.checked });
    }
    if (check.brasil && !check.global) {
      setChecked({ ...check, global: true });
    }
  };
  const toggleBrasil = (event) => {
    if (check.global && check.brasil) {
      setChecked({ ...check, [event.target.name]: event.target.checked });
    }
    if (!check.brasil && check.global) {
      setChecked({ ...check, brasil: true });
    }
  };

  const renderTab = (selection) => {
    switch (selection) {
      case 0:
        return <IndexTemplate />;
      case 1:
        return (
          <HistoryTemplate
            toggleGlobal={toggleGlobal}
            checked={check}
            toggleBrasil={toggleBrasil}
          />
        );
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
      <Paper className={classes.paper}>
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
      </Paper>
      <Paper className={classes.body}>
        {renderTab(analysis)}
        <RulerControls />
      </Paper>
    </Box>
  );
};

export default WeatherTemplate;
