<script setup>
  import HeaderButton from './HeaderButton.vue';
</script>

<template>
  <div class="header__buttons">
    <HeaderButton class="mobile-button" :number="1" />
    <HeaderButton class="mobile-button" :number="2" />
    <HeaderButton class="mobile-button" :number="3" />
  </div>
</template>

<style lang="scss" scoped>
  .header__buttons {
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 0px;
    right: 0;
    transform: translateX(100%);
    padding: 20px;
    gap: 20px;
    background-color: #dedede;
    height: 100%;
    box-shadow: -10px 0 10px rgba(0, 0, 0, .1);
    transition: transform 0.2s;
    padding-top: 80px;
  }

  .mobile-button {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
   .header__buttons {
      gap: 20px;
      margin-right: 21px;
    }
  }
</style>
