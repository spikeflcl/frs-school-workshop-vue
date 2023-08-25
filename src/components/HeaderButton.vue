<template>
  <button type="button" class="div__button">button {{ number }}</button>
</template>

<script setup>
  defineProps({
    number: Number
  })
</script>

<style lang="scss" scoped>
  .div__button {
    background-color: white;
    border: none;
    border-radius: 6px;
    padding: 10px;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    .header__buttons {
      padding-bottom: 0;
      align-items: flex-end;
      justify-content: space-around;
      margin-right: 10px;
    }
  }
</style>
