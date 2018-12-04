<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/home'}" @click="goto('./home')">
      <span class="item_icon">
      </span>
      <span>首页</span>
    </a>
    <a class="guide_item" :class="{on: $route.path==='/category'}" @click="goto('./category')">
      <span class="item_icon">
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/know'}" @click="goto('./know')">
      <span class="item_icon">
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/shopcart'}" @click="goto('./shopcart')">
      <span class="item_icon">
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/personal'}" @click="goto('./personal')">
      <span class="item_icon">
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods:{
      goto(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style scoped lang="stylus">
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 0.98rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.05rem
      color #999999
      &:nth-child(1)
        .item_icon
          background-position-y calc(5 * -0.66rem)
      &:nth-child(2)
        .item_icon
          background-position-y calc(3 * -0.66rem)
      &:nth-child(3)
        .item_icon
          background-position-y calc(7 * -0.66rem)
      &:nth-child(4)
        .item_icon
          background-position-y calc(1 * -0.66rem)
      &:nth-child(5)
        .item_icon
          background-position-y calc(9 * -0.66rem)
      &.on
        color #02a774
      .item_icon
        width 0.56rem
        height 0.56rem
        background-image url("./img/backgroundIcon.png")
        background-size: cover;
        background-repeat: no-repeat;
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
