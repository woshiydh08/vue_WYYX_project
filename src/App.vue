<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide  v-if="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/media.styl"
  #app
    width 100%
    height 100%
    background-color: #fff
</style>
