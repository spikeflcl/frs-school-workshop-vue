<script setup>
  import HeaderButton from './HeaderButton.vue'
</script>

<template>
  <div class="header__buttons">
    <HeaderButton :number="1" />
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

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    
   .header__buttons {
    gap: 20px;
    margin-right: 21px;
   } 

  }
</style>