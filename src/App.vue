<script setup>
import HeaderButtons from './components/ButtonContainer.vue'
import Image from './components/MainImage.vue'
import HeaderText from './components/HeaderText.vue'
</script>

<template>
  <header class="body__header">
    <HeaderText />
    <HeaderButtons />
  </header>
  <main class="body__main">
    <Image />
    <Image margin-bottom = '30px' />
  </main>
</template>

<style scoped>
  .body__header {
    background-color: #555;
  }

  .body__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
  }
</style>
