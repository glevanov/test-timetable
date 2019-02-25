<template>
  <div id="app">
    <h1 class="heading">Табло аэропорта</h1>
    <div class="wrap">
      <Timetable></Timetable>
      <TimetableControls></TimetableControls>
    </div>
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue';
import TimetableControls from './components/TimetableControls.vue';

export default {
  name: 'app',
  components: {
    Timetable,
    TimetableControls,
  },
  beforeMount() {
    this.$store.dispatch('getNewData');
  },
};
</script>

<style>
  @import "assets/css/fonts.css";

  #app {
    font-family: 'Ubuntu Mono', monospace;
  }

  .heading {
    font-size: 50px;
  }

  .wrap {
    display: flex;
    flex-direction: row;
    column-gap: 55px;
  }
</style>
