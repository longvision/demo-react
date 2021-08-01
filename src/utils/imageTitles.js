const analysisDictionary = (analysis) => {
  if (analysis === 0) {
    return 'Índice';
  }
  if (analysis === 1) {
    return 'Histórico';
  }
};
const statisticDictionary = (analysis, statistic) => {
  if (analysis === 0) {
    return 'de Clima';
  }
  if (analysis === 1) {
    const dict = {
      0: 'de Anomalia',
      1: 'de Climatologia',
      2: 'de Média',
    };
    return dict[statistic];
  }
};

const variableDictionary = (analysis, variable) => {
  if (analysis === 0) {
    const dict = {
      0: 'de Radiação de Onda Longa',
      1: 'de Divergência de Umidade ',
      2: 'de Geopotencial ',
      3: 'de Precipitação',
    };
    return dict[variable];
  }
  if (analysis === 1) {
    const dict = {
      0: 'de Precipitação',
      1: 'de Temperatura da Superfície do Mar',
      2: 'de Temperatua do Ar',
      3: 'de Pressão ao Nível Médio do Mar',
      4: 'de Geopotencial',
      5: 'de Divergência de Umidade',
      6: 'de PSI',
      7: 'de Vento10',
      8: 'de Magnitude do Vento',
      9: 'de CHI',
    };
    return dict[variable];
  }
};
const indexDictionary = (indexType) => {
  const dict = {
    0: 'MJO',
    1: 'PDO',
    2: 'AAO',
    3: 'Nino 1+2',
    4: 'Nino 3.4',
  };
  return dict[indexType];
};
const phaseDictionary = (analysis, indexType, phase) => {
  if (analysis === 0) {
    if (indexType === 0) {
      const dict = {
        0: 'Fase1',
        1: 'Fase2',
        2: 'Fase3',
        3: 'Fase4',
        4: 'Fase5',
        5: 'Fase6',
        6: 'Fase7',
        7: 'Fase8',
      };
      return dict[phase];
    }
    if ([1, 2, 3, 4].includes(indexType)) {
      const dict = {
        0: 'Positivo',
        1: 'Negativo',
      };
      return dict[phase];
    }
  }
};

export const composeTitle = (
  analysis,
  indexType,
  variable,
  statistic,
  phase,
) => {
  if (analysis === 0) {
    return `${analysisDictionary(analysis)} 
  ${indexDictionary(indexType)} 
  ${statisticDictionary(analysis, statistic)} 
  ${variableDictionary(analysis, variable)} 
  ${phaseDictionary(analysis, indexType, phase)}`;
  }
  if (analysis === 1) {
    return `${analysisDictionary(analysis)} 
  ${statisticDictionary(analysis, statistic)} 
  ${variableDictionary(analysis, variable)}`;
  }
};
