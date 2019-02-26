<template>
  <aside class="controls">
    <form class="controls__form">
      <fieldset class="controls__fieldset">
        <legend class="controls__legend">Направление</legend>
        <label
          class="radio"
          @click="showDepartures"
        >
          <input
            class="radio__input visually-hidden"
            type="radio"
            name="direction"
            checked
          >
          <span class="radio__box"></span>
          Вылет
        </label>
        <label
          class="radio"
          @click="showArrivals"
        >
          <input
            class="radio__input visually-hidden"
            type="radio"
            name="direction"
          >
          <span class="radio__box"></span>
          Прилёт
        </label>
      </fieldset>
      <fieldset class="controls__fieldset">
        <legend class="controls__legend">Только задержанные</legend>
        <label
          class="radio"
          @click="showDelayed"
        >
          <input
            class="radio__input visually-hidden"
            type="radio"
            name="delayed"
          >
          <span class="radio__box"></span>
          Да
        </label>
        <label
          class="radio"
          @click="hideDelayed"
        >
          <input
            class="radio__input visually-hidden"
            type="radio"
            name="delayed"
            checked
          >
          <span class="radio__box"></span>
          Нет
        </label>
      </fieldset>
      <button
        class="controls__button"
        type="button"
        @click="getNewData"
      >Новые данные</button>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'Controls',
  methods: {
    showDelayed() {
      this.$store.commit('showDelayed');
    },
    hideDelayed() {
      this.$store.commit('hideDelayed');
    },
    showDepartures() {
      this.$store.commit('showDepartures');
    },
    showArrivals() {
      this.$store.commit('showArrivals');
    },
    getNewData() {
      this.$store.dispatch('getNewData');
    },
  },
};
</script>

<style scoped>
  @import "../assets/css/visually-hidden.css";

  .controls {
    font-size: 22px;
  }

  .controls__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    padding: 20px;

    border: 1px solid #00a3ee;
  }

  .controls__fieldset {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 0;
    margin: 0;

    border: none;
  }

  .controls__legend {
    padding: 0;
    margin-bottom: 5px;

    font-weight: 700;
  }

  .controls__button {
    display: block;
    padding: 5px 10px ;

    font: inherit;

    color: inherit;
    background-color: #ffffff;
    border: 1px solid #00a3ee;

    transition: all 0.4s;
  }

  .controls__button:focus,
  .controls__button:hover {
    color: #ffffff;
    border-color: #ffffff;;
    background-color: #00a3ee;

    transition: all 0.4s;
  }

  .radio {
    display: flex;
    align-items: center;
    column-gap: 10px;

    cursor: pointer;
  }

  .radio__box {
    display: block;
    width: 22px;
    height: 22px;

    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle fill='%23FFFFFF' cx='11' cy='11' r='10' stroke='%2300a3ee' stroke-width='2'/%3E%3C/svg%3E");
  }

  .radio__input:checked + .radio__box {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='5' fill='%2300a3ee'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle fill='%23FFFFFF' cx='11' cy='11' r='10' stroke='%2300a3ee' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
