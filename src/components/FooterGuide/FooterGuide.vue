<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/home')">
      <span class="item_icon" :class="{on: $route.path==='/home'}">
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/category?id=109230000')">
      <span class="item_icon" :class="{on: $route.path==='/category'}">
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;"  class="guide_item" @click="goto('/know')">
      <span class="item_icon" :class="{on: $route.path==='/know'}">
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;"  class="guide_item" @click="goto('/shopcart')">
      <span class="item_icon"  :class="{on: $route.path==='/shopcart'}" >
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;"  class="guide_item"  @click="goto('/personal')">
      <span class="item_icon" :class="{on: $route.path==='/personal'}">
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
    height 1.30667rem;
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
          background-position-y -4.4rem
        .on
          background-position-y -3.52rem
      &:nth-child(2)
        .item_icon
          background-position-y -2.64rem
        .on
          background-position-y -1.76rem
      &:nth-child(3)
        .item_icon
          background-position-y -6.16rem
        .on
          background-position-y -3.52rem
      &:nth-child(4)
        .item_icon
          background-position-y -.88rem;
        .on
          background-position-y 0
      &:nth-child(5)
        .item_icon
          background-position-y  -7.92rem
        .on
          background-position-y -3.52rem
      &.on
        color #02a774
      .item_icon
        width: .74667rem;
        height: .74667rem;
        background-image url("./img/backgroundIcon.png")
        background-size: .74667rem 8.66667rem;
        background-repeat: no-repeat;
        vertical-align: middle;
      span
        display: block;
        margin-top: .09333rem;
        font-size: .32rem;
        color: #555;
        line-height: 1;
        .iconfont
          font-size 22px
</style>
