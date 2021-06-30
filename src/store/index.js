import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import createPersistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import { models } from './models';

const persistPlugin = createPersistPlugin({
  key: 'root',
  storage,
  version: 2,
  whitelist: ['images'],
});

const store = init({
  name: 'Tempo OK',
  models,
  plugins: [persistPlugin, loadingPlugin()],
});

export default store;
