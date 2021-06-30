import { api } from '../../services/api.js';

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
        analise, estatistica, variavel, periodo, zoom,
      } = payload;

      const res = await api.post('/tokclima/imagelinks', {
        session_id: '8978d76440e44ebbbed7c2c04784cedf',
        analise,
        estatistica,
        variavel,
        periodo,
        zoom,
      });

      await this.setImages(res.data);
    },
  }),
};
