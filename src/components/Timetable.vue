<template>
  <table class="timetable">
    <tr>
      <th class="timetable__heading timetable__heading--time">Время</th>
      <th class="timetable__heading timetable__heading--destination">Направление</th>
      <th class="timetable__heading timetable__heading--flight">Рейс</th>
      <th class="timetable__heading timetable__heading--status">Статус</th>
    </tr>
    <TimetableItem
      v-for="(flight, index) in flights"
      :flight="flight"
      :key="index"
    ></TimetableItem>
    <tr v-if="flights.length === 0">
      <td colspan="4"
          class="timetable__error"
      >
        Такой рейс не найден. Пожалуйста, уточните запрос.
      </td>
    </tr>
  </table>
</template>

<script>
import TimetableItem from './TimetableItem.vue';

export default {
  name: 'Timetable',
  components: {
    TimetableItem,
  },
  computed: {
    flights() {
      return this.$store.getters.getFilteredFlights;
    },
  },
};
</script>

<style scoped>
  .timetable {
    margin: 0;
    padding: 0;
    table-layout: fixed;
    width: 700px;

    font-size: 22px;

    list-style: none;
    border-collapse: collapse;
  }

  .timetable__heading {
    padding: 10px;

    text-align: left;

    color: #ffffff;
    background-color: #00a3ee;
  }

  .timetable__heading--time {
    width: 65px;
  }

  .timetable__heading--flight {
    width: 90px;
  }

  .timetable__heading--status {
    width: 120px;
  }

  .timetable__error {
    padding: 10px;

    text-align: center;

    color: rgba(0, 0, 0, 0.4);
  }
</style>
