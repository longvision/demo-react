import React, { useState, useCallback, useEffect } from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
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
  const [map, setMap] = useState('todas');
  const [isTrimesterSearch, setIsTrimesterSearch] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [trimester, setTrimester] = useState(0);
  const [month, setMonth] = useState(0);
  const [range, setRange] = useState(0);

  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  const getImage = useCallback(async () => {
    if (analysis === 1) {
      await dispatch.images.getImagesAsync({
        analise: analysis,
        estatistica: statistics,
        variavel: variables,
        periodo: year,
        indice: indexType,
        web: 'web',
      });
    }
    if (analysis === 0) {
      await dispatch.images.getImagesAsync({
        analise: analysis,
        estatistica: statistics,
        variavel: variables,
        periodo: year,
        indice: indexType,
        fases: phase,
        web: 'web',
      });
    }
    if (isTrimesterSearch) {
      dispatch.images.selectMapAsync({ month: null, year, trimester });
    } else {
      dispatch.images.selectMapAsync({ month, year, trimester: null });
    }
  }, [
    year,
    month,
    trimester,
    isTrimesterSearch,
    analysis,
    statistics,
    variables,
    indexType,
    range,
  ]);

  useEffect(() => {
    getImage();
  }, [
    year,
    month,
    trimester,
    isTrimesterSearch,
    analysis,
    statistics,
    variables,
    indexType,
    map,
    range,
  ]);

  function handleDecrement() {
    if (year > 1979 && year <= maxYear && range >= 0) {
      setRange(range + 1);
      setYear(year - 1);
    }
  }
  function handleIncrement() {
    if (year < maxYear && range > 0) {
      setRange(range - 1);
      setYear(year + 1);
    }
  }

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
            <MapsTemplate checked={map} shape={shape} setShape={setShape} />
            <RulerControls
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              setIsTrimesterSearch={setIsTrimesterSearch}
              isTrimesterSearch={isTrimesterSearch}
              setMonth={setMonth}
              month={month}
              setTrimester={setTrimester}
              trimester={trimester}
              year={year}
              maxYear={maxYear}
              range={range}
              setYear={setYear}
            />
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
