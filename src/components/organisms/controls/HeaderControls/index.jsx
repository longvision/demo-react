import React from 'react';

import Analysis from '../../../molecules/selectors/Analysis';
import HistoryStatistics from '../../../molecules/selectors/HistoryStatistics';
import HistoryVariables from '../../../molecules/selectors/HistoryVariables';
import IndexStatistics from '../../../molecules/selectors/IndexStatistics';
import Region from '../../../molecules/selectors/IndexRegions';
import IndexVariables from '../../../molecules/selectors/IndexVariables';
import Phases from '../../../molecules/selectors/Phases';

const HeaderControls = ({
  analysis,
  statistics,
  variables,
  region,
  phase,
  setAnalysis,
  setStatistics,
  setVariables,
  setRegion,
  setPhase,
}) => {
  const renderStats = (selection) => {
    switch (selection) {
      case 0:
        return (
          <>
            <IndexStatistics
              statistics={statistics}
              setStatistics={setStatistics}
            />
            <Region setRegion={setRegion} region={region} />
            <IndexVariables
              setVariables={setVariables}
              variables={variables}
              region={region}
            />
            <Phases setPhase={setPhase} phase={phase} region={region} />
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
    </div>
  );
};

export default HeaderControls;
