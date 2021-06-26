export const history = {
  name: 'history',
  state: { data: [] },
  reducers: { subtract: (state, payload) => state - payload },
  effects: (dispatch) => ({
    async getHistory(payload, rootState) {
      console.log(rootState.example); // log current state of example model
      await dispatch.count.loadData(payload); // dispatch action from a different model
    },
  }),
};
