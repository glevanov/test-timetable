<template>
  <ul class="timetable">
    <FlightItem
      v-for="flight in this.$store.state.flightsData"
      :flight="flight"
    ></FlightItem>
  </ul>
</template>

<script>
import FlightItem from './FlightItem.vue';

export default {
  name: 'Timetable',
  components: {
    FlightItem,
  },
};
</script>

<style scoped>
  .timetable {
    margin: 0;
    padding: 0;

    list-style: none;
  }
</style>
