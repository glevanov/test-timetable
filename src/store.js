/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import getNewData from './js/getNewData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flightsData: null,
  },
  mutations: {
    getNewData(state) {
      state.flightsData = getNewData(50);
    },
  },
  actions: {
    getNewData(context) {
      context.commit('getNewData');
    },
  },
});
