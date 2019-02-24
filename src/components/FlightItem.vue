<template>
    <li class="flight">
      <span class="flight__block">{{ formatNumber(flight.time.hours) }}:{{ formatNumber(flight.time.minutes) }}</span>
      <span class="flight__block">{{ flight.destination.name }} ({{ flight.destination.code }})</span>
      <span class="flight__block">{{ flight.flight }}</span>
    </li>
</template>

<script>
import { formatNumber } from '../js/format';

export default {
  name: 'FlightItem',
  props: {
    flight: Object,
  },
  methods: {
    formatNumber,
  },
};
</script>

<style scoped>
  .flight {
    display: flex;
  }

  .flight__block {
    margin-right: 10px;
  }

  .flight__block:last-of-type {
    margin-right: 0;
  }
</style>
