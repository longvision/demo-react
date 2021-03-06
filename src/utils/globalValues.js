export default {
  analysis: { 0: 'ind', 1: 'hist' },
  statistics: { 0: 'anom', 1: 'clim', 2: 'med' },
  variables: {
    hist: {
      0: 'prec',
      1: 'tsm',
      2: 't2m',
      3: 'pnmm',
      4: 'geop500-200',
      5: 'div-umid850',
      6: 'psi700-200',
      7: 'vento10',
      8: 'vento100',
      9: 'chi700-200',
    },
    ind: {
      0: 'olr',
      1: 'flux-umid850',
      2: 'geop500-200',
      3: 'prec',
      4: 'div-umid850',
    },
  },
  ind: { 1: 'clim' },
  indexType: {
    0: 'mjo',
    1: 'pdo',
    2: 'aao',
    3: 'nino12',
    4: 'nino34',
  },
  phases: {
    fases: {
      0: 'clim-fase1',
      1: 'clim-fase2',
      2: 'clim-fase3',
      3: 'clim-fase4',
      4: 'clim-fase5',
      5: 'clim-fase6',
      6: 'clim-fase7',
      7: 'clim-fase8',
    },
    temp: { 0: 'clim-fasePositiva', 1: 'clim-faseNegativa' },
  },
  shapes: { 0: 'estados' },
};
