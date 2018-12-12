<template>
  <div class="loginWrap">
    <div class="logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "PhoneLogin"
  }
</script>

<style scoped lang="stylus">
  .loginWrap
    position: relative;
    height: 100%;
    background: #fff;
    padding-top 1.17333rem
    .logo
      text-align: center;
      margin-top: .74667rem;
      margin-bottom: 0;
      img
        width: 2.56rem;
        height: .85333rem;

</style>
