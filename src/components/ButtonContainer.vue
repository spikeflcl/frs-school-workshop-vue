<script setup>
  import HeaderButton from './HeaderButton.vue'
</script>

<template>
  <div class="header__buttons">
    <HeaderButton number = 1 />
    <HeaderButton number = 2 />
    <HeaderButton number = 3 marginBottom = '10px' />
  </div>
</template>

<style scoped>
  .header__buttons {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 10px;
  }

</style>