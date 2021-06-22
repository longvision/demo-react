export const auth = {
  name: 'example',
  state: 1000,
  reducers: {
    subtract: (state, payload) => state - payload,
  },
  effects: (dispatch) => ({
    async triggerData(payload, rootState) {
      console.log(rootState.example); // log current state of example model
      await dispatch.count.loadData(payload); // dispatch action from a different model
    },
  }),
};
