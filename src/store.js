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
      entriesPerPage: 15,
      showDelayed: false,
    },
  },
  mutations: {
    getNewData(state) {
      state.departures = getNewData(200);
      state.arrivals = getNewData(200);
    },
    showDelayed(state) {
      state.flightsDisplay.showDelayed = true;
    },
    hideDelayed(state) {
      state.flightsDisplay.showDelayed = false;
    },
    showDepartures(state) {
      state.flightsDisplay.mode = 'departures';
    },
    showArrivals(state) {
      state.flightsDisplay.mode = 'arrivals';
    },
  },
  actions: {
    getNewData(context) {
      context.commit('getNewData');
    },
  },
  getters: {
    getFilteredFlights: (state) => {
      let acc = [];
      switch (state.flightsDisplay.mode) {
        case 'departures':
          acc = state.departures.slice();
          break;
        case 'arrivals':
          acc = state.arrivals.slice();
          break;
        default:
          throw new Error('Неверное значение state.flightsDisplay.mode');
      }
      if (state.flightsDisplay.showDelayed) {
        const delayedStatus = 'задержан';
        acc = acc.filter(it => it.status === delayedStatus);
      }
      return acc.slice(0, state.flightsDisplay.entriesPerPage);
    },
  },
});
