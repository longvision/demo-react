import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { getPersistor } from '@rematch/persist';
import Spinner from 'react-spinkit';
import Pages from './components/pages';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spinner name="cube-grid" color="green" />}
        persistor={getPersistor()}
      >
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
