<template>
  <button class="div__button mb-10">button {{ number }}</button>
</template>

<script setup>

  defineProps({
    number: Number,
    marginBottom: String
  })

</script>

<style scoped>
  .div__button {
    background-color: white;
    border: none;
    border-radius: 6px;
    padding: 10px;
    font-size: 18px;
  }

  .mb-10 {
    margin-bottom: v-bind(marginBottom);
  }

</style>