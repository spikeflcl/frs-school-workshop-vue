<script setup>
  const emit = defineEmits(['showMenu'])
</script>

<template>
  <button type="button" @click="$emit('showMenu', true)">Pokaż formularz</button>
  <button type="button" @click="$emit('showMenu', false)">Schowaj formularz</button>
</template>

<style lang="scss" scoped>

</style>