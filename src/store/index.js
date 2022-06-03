import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    ceiling(state) {
      const round = 10;
      return Math.ceil(state.count / round) * round;
    }
  },
  mutations: {
    update(state, payload) {
      state.count += payload.step;
    }
  },
  actions: {
    asyncUpdate(content, payload) {
      setTimeout(() => {
        content.commit('update', { step: payload.step });
      }, 3000);
    },
  },
  modules: {
  }
})
