<template>
  <form
    class="search"
    v-on:submit.prevent
  >
    <label
      class="search__label"
      for="timetable-search"
    >Поиск рейса</label>
    <input
      class="search__input"
      type="search"
      id="timetable-search"
      v-model="userInput"
      @input="update"
    >
  </form>
</template>

<script>
export default {
  name: 'TimetableSearch',
  methods: {
    update() {
      this.$store.commit('updateSearchQuery', this.userInput.trim());
    },
  },
  data() {
    return {
      userInput: '',
    };
  },
};
</script>

<style scoped>
  .search {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    font-size: 22px;
  }

  .search__input {
    height: 40px;
    width: 700px;
    padding-left: 36px;

    font: inherit;

    border: 2px solid #aaa;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 82.223 82.491'%3E%3Cg transform='translate(-13.076 -9.005)' fill='none' stroke='%2300a3ee'%3E%3Ccircle cx='46.795' cy='42.724' r='30.72' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M91.764 87.96L68.812 65.008' stroke-width='10'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: left 8px center;
    background-size: 20px;

    transition: all 0.4s;
  }

  .search__input:focus,
  .search__input:active {
    border-color: #00a3ee;
    box-shadow: 0 0 12px rgba(0, 163, 238, 0.4);

    transition: all 0.4s;
  }

  .search__label {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;

    font-weight: 700;
  }
</style>
