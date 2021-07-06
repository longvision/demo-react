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
      const {
        month, year, trimester,
      } = payload;

      const selectedPeriod = () => (trimester
        ? state.images.filter((item) => item.includes(ruler.trimesters[trimester]))
        : state.images.filter((item) => item.includes(ruler.months[month])));

      const globalMap = selectedPeriod().filter((item) => item.includes('global'));
      const brasilMap = selectedPeriod().filter((item) => item.includes('brasil'));

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
        analise,
        estatistica,
        variavel,
        periodo,
        indice,
        fase = 0,
        contorno = 0,
      } = payload;

      console.log({
        analise,
        estatistica,
        variavel,
        periodo,
        indice,
        fase: 0,
        contorno: 0,
      });
      const analysisValue = config.analysis[analise];
      const statisticValue = config.statistics[estatistica];
      const variableValue = await config.variables[analysisValue][analise];
      const indexValue = config.indexType[indice];

      // const phaseValue = analise === 0 && config.phases[regiao][fase];
      // const shapeValue = config.shapes[contorno];

      console.log({
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        analise: analysisValue,
        estatistica: statisticValue,
        variavel: variableValue,
        indice: indexValue,
        periodo,
      });
      const res = await api.post('/tokclima/imagelinks', {
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        analise: analysisValue,
        estatistica: statisticValue,
        variavel: variableValue,
        indice: indexValue,
        periodo,
      });

      this.setImages(res.data);
    },
    async selectMapAsync(payload) {
      const {
        month, trimester, year,
      } = payload;

      this.selectedMap({ month, year, trimester });
    },
  }),
};
