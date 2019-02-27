/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import getNewData from './js/getNewData';
import fuzzySearch from './js/fuzzySearch';

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
    searchQuery: null,
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
    updateSearchQuery(state, payload) {
      state.searchQuery = payload;
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
      if (state.searchQuery !== null && state.searchQuery !== '') {
        acc = fuzzySearch(acc, state.searchQuery);
      }
      return acc.slice(0, state.flightsDisplay.entriesPerPage);
    },
  },
});
