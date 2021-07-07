import { api } from '../../services/api.js';
import config from '../../utils/globalValues.js';

export const info = {
  name: 'info',
  state: { selectedDescription: {} },
  reducers: {
    setDescription(state, payload) {
      return {
        ...state,
        selectedDescription: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getDescriptionAsync(payload) {
      const { analise, variavel } = payload;

      const analysisValue = config.analysis[analise];
      const variableValue = await config.variables[analysisValue][variavel];

      console.log({
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        analise: analysisValue,
        variavel: variableValue,
      });
      const res = await api.post('/tokclima/variableinfo', {
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        variavel: variableValue,
      });

      this.setDescription(res.data);
    },
  }),
};
