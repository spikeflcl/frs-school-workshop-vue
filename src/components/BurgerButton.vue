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

.burger-button-container {
  position: absolute;
  top: 40px;
  right: 50px;
  transition: 0.2s;
}
.burger-button {
  position: relative;

  &, &::after, &::before {
    display: block; 
    background-color: #fff;
    position: absolute;
    height: 3px;
    width: 40px;
    border-radius: 3px;
    z-index: 1;
  }
  
  &::before {
    position: absolute;
    content: '';
    top: -9px;
  }

  &::after {
    position: absolute;
    content: '';
    top: 9px;
  }
 
}

  input:checked {
    + .burger-button-container {
      right: 180px;
      .burger-button {
        &, &::after, &::before {          
          background-color: #000;
        }

        & {
          background-color: transparent;
        }

        &::before {
          transform: rotate(-45deg);
          top: 0px;
        }

        &::after {
          transform: rotate(45deg);
          top: 0px;
        }
      }
    } 
  }

</style>