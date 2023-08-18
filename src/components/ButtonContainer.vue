<script setup>
  import HeaderButton from './HeaderButton.vue'

  const emit = defineEmits(['adToggle'])
</script>

<template>
  <div class="header__buttons">
    <HeaderButton :number="1" @click="$emit('adToggle')" class="o-1-lg mt-100-lg" />
    <HeaderButton :number="2" />
    <HeaderButton :number="3" class="mb-10" />
  </div>
</template>

<style lang="scss" scoped>
  .header__buttons {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 10px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    
   .header__buttons {
    gap: 20px;
    margin-right: 21px;
   } 
  }

  @media screen and (min-width: 1367px) {
    .header__buttons {
      flex-direction: column;
      padding-left: 28px;
      padding-right: 28px;
      gap: 10px;
      align-items: flex-start;
    }

    .o-1-lg {
      order: 1;
    }
    .mt-100-lg {
      margin-top: 100%;
    }
  }
</style>