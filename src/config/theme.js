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
    background: {
      paper: '#FFFFFF',
      default: '#EAEAEA',
    },
  },
  typography: {
    fontSize: '1.4rem',
    // fontFamily: [
    //   '-apple-system',
    //   'IBM Plex Sans',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
  },
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
});
