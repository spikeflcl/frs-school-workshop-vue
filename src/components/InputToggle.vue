<script setup>
  const emit = defineEmits(['showMenu'])
</script>

<template>
  <div class="button-container">
    <button class="toggleButton" type="button" @click="$emit('showMenu', true)">Pokaż formularz</button>
    <button class="toggleButton" type="button" @click="$emit('showMenu', false)">Schowaj formularz</button>
  </div>
</template>

<style lang="scss" scoped>
  .button-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-bottom: 10px;
    
    .toggleButton {
      background-color: white;
      border: none;
      border-radius: 6px;
      padding: 7px;
      font-size: 0.5rem;
    }
  }
</style>
