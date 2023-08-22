<script setup>
import HeaderButtons from './components/ButtonContainer.vue'
import MobileMenu from './components/MobileMenu.vue';
import HeaderText from './components/HeaderText.vue'
import BurgerButton from './components/BurgerButton.vue';
import AdBanner from './components/AdBanner.vue';
import InputMenu from './components/InputMenu.vue';
import ImageContainer from './components/ImageContainer.vue';
import InputToggle from './components/InputToggle.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const screenWidth = ref(null);
const adVisbility = ref('hidden');
const mobile = computed(() => screenWidth.value < 768);
const tablet = computed(() => screenWidth.value < 1367);
const menuTransform = ref('translateX(100%)');
const show_form = ref(false)

const changeVisibility = () => {
    screenWidth.value = window.innerWidth;
    if (tablet.value) {
      adVisbility.value = 'hidden';
    }
  };

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener('resize', changeVisibility);
});

onUnmounted(() => {
  window.removeEventListener('resize', changeVisibility);
});

const showAd = () => {
  if (adVisbility.value === 'hidden') {
    adVisbility.value = 'visible';
  } else {
    adVisbility.value = 'hidden';
  }
};

const formToggle = (value) => {
  show_form.value = value;
};

const showHideMenu = (isChecked) => {
  if (isChecked) {
    menuTransform.value = 'translateX(0)';
  } else {
    menuTransform.value = 'translateX(100%)';
  }
};

</script>

<template>
  <header class="body__header">
    <div class="header-content">
      <HeaderText />
      <div class="burger-container" v-if="mobile">
        <BurgerButton @burger-toggle="showHideMenu" />
      </div>
    </div>
    <MobileMenu :style="{ transform: menuTransform }" class="mobile-menu" v-if="mobile" />
    <HeaderButtons v-else @ad-toggle="!tablet && showAd()" />
  </header>
  <main class="body__main">
    <ImageContainer />
    <InputToggle @show-menu="formToggle" />
    <InputMenu v-show="show_form" />
  </main>
  <AdBanner :style="{ visibility: adVisbility }" />
</template>

<style lang="scss" scoped>
  * {
    overflow: hidden;
  }

  .body__header {
    background-color: #555;
    overflow: hidden;
  }

  .body__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
  }

  .header-content {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .body__header {
      padding-bottom: 60px;
    }    
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    .body__header {
      width: 720px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .body__main {
      width: 600px;
      margin: 0 auto;
    }    
  }

  @media screen and (min-width: 1367px) {
    .body__header {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
    }

    .body__main {
      position: absolute;
      margin-left: 175px;
      margin-top: 20px;
      width: 600px;
      align-items: center;
      height: 460px;
    }
  }
</style>
