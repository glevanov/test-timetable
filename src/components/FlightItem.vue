<template>
    <tr class="flight">
      <td class="flight__cell">
        {{ formatNumber(flight.time.hours) }}:{{ formatNumber(flight.time.minutes) }}
      </td>
      <td class="flight__cell">
        {{ flight.destination.name }}
        <span class="flight__code">({{ flight.destination.code }})</span>
      </td>
      <td class="flight__cell">
        {{ flight.flight }}
      </td>
    </tr>
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
    border-bottom: 1px solid #00a3ee;
  }

  .flight:hover {
    background-color: rgba(238, 75, 0, 0.1);
  }

  .flight__cell {
    padding: 10px;
    padding-right: 20px;
  }

  .flight__cell:last-of-type {
    padding-right: 10px;
  }

  .flight__code {
    opacity: 0.4;
  }
</style>
