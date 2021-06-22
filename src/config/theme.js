import { createMuiTheme } from '@material-ui/core';

import { ptBR } from '@material-ui/core/locale';

export const theme = createMuiTheme({
  spacing: 2,
  palette: {
    primary: {
      main: '#000000',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#68E3EE',
      light: '#D2EEF1',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Montsserat',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
