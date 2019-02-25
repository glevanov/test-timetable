/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import getNewData from './js/getNewData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    departures: null,
    arrivals: null,
    currentMode: 'departures',
    entriesPerPage: 30,
  },
  mutations: {
    getNewData(state) {
      state.departures = getNewData(200);
      state.arrivals = getNewData(200);
    },
  },
  actions: {
    getNewData(context) {
      context.commit('getNewData');
    },
  },
});
