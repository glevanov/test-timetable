<template>
  <table class="timetable">
    <tr>
      <th class="timetable__heading timetable__heading--time">Время</th>
      <th class="timetable__heading timetable__heading--destination">Направление</th>
      <th class="timetable__heading timetable__heading--flight">Рейс</th>
    </tr>
    <FlightItem
      v-for="flight in this.$store.state.departures"
      :flight="flight"
    ></FlightItem>
  </table>
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
    table-layout: fixed;
    width: 700px;

    font-size: 28px;

    list-style: none;
    border-collapse: collapse;
  }

  .timetable__heading {
    padding: 10px;

    text-align: left;

    background-color: #00a3ee;
  }

  .timetable__heading--time {
    width: 80px;
  }

  .timetable__heading--flight {
    width: 100px;
  }
</style>
