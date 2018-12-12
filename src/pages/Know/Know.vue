<template>
<div class="knowBody">
  <div class="headerWrapper">
    <div class="headerInner">
      <div class="headerHome" @click="$router.replace('/home')">
      </div>
      <div class="headerFind">
        <span class="title">发现</span>
        <span class="text">甄选家</span>
      </div>
      <div class="headerSearch">
        <i class="iconCart"></i>
        <i class="iconSearch"></i>
      </div>
      <div></div>
    </div>
  </div>
  <div class="headerTab">
    <ul v-if="tabs">
      <li v-for="(tab,index) in tabs">
        <router-link :to="`/know/tab${index+1}`">{{tab.tabName}}</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
  <footerNav></footerNav>
</div>

</template>

<script>
  import BScroll from 'better-scroll'

  import footerNav from './FooterGuide/FooterNav'
  import {mapState} from 'vuex'
  export default {
    name: "Know",
    components:{
      footerNav
    },
    beforeRouteLeave:(to, from,next) =>{
      var size = (window.innerWidth || document.documentElement.clientWidth) / 1000 * 100;
      document.documentElement.style.fontSize = size + "px";
      document.body.style.fontSize = 24 + "px";
      next();
    },

    mounted(){

      this.$store.dispatch('getTabs')
      this.$store.dispatch('getTab1')
      this.$store.dispatch('getTab2')
      this.$store.dispatch('getTab3')
      this.$store.dispatch('getTab5')
      this.$store.dispatch('getTab1List')

    },
    computed:{
    ...mapState(['tab2','tabs']),

    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/media.styl"
  .knowBody
    background-color #f4f4f4
    width 100%
    height: 100%
    .headerWrapper
      height: 1rem;
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      background-color: #fafafa;
      box-sizing: border-box;
      border-bottom: .01rem solid #d9d9d9;
      .headerInner
        z-index: 1;
        max-width: 768px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: auto;
        overflow: hidden;
        padding: 0 .26rem 0 .24rem;
        position: relative
        .headerHome
          display: block;
          float: left;
          height: 1rem;
          background-image url("./img/home.png")
          background-size: .46rem .46rem;
          width: .46rem;
          background-position: center;
          background-repeat: no-repeat
        .headerFind
          position: absolute;
          width: 3.2rem;
          height: 100%;
          line-height: 1rem;
          text-align: center;
          left: 50%;
          top: 0;
          margin-left: -1.6rem;
          font-size: .28rem;
          color: #7F7F7F;
          z-index: 1;
          .title
            font-size: .4rem;
            color: #b4282d;
            font-weight: bold;
            padding: 0 .16rem;
            vertical-align: middle;
          .text
            padding: 0 .16rem;
            vertical-align: middle;
        .headerSearch
          display: block;
          float: right;
          height: 1rem;
          margin-right: .02rem;
          .iconCart
            float: right;
            display: block;
            height: 1rem;
            background-image: url('./img/shopCart.png');
            background-size: .46rem .46rem;
            width: .49rem;
            background-position: center;
            background-repeat: no-repeat;
          .iconSearch
            float: right;
            display: block;
            height: 1rem;
            background-image: url('./img/search.png');
            background-size: .46rem .46rem;
            width: .49rem;
            background-position: center;
            background-repeat: no-repeat;
    .headerTab
      width: 100%;
      height: .72rem;
      background: #fafafa;
      border-bottom: .01rem solid #d9d9d9;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      left: 0;
      z-index: 20;
      display: flex;
      flex-flow: row wrap;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      margin: 0;
      ul
        width: 100%;
        height: .72rem;
        padding-bottom: .2rem;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: auto;
        background: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: fixed;
        top: 1rem;
        display flex
        left: 0;
        z-index: 20;
        li
          display: inline-block;
          height: .72rem;
          line-height: .72rem;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          font-size: .28rem;
          color: #7F7F7F;
          padding: 0 .08rem;
          margin: 0 .2rem;
          vertical-align: middle;
          flex-grow 1
          a
            font-size: .28rem;
</style>
