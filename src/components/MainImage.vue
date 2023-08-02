<template>
  <img class="br-50 mt-20 mb-30" src="../assets/img-one-small.jpg">
</template>

<style scoped>
  .br-50 {
    border-radius: 50%;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mb-30 {
    margin-bottom: v-bind(marginBottom);
  }

</style>

<script setup>
  
  defineProps({
    marginBottom: String
  })

</script>