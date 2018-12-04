<template>
    <div>
      <div class="topHeader">
        <div class="search">
          <span class="logo"></span>
          <div class="input">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共19914款好物</span>
          </div>
          <a href="javascript:;" class="loginButton">登录</a>
        </div>
        <div class="nav-list">
          <div class="">
            <ul class="list">
              <li><a href="javascript:;">推荐</a></li>
              <li><a href="javascript:;">居家</a></li>
              <li><a href="javascript:;">鞋包配饰</a></li>
              <li><a href="javascript:;">服装</a></li>
              <li><a href="javascript:;">电器</a></li>
              <li><a href="javascript:;">洗护</a></li>
              <li><a href="javascript:;">饮食</a></li>
              <li><a href="javascript:;">餐厨</a></li>
              <li><a href="javascript:;">婴童</a></li>
              <li><a href="javascript:;">文体</a></li>
              <li><a href="javascript:;">特色区</a></li>
            </ul>
          </div>
          <span class="more">
            <i></i>
          </span>
        </div>
      </div>
      <div class="slide">
        <ul>
          <li><img src="./img/slide01.jpg" alt=""></li>
          <li><img src="./img/slide02.jpg" alt=""></li>
          <li><img src="./img/slide03.jpg" alt=""></li>
          <li><img src="./img/slide04.jpg" alt=""></li>
          <li><img src="./img/slide05.jpg" alt=""></li>
          <li><img src="./img/slide06.jpg" alt=""></li>
          <li><img src="./img/slide07.jpg" alt=""></li>
          <li><img src="./img/slide09.jpg" alt=""></li>
        </ul>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Swiper from 'swiper'
    export default {
      name: "Home",
      mounted(){
        new BScroll('.nav-list', {
          click: true, // 触发自定义click
          scrollX: true

        });
        new BScroll('.slide', {
          click: true, // 触发自定义click
          scrollX: true

        });
        new Swiper('slide',{
          autoplay: 3000
        })
      },
    }
</script>

<style scoped lang="stylus">
  .topHeader
    width 100%
    background-color: white
    font-size 0.24rem
    .search
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      padding: .21333rem .4rem;
      align-items: center;
      background: #fff;
      .logo
        display inline-block
        background-image url("./img/logo.png")
        background-size 100% 100%
        width: 1.84rem;
        height: .53333rem;
        margin-right: .26667rem;
        background-position: center;
      .input
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        flex-grow: 1;
        .icon
          display: inline-block;
          /*vertical-align: middle;*/
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem;
        .placeholder
          color: #666;
          font-size: .37333rem;
      .loginButton
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left: .21333rem;
        box-sizing: border-box;
    .nav-list
      display flex
      white-space: nowrap;
      .list
        flex-grow 1
        display flex
        flex-flow nowrap
        li
          float left
          width auto
          flex-shrink 0
          padding 0 0.16rem
          margin-left: .26667rem;
          a
            display: inline-block;
            padding: 0 .21333rem;
            line-height: .8rem;
            font-size: .37333rem;
            color: #333;
            text-align: center;
      .more
        display flex
        width 1rem
        height 0.6rem
        justify-content center
        align-items center
        flex-shrink 0
        i
          margin 0 auto
          margin-top: .2rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .3rem;
          height: .3rem;
          text-align center
  .slide
    width 100%
    height: 4.93333rem;
    background-color: red
    ul
      width 800%
      height 100%
      li
        width calc(100% / 8)
        height 100%
        float left;
        img
          width 100%
          height 100%
</style>
