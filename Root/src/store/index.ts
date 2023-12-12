import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },
  getters: {},
  mutations: {},
  actions: {
    addOne({ state }) {
      state.count += 1;
    },
  },
  modules: {},
});
