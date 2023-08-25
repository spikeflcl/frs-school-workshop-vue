<script setup>
import HeaderButtons from './components/ButtonContainer.vue'
import MobileMenu from './components/MobileMenu.vue';
import HeaderText from './components/HeaderText.vue'
import BurgerButton from './components/BurgerButton.vue';
import AdBanner from './components/AdBanner.vue';
import InputMenu from './components/InputMenu.vue';
import ImageContainer from './components/ImageContainer.vue';
import InputToggle from './components/InputToggle.vue';
import { ref, watch } from 'vue';
import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 768,
  tablet: 1367
});

const mobile = breakpoints.smaller('mobile');
const desktop = breakpoints.greater('tablet');
const adVisbility = ref('hidden');
const menuTransform = ref('translateX(100%)');
const show_form = ref(false)

const showAd = () => {
  if (adVisbility.value === 'hidden') {
    console.log(adVisbility.value)
    adVisbility.value = 'visible';
  } else {
    console.log(adVisbility.value)
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

watch(mobile, () => {
  if (mobile.value) {
    menuTransform.value = 'translateX(100%)';
    show_form.value = false;
  }
})

watch(desktop, () => {
  if (!desktop.value) adVisbility.value = 'hidden';
})

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
    <HeaderButtons v-else @ad-toggle="desktop && showAd()" />
  </header>
  <main class="body__main">
    <ImageContainer />
    <InputToggle @show-menu="formToggle" />
    <InputMenu v-show="show_form" @filled-form="(n) => console.log(n)"/>
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
