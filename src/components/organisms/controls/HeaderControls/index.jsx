import React from 'react';

import Analysis from '../../../molecules/selectors/Analysis';
import HistoryStatistics from '../../../molecules/selectors/HistoryStatistics';
import HistoryVariables from '../../../molecules/selectors/HistoryVariables';
// import IndexStatistics from '../../../molecules/selectors/IndexStatistics';
import IndexTypes from '../../../molecules/selectors/IndexTypes';
import IndexVariables from '../../../molecules/selectors/IndexVariables';
import Phases from '../../../molecules/selectors/Phases';
import Shapes from '../../../molecules/selectors/Shapes';
import Display from '../../../molecules/selectors/Display';
import Maps from '../../../molecules/selectors/Maps';

const HeaderControls = ({
  analysis,
  statistics,
  variables,
  indexType,
  phase,
  setAnalysis,
  setStatistics,
  setVariables,
  setIndexType,
  setPhase,
  shape,
  setShape,
  display,
  setDisplay,
  map,
  setMap,
}) => {
  const renderStats = (selection) => {
    switch (selection) {
      case 0:
        return (
          <>
            <IndexTypes setIndexType={setIndexType} indexType={indexType} />
            <IndexVariables setVariables={setVariables} variables={variables} />
            <Display setDisplay={setDisplay} display={display} />
            <Phases setPhase={setPhase} phase={phase} indexType={indexType} />
          </>
        );
      case 1:
        return (
          <>
            <HistoryStatistics
              statistics={statistics}
              setStatistics={setStatistics}
            />
            <HistoryVariables
              setVariables={setVariables}
              variables={variables}
            />
          </>
        );
      default:
        return <div />;
    }
  };
  return (
    <div>
      <Analysis analysis={analysis} setAnalysis={setAnalysis} />
      {renderStats(analysis)}
      <Maps map={map} setMap={setMap} />
      <Shapes shape={shape} setShape={setShape} />
    </div>
  );
};

export default HeaderControls;
