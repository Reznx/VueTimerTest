import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: null
  },
  mutations: {
    SET_TIMER_DATA(state, json) {
      state.timer = json;
    }
  },
  actions: {
    GET_TIMER_DATA({ commit }) {
      try {
        const response = fetch("/data.json");
        // const json = response.json();
        commit("SET_TIMER_DATA", response);
      } catch (e) {
        throw e;
      }
    }
  },
  modules: {}
});
