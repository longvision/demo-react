export default {
  analysis: { 0: 'ind', 1: 'hist' },
  statistics: { 0: 'anom', 1: 'clim', 2: 'med' },
  variables: {
    hist: {
      0: 'prec',
      1: 'tsm',
      2: 't2m',
      3: 'pnmm',
      4: 'geop500',
      5: 'div-umid850',
      6: 'psi700-200',
      7: 'vento10',
      8: 'vento100',
      9: 'chi70-200',
    },
    ind: {
      0: 'olr',
      1: 'flux-umid850',
      2: 'geop500',
      3: 'prec',
    },
  },
  ind: { 0: 'clim' },
  region: {
    0: 'mjo',
    1: 'pdo',
    2: 'aao',
    3: 'nino1-2',
    4: 'nino3-4',
  },
  phases: {
    mjo: { 0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6', 6: '7', 7: '8' },
    pdo: { 0: 'pos', 1: 'neg' },
    aao: { 0: 'pos', 1: 'neg' },
  },
  shapes: { 0: 'estados' },
};
