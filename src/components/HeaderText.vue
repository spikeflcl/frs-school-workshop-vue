<template>
  <h1 class="header-title">LOGO TEXT</h1>
</template>

<style lang="scss" scoped>
  .header-title {
    margin-top : 0;
    color: #fff;
    padding-top: 28px;
    padding-left: 10px;
    margin-bottom: 15px;  
  }
  
  @media screen and (min-width: 768px) and (max-width: 1366px) {
    .header-title{
      margin-bottom: 26px;
    }
  }

  @media screen and (min-width: 1367px) {
    .header-title {
      writing-mode: vertical-rl;
      text-orientation: upright;
      padding-left: 0;
      word-spacing: -10px;
      letter-spacing: -10px;
      padding-top: 15px;
    }
  }
</style>
