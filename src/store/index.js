import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: null,
    warning: null
  },
  mutations: {
    SET_TIMER_DATA(state, json) {
      state.timer = json;
    },
    SET_WARNING(state, info) {
      state.warning = info;
    }
  },
  actions: {
    async GET_TIMER_DATA({ commit }) {
      try {
        const res = await fetch(
          "http://my-json-server.typicode.com/Reznx/VueTimerTest/db"
        );
        const json = await res.json();
        commit("SET_TIMER_DATA", json);
      } catch (e) {
        commit("SET_WARNING", e);
      }
    }
  },
  getters: {},
  modules: {}
});
