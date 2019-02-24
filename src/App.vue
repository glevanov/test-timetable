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
  @font-face {
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Ubuntu Mono'), local('UbuntuMono-Regular'),
    url('assets/fonts/ubuntu-mono-v8-latin_cyrillic-regular.woff2') format('woff2'),
    url('assets/fonts/ubuntu-mono-v8-latin_cyrillic-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 700;
    src: local('Ubuntu Mono Bold'), local('UbuntuMono-Bold'),
    url('assets/fonts/ubuntu-mono-v8-latin_cyrillic-700.woff2') format('woff2'),
    url('assets/fonts/ubuntu-mono-v8-latin_cyrillic-700.woff') format('woff');
  }

  #app {
    font-family: 'Ubuntu Mono', monospace;
  }

  .heading {
    font-size: 50px;
  }
</style>
