import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { getPersistor } from '@rematch/persist';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Pages from './components/pages';
import store from './store';
import { theme } from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <BrowserRouter>
            <CssBaseline />
            <Pages />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
