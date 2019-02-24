<template>
  <div id="app">
    <h1 class="heading">Табло аэропорта</h1>
    <Timetable></Timetable>
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue';

export default {
  name: 'app',
  components: {
    Timetable,
  },
  beforeMount() {
    this.$store.dispatch('getNewData');
  },
};
</script>

<style>
</style>
