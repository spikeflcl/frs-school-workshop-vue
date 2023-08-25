<script setup>
import MainImage from './MainImage.vue';
</script>

<template>
  <div class="image-container">
    <MainImage />
    <MainImage class="mb-30" />
  </div> 
</template>

<style scoped>
  .image-container {
    display: flex;
    flex-direction: column;
  }
  
  .mb-30 {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    .image-container {
      flex-direction: row;
    };
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    .image-container {
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
