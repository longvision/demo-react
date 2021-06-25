import React from 'react';

import { Grid } from '@material-ui/core';

import SliderControl from '../../../organisms/controls/SliderControl';
import GlobalMap from '../../../organisms/maps/GlobalMap';
import TextBox from '../../../organisms/textboxes/TextBox';

const HistoryTemplate = () => {
  return (
    <>
      <Grid>
        <GlobalMap />
        <SliderControl />
      </Grid>
      <Grid>
        <TextBox />
      </Grid>
    </>
  );
};

export default HistoryTemplate;
