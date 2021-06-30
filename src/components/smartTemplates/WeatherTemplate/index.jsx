import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MapsTemplate from './MapsTemplate';
import HeaderControls from '../../organisms/controls/HeaderControls';
import RulerControls from '../../organisms/controls/RulerControls';

import TextBox from '../../organisms/textboxes/TextBox';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',

    flexWrap: 'wrap',
    [theme.breakpoints.up('laptop')]: {
      width: '100%',
      justifyContent: 'center',
      flexWrap: 'flex',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.up('laptop')]: { height: '100%', width: 'auto' },
  },
  sideBox: {
    width: '100%',
    // height: 500
    display: 'flex',

    [theme.breakpoints.up('laptop')]: { width: 300, height: '100%' },
  },
  paper: {
    backgroundColor: 'white',
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('desktop')]: { padding: 15 },
  },
  textBox: {
    backgroundColor: 'white',
    padding: 15,
    height: 600,
    margin: 15,
    width: '100%',
    [theme.breakpoints.up('laptop')]: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 95,
    },
  },
  body: {
    backgroundColor: 'white',
    padding: 15,
    margin: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    [theme.breakpoints.up('laptop')]: {
      width: '100%',
      justifyContent: 'center',
      flexWrap: 'flex',
    },
  },
  top: { height: 10, [theme.breakpoints.up('tablet')]: { height: 65 } },
}));

const WeatherTemplate = () => {
  const classes = useStyles();
  const [analysis, setAnalysis] = useState(1);
  const [statistics, setStatistics] = useState(0);
  const [variables, setVariables] = useState(0);
  const [region, setRegion] = useState('mjo');
  const [phase, setPhase] = useState(0);
  const [shape, setShape] = useState(0);
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
        return (
          <MapsTemplate
            toggleGlobal={toggleGlobal}
            checked={check}
            toggleBrasil={toggleBrasil}
            shape={shape}
            setShape={setShape}
          />
        );
      case 1:
        return (
          <MapsTemplate
            toggleGlobal={toggleGlobal}
            checked={check}
            toggleBrasil={toggleBrasil}
            shape={shape}
            setShape={setShape}
          />
        );
      case 2:
        return <h1>No page yet</h1>;
      case 3:
        return <h1>No page yet</h1>;
      default:
        return (
          <MapsTemplate
            toggleGlobal={toggleGlobal}
            checked={check}
            toggleBrasil={toggleBrasil}
            shape={shape}
            setShape={setShape}
          />
        );
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
    <Box className={classes.page}>
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
      <Box className={classes.sideBox}>
        <Paper className={classes.textBox}>
          <TextBox />
        </Paper>
      </Box>
    </Box>
  );
};

export default WeatherTemplate;
