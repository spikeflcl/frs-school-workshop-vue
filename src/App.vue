<script setup>
import HeaderButtons from './components/ButtonContainer.vue'
import MobileMenu from './components/MobileMenu.vue';
import Image from './components/MainImage.vue'
import HeaderText from './components/HeaderText.vue'
import { ref, computed } from 'vue';

const screenWidth = ref(window.innerWidth);

const mobile = computed(() => screenWidth.value < 768);

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});

</script>

<template>
  <header class="body__header">
    <HeaderText />
    <MobileMenu class="mobile-menu" v-if="mobile" />
    <HeaderButtons v-else />
  </header>
  <main class="body__main">
    <Image />
    <Image class="mb-30" />
  </main>
</template>

<style lang="scss" scoped>
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

  .mb-30 {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    .body__header {
      width: 720px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .body__main {
      width: 600px;
      margin: 0 auto;
      flex-direction: row;
      justify-content: center;
      padding-bottom: 30px;
      gap: 24px;
    }

    .mb-30 {
      margin-bottom: 0px;
    }
  }

</style>
