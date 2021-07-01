import { api } from '../../services/api.js';
import config from '../../utils/globalValues.js';

export const images = {
  name: 'images',
  state: { images: [] },
  reducers: {
    setImages(state, payload) {
      return {
        ...state,
        images: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getImagesAsync(payload) {
      const {
        analise,
        estatistica,
        variavel,
        periodo = '2021',
        zoom,
        indice = 0,
        regiao = 0,
        fase = 0,
        contorno = 0,
      } = payload;

      // const analysisValue = config.analysis[analise];
      // const statisticValue = config.statistics[estatistica];
      // const variableValue = config.variables[variavel];
      // const indexValue = config.index[indice];
      // const regionValue = config.region[regiao];
      // const phaseValue = analise === 0 && config.phases[regiao][fase];
      // const shapeValue = config.shapes[contorno];

      // const res = await api.post('/tokclima/imagelinks', {
      //   session_id: '8978d76440e44ebbbed7c2c04784cedf',
      //   analise: analysisValue,
      //   estatistica: statisticValue,
      //   variavel: variableValue,
      //   periodo: '2021',
      //   zoom,
      // });

      // await this.setImages(res.data);
    },
  }),
};
