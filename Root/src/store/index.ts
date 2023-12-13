import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {},
  actions: {
    addOne({ state }) {
      state.count += 1;
    },
    minusOne({ state }) {
      state.count -= 1;
    },
  },
  modules: {},
});
