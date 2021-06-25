const months = {
  0: 'Janeiro',
  1: 'Fevereiro',
  2: 'Março',
  3: 'Abril',
  4: 'Maio',
  5: 'Junho',
  6: 'Julho',
  7: 'Agosto',
  8: 'Setembro',
  9: 'Outubro',
  10: 'Novembro',
  11: 'Dezembro',
};
const trimesters = {
  0: 'DJF',
  1: 'JFM',
  2: 'FMA',
  3: 'MAM',
  4: 'AMJ',
  5: 'MJJ',
  6: 'JJA',
  7: 'JAS',
  8: 'ASO',
  9: 'SON',
  10: 'OND',
  11: 'NDJ',
};

export function setMonthName(number) {
  return months[number].slice(0, 3);
}
export function setTrimesterName(number) {
  return trimesters[number].slice(0, 3);
}
