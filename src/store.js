/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import getNewData from './js/getNewData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    departures: null,
    arrivals: null,
    flightsDisplay: {
      mode: 'departures',
      entriesPerPage: 30,
      showDelayed: false,
    },
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
  getters: {
    getFlights: state => {
      const acc = [];
      switch (state.flightsDisplay.mode) {
        case 'departures':
          // Get departures
          break;
        case 'arrivals':
          // Get arrivals
          break;
        default:
          throw 'Неверное значение state.flightsDisplay.mode';
      }
      if (state.flightsDisplay.showDelayed) {
        // Filter by delayed
      }
      // Обрезать под entriesPerPage
    },
  },
});
