export const variableDictionary = (analysis) => {
  if (analysis === 0) {
    return {
      0: 'Anomalia de Radiação de Onda Longa (Wm²)',
      1: 'Anomalia de Divergência de Umidade (10^-7Kgs^-1)',
      2: 'Anomalia de Geopotencial (gpm)',
      3: 'Anomalia de Precipitação (mm)',
    };
  }
  if (analysis === 1) {
    return {
      0: 'Anomalia de Precipitação (mm)',
      1: 'Anomalia de Temperatura da Superfície do Mar (ºC)',
      2: 'Anomalia de Temperatua do Ar (ºC)',
      3: 'Anomalia de Pressão ao Nível Médio do Mar (hPa)',
      4: 'Geopotencial (gpm)',
      5: 'Divergência de Umidade (10^-7Kgs^-1)',
      6: 'Anomalia de PSI (10^6m²s^-1)',
      7: 'vento10',
      8: 'Anomalia de Magnitude do Vento',
      9: 'Anomalia de CHI (10^6m²s^-1)',
    };
  }
};
export const indexDictionary = () => {
  return {
    0: 'MJO',
    1: 'PDO',
    2: 'AAO',
    3: 'Nino 1+2',
    4: 'Nino 3.4',
  };
};
