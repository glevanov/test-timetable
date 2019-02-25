<template>
  <div id="app">
    <h1 class="heading">Табло аэропорта</h1>
    <TimetableSearch></TimetableSearch>
    <div class="wrap">
      <Timetable></Timetable>
      <TimetableControls></TimetableControls>
    </div>
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue';
import TimetableControls from './components/TimetableControls.vue';
import TimetableSearch from './components/TimetableSearch.vue';

export default {
  name: 'app',
  components: {
    Timetable,
    TimetableControls,
    TimetableSearch,
  },
  beforeMount() {
    this.$store.dispatch('getNewData');
  },
};
</script>

<style>
  @import "assets/css/fonts.css";

  #app {
    margin: 0 auto;
    width: 980px;

    font-family: 'Ubuntu Mono', monospace;
  }

  .heading {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;

    font-size: 50px;
  }

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
