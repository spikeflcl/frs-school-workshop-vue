<script setup>
  import HeaderButton from './HeaderButton.vue';
  import BurgerButton from './BurgerButton.vue';
  import { ref, onMounted } from 'vue';

  const menu = ref(document.querySelector('.header__buttons'));


  const showHideMenu = (isChecked) => {
    if (isChecked) {
      menu.value.style.transform = 'translateX(0)';
    } else {
      menu.value.style.transform = 'translateX(100%)';
    }
  }

  onMounted(() => {
    menu.value = document.querySelector('.header__buttons');
  });
</script>

<template>
  <BurgerButton @burger-toggle="showHideMenu" />
  <div class="header__buttons">
    <HeaderButton :number="1" />
    <HeaderButton :number="2" />
    <HeaderButton :number="3" />
  </div>
</template>

<style lang="scss" scoped>
  .header__buttons {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 0px;
    right: 0;
    transform: translateX(100%);
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    
   .header__buttons {
    gap: 20px;
    margin-right: 21px;
   } 

  }
</style>