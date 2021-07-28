import React, { useState, useCallback, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import MapsTemplate from './MapsTemplate';
import HeaderControls from '../../organisms/controls/HeaderControls';
import RulerControls from '../../organisms/controls/RulerControls';
import { variableDictionary,
  indexDictionary } from '../../../utils/imageTitles.js';

import TextBox from '../../organisms/textboxes/TextBox';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: { padding: 15, width: '80%' },
    [theme.breakpoints.up('xl')]: { padding: 15, width: '55%' },
  },
  textBox: {
    backgroundColor: 'white',
    padding: '10px 0px 0px 10px',
    marginTop: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 531,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      marginLeft: 15,
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: 320,
      justifyContent: 'center',
      marginTop: 111,
      marginLeft: 15,
      height: 540,
    },
    [theme.breakpoints.up('xl')]: {
      width: 320,
      justifyContent: 'center',
      marginTop: 111,
      marginLeft: 15,
      height: 645,
    },
  },
  title: { fontWeight: 'bold' },

  body: {
    backgroundColor: 'white',
    padding: 15,
    // margin: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '100%' },
    [theme.breakpoints.up('lg')]: { minWidth: 1080 },
    [theme.breakpoints.up('xl')]: { minWidth: 1580 },
  },
  top: { height: 10, [theme.breakpoints.up('sm')]: { height: 65 } },
}));

const WeatherTemplate = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [analysis, setAnalysis] = useState(1);
  const [statistic, setStatistic] = useState(0);
  const [variable, setVariable] = useState(0);
  const [indexType, setIndexType] = useState(0);
  const [phase, setPhase] = useState(0);
  const [shape, setShape] = useState(0);
  const [display, setDisplay] = useState(0);
  const [map, setMap] = useState('todas');
  const [isTrimesterSearch, setIsTrimesterSearch] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [trimester, setTrimester] = useState(null);
  const [month, setMonth] = useState(0);
  const [range, setRange] = useState(0);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (analysis === 0) {
      // year is set to zero to set months and trimesters bars to full size
      if (year === maxYear) setYear(maxYear - 1);
      setStatistic(1);
    }
    if (analysis === 1) {
      if (statistic === 1) setMap('brasil');
    }
  }, [analysis]);

  useEffect(() => {
    if (statistic === 1 && analysis === 1) {
      // year is set to zero to set months and trimesters bars to full size when statistic is "Clima"
      setYear(maxYear - 1);
    }
  }, [statistic]);

  useEffect(() => {
    dispatch.info.getDescriptionAsync({ analysis, variable });
    if (
      (analysis === 1 && variable === 0) ||
      (analysis === 0 && variable === 3)
    ) {
      setMap('brasil');
    } else {
      setMap('todas');
    }
  }, [variable]);

  useEffect(() => {
    dispatch.info.getDescriptionAsync({ analysis, variable });
  }, []);

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

  const changeImage = useCallback(async () => {
    if (statistic === 1) {
      if (isTrimesterSearch) {
        await dispatch.images.selectMapAsync({
          month: null,
          year: null,
          trimester,
        });
      }
      if (!isTrimesterSearch) {
        await dispatch.images.selectMapAsync({
          month,
          year: null,
          trimester: null,
        });
      }
    } else if (analysis === 1) {
      if (isTrimesterSearch) {
        await dispatch.images.selectMapAsync({ month: null, year, trimester });
      }
      if (!isTrimesterSearch) {
        await dispatch.images.selectMapAsync({ month, year, trimester: null });
      }
    } else if (analysis === 0) {
      if (isTrimesterSearch) {
        await dispatch.images.selectMapAsync({
          month: null,
          year: null,
          trimester,
        });
      }
      if (!isTrimesterSearch) {
        await dispatch.images.selectMapAsync({
          month,
          year: null,
          trimester: null,
        });
      }
    }
  }, [year, month, trimester, isTrimesterSearch]);

  useEffect(() => {
    changeImage();
  }, [year, month, trimester, isTrimesterSearch]);
  const getImageAPI = useCallback(async () => {
    if (analysis === 1) {
      await dispatch.images.getImagesAsync({
        analysis,
        statistic,
        variable,
        period: year,
        indexType,
        phase: null,
        web: 'web',
      });
    }
    if (analysis === 0) {
      await dispatch.images.getImagesAsync({
        analysis,
        statistic,
        variable,
        period: null,
        indexType,
        phase,
        web: 'web',
      });
    }
    changeImage();
  }, [
    year,
    analysis,
    statistic,
    variable,
    indexType,
    map,
    range,
    phase,
    isTrimesterSearch,
  ]);

  useEffect(() => {
    getImageAPI();
    dispatch.images.setSubtitle({ analysis, variable, statistic });
  }, [year, analysis, statistic, variable, indexType, map, range, phase]);

  console.log(variableDictionary(0)[0]);
  return (
    <Box className={classes.page}>
      <Box className={classes.container}>
        <Box className={classes.main}>
          <Paper className={classes.paper}>
            <HeaderControls
              analysis={analysis}
              statistic={statistic}
              variable={variable}
              indexType={indexType}
              phase={phase}
              setAnalysis={setAnalysis}
              setStatistic={setStatistic}
              setVariable={setVariable}
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
            <Typography className={classes.title}>
              {` ${variableDictionary(analysis)[variable]} ${
                analysis === 0 ? indexDictionary()[indexType] : ''
              } (${year - 10}-${maxYear - range}) ${
                isTrimesterSearch ? trimester + 1 : month + 1
              }/${year} `}
            </Typography>

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
              statistic={statistic}
              analysis={analysis}
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
