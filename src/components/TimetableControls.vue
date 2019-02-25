<template>
  <aside class="controls">
    <form class="controls__form">
      <fieldset class="controls__fieldset">
        <legend class="controls__legend">Направление</legend>
        <label class="radio">
          <input
            class="radio__input visually-hidden"
            type="radio"
            name="direction"
            checked
          >
          <span class="radio__box"></span>
          Вылет
        </label>
        <label class="radio">
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
        <label class="radio">
          <input
            class="radio__input visually-hidden"
            type="radio"
            name="delayed"
          >
          <span class="radio__box"></span>
          Да
        </label>
        <label class="radio">
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
    </form>
  </aside>
</template>

<script>
export default {
  name: 'Controls',
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
    row-gap: 20px;
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
    margin-bottom: 5px;

    font-weight: 700;
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
