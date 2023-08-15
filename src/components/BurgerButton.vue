<template>
  <input id="burger-toggle" type="checkbox" @change="$emit('burgerToggle', $event.target.checked)" hidden />
  <label class="burger-button-container" for="burger-toggle">
    <div class="burger-button"></div>
  </label>
</template>

<script setup>
  const emit = defineEmits(['burgerToggle'])
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.burger-button {
  &, &::after, &::before {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 40px;
    border-radius: 3px;
  }
  
  &::before {
    content: '';
    margin-top: -9px;
  }

  &::after {
    content: '';
    margin-top: 9px;
  }
}

</style>