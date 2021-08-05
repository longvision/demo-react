import React, { useState, useCallback, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import MapsTemplate from './MapsTemplate';
import HeaderControls from '../../organisms/controls/HeaderControls';
import RulerControls from '../../organisms/controls/RulerControls';
import { composeTitle } from '../../../utils/imageTitles.js';

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
    padding: '10px 0px 0px 5px',
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
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    [theme.breakpoints.up('sm')]: { fontSize: 20 },
    [theme.breakpoints.up('md')]: { fontSize: 22 },
    [theme.breakpoints.up('lg')]: { fontSize: 28 },
    [theme.breakpoints.up('xl')]: { fontSize: 32 },
  },

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
  const [shape, setShape] = useState(['Estados']);
  const [display, setDisplay] = useState(0);
  const [map, setMap] = useState('todas');
  const [isTrimesterSearch, setIsTrimesterSearch] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [trimester, setTrimester] = useState(0);
  const [month, setMonth] = useState(0);
  const [range, setRange] = useState(0);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());
  const [maxMonth, setMaxMonth] = useState(new Date().getMonth() - 1);

  const latestReportMonth = -1;
  const latestReportTrimester = -2;

  useEffect(() => {
    if (analysis === 0) {
      // year is set to other than current one in order to set months and trimesters bars to full size
      if (year === maxYear) setYear(maxYear - 1);
      setStatistic(1);
      setVariable(0);
    }
    if (analysis === 1) {
      if (statistic === 1) setMap('brasil');
    }
  }, [analysis]);

  useEffect(() => {
    if (statistic === 1 && analysis === 1) {
      // year is set to other than current one in order to set months and trimesters bars to full size when statistic is "Clima"
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
    if (analysis === 0 && indexType !== 0) {
      setPhase(0);
    }
  }, [variable]);

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
  useEffect(() => {
    // sets month and trimester to the correspondent mark in the ruler if the year is the current year (maxYear).
    // if month and trimester does not exists in the ruler, set to the latest month and trimester.
    if (year === maxYear) {
      if (month > maxMonth) {
        setMonth(maxMonth + latestReportMonth);
      }
      if (trimester > maxMonth) {
        setTrimester(maxMonth - latestReportTrimester);
      }
    }
  }, [year]);

  const changeImage = useCallback(async () => {
    if (analysis === 1) {
      if (statistic !== 1) {
        if (isTrimesterSearch) {
          await dispatch.images.selectMapAsync({
            month: null,
            year,
            trimester,
          });
        }
        if (!isTrimesterSearch) {
          await dispatch.images.selectMapAsync({
            month,
            year,
            trimester: null,
          });
        }
      } else {
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
    }
    if (analysis === 0) {
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
              {` ${composeTitle(
                analysis,
                indexType,
                variable,
                statistic,
                phase,
                isTrimesterSearch,
                trimester,
                month,
                year,
              )}`}
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
              maxMonth={maxMonth}
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
