import { api } from '../../services/api.js';
import config from '../../utils/globalValues.js';
import ruler from '../../utils/rulerValues.js';

export const images = {
  name: 'images',
  state: {
    images: [],
    selectedGlobalMap: [],
    selectedBrasilMap: [],
  },
  reducers: {
    setImages(state, payload) {
      return {
        ...state,
        images: payload,
      };
    },
    selectedMap(state, payload) {
      const { globalMap, brasilMap } = payload;

      return {
        ...state,
        selectedGlobalMap: globalMap,
        selectedBrasilMap: brasilMap,
      };
    },
  },
  effects: (dispatch) => ({
    async getImagesAsync(payload) {
      const {
        analysis, statistic, variable, period, indexType, phase,
      } =
        payload;

      console.log({
        analysis,
        statistic,
        variable,
        period,
        indexType,
        phase,
        contorno: 0,
      });

      const analysisValue = config.analysis[analysis];
      const variableValue = await config.variables[analysisValue][variable];
      const indexValue = config.indexType[indexType];
      let statisticValue;

      if (analysis === 0 && indexType === 0) {
        statisticValue = config.phases.fases[phase];
      }
      if (analysis === 0 && [1, 2, 3, 4].includes(indexType)) {
        statisticValue = config.phases.temp[phase];
      }
      if (analysis === 1) {
        statisticValue = config.statistics[statistic];
      }

      console.log({
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        analysis: analysisValue,
        statistic: statisticValue,
        variable: variableValue,
        indexType: indexValue,
        period,
      });

      const res = await api.post('/tokclima/imagelinks', {
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        analise: analysisValue,
        estatistica: statisticValue,
        variavel: variableValue,
        indice: indexValue,
        periodo: period,
      });

      this.setImages(res.data);
    },
    async selectMapAsync(payload, rootState) {
      const {
        month, trimester, year,
      } = payload;

      const selectedPeriod = () => (trimester !== null
        ? rootState.images.images.filter((item) => item.includes(ruler.trimesters[trimester]))
        : rootState.images.images.filter((item) => item.includes(ruler.months[month])));

      const selectedYear = () => selectedPeriod().filter((item) => item.includes(year));

      const globalMap = selectedYear().filter((item) => item.includes('global'));
      const brasilMap = selectedYear().filter((item) => item.includes('brasil'));

      this.selectedMap({ globalMap, brasilMap });
    },
  }),
};
