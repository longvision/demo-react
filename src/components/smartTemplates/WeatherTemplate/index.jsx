import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
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
    margin: 15,
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideBox: {
    // height: 500
    display: 'flex',
    heihgt: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('lg')]: { padding: 15 },
  },
  textBox: {
    backgroundColor: 'white',
    padding: 15,
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      margin: 15,
    },

    [theme.breakpoints.up('lg')]: {
      width: 290,
      justifyContent: 'center',
      marginTop: 95,
      margin: 15,
      height: 600,
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
  },
  top: { height: 10, [theme.breakpoints.up('sm')]: { height: 65 } },
}));

const WeatherTemplate = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [analysis, setAnalysis] = useState(1);
  const [statistics, setStatistics] = useState(0);
  const [variables, setVariables] = useState(0);
  const [indexType, setIndexType] = useState(0);
  const [phase, setPhase] = useState(0);
  const [shape, setShape] = useState(0);
  const [display, setDisplay] = useState(0);
  const [map, setMap] = useState(0);

  const [check, setChecked] = React.useState({
    global: true,
    brasil: true,
  });

  useEffect(() => {
    dispatch.images.getImagesAsync({
      analise: analysis,
      estatistica: statistics,
      variavel: variables,
      periodo: '2021',
      zoom: 'brasil',
    });
  }, []);

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
      setIndexType(0);
      setShape(0);
    }
  }, [analysis]);

  useEffect(() => {
    if (indexType !== 0) {
      setStatistics(0);
      setVariables(0);
      setPhase(0);
      setShape(0);
    }
  }, [indexType]);

  return (
    <Box className={classes.page}>
      <Box className={classes.container}>
        <Box className={classes.main}>
          <Paper className={classes.paper}>
            <HeaderControls
              analysis={analysis}
              statistics={statistics}
              variables={variables}
              indexType={indexType}
              phase={phase}
              setAnalysis={setAnalysis}
              setStatistics={setStatistics}
              setVariables={setVariables}
              setIndexType={setIndexType}
              setPhase={setPhase}
              shape={shape}
              setShape={setShape}
              setDisplay={setDisplay}
              display={display}
              setMap={setMap}
              map={map}
            />
          </Paper>
          <Paper className={classes.body}>
            {renderTab(analysis)}
            <RulerControls />
          </Paper>
        </Box>
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
