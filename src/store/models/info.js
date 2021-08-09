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
    async getDescriptionAsync(payload, rootState) {
      const {
        analysis, variable, indexType,
      } = payload;

      const analysisValue = config.analysis[analysis];
      const textVariable =
        analysis === 0
          ? await config.indexType[indexType]
          : await config.variables[analysisValue][variable];

      console.log({
        session_id:
          rootState.images.token ?? '8978d76440e44ebbbed7c2c04784cedf',
        analise: analysisValue,
        variavel: textVariable,
      });
      const res = await api.post('/tokclima/variableinfo', {
        session_id:
          rootState.images.token ?? '8978d76440e44ebbbed7c2c04784cedf',
        variavel: textVariable,
      });

      this.setDescription(res.data);
    },
  }),
};
