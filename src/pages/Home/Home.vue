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
          <div class="listWarp">
            <ul class="listInner">
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
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./img/slide02.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide03.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide04.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide05.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide06.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide07.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide09.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./img/slide10.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="bulletin">
        <ul class="g-grow">
          <li>
            <i></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
      </div>
      <div class="product-list">
        <ul>
          <li>
            <img src="./img/product01.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="./img/product02.png" alt="">
            <span>鞋包配饰</span>

          </li>
          <li>
            <img src="./img/product03.png" alt="">
            <span>服装</span>

          </li>
          <li>
            <img src="./img/product04.png" alt="">

            <span>电器</span>
          </li>
          <li>
            <img src="./img/product05.png" alt="">
            <span>婴童</span>
          </li>
          <li>
            <img src="./img/product06.png" alt="">
            <span>饮食</span>
          </li>
          <li>
            <img src="./img/product07.png" alt="">
            <span>洗护</span>
          </li>
          <li>
            <img src="./img/product08.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="./img/product09.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="./img/product010.png" alt="">
            <span>居家</span>
          </li>
        </ul>
      </div>
      <img src="./img/promItem.gif" alt="" class="promItem">
      <div class="sales01">
        <div class="sales01-item01">
          <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="">
        </div>
        <div class="sales01-item02">
          <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" alt="">
          <img src="https://yanxuan.nosdn.127.net/15439064549673720.png" alt="">
        </div>
      </div>
      <div class="sales02">
        <img class="sales02-item01" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
        <img class="sales02-item01" src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt="">
      </div>
      <div class="freshmanModule">
        <div class="title">
          <span class="txt">新人专享</span>
        </div>
        <div class="content">
          <span class="left">
            <span class="left-txt">
              新人专享礼包
            </span>
            <span class="img-warp">
              <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
            </span>
          </span>
          <span class="right">
            <span class="right-item1">
              <span class="activityItem">福利社</span>
            </span>
            <span class="right-item2"></span>
          </span>
        </div>
      </div>
      <br>
      <br>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
      name: "Home",
      mounted(){
        new BScroll('.nav-list', {
          click: true, // 触发自定义click
          scrollX: true

        });
        var mySwiper = new Swiper(".swiper-container",{
          effect : "slide",
          direction: 'horizontal',
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction : false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        })
      },
    }
</script>

<style scoped lang="stylus">
  .topHeader
    position fixed
    top: 0
    width 100%
    background-color: white
    font-size 0.24rem
    z-index 10
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
      overflow hidden
      .listWarp
        .listInner
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
        position absolute
        right  0
        width: 1.33333rem;
        height: .8rem;
        display flex
        justify-content center
        align-items center
        flex-shrink 0
        background-color white
        i
          margin-top: .2rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
          transition: transform .5s;
  .swiper-container
    margin-top 2rem
    width 100%
    height: 4.93333rem;
    .swiper-wrapper
      width 800%
      height 100%
      display flex
      flex-wrap nowrap
      .swiper-slide
        width calc(100% / 8)
        height 100%
        img
          width 100%
          height 100%
  .bulletin
    width 100%
    background: #FFEDDB;
    .g-grow
      width: 100%;
      height: .96rem;
      padding: 0 .4rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content space-around
      zoom: 1;
      li
        float: left;
        display: flex;
        vertical-align: middle;
        height: .42667rem;
        justify-content center
        i
          display: inline-block;
          vertical-align: middle;
          background-image: url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .42667rem;
          height: .42667rem;
        span
          font-size: .32rem;
          margin-left: .10667rem;
          line-height: .42667rem;
          display: inline-block;
          vertical-align: middle;
          color: #B4282D;

  .product-list
    width 100%
    height: 5.22667rem;
    background-color #FFEDDB
    ul
      li
        display: flex;
        width: 1.46667rem;
        height: 2.08rem;
        float: left;
        margin: .13333rem .26667rem 0;
        margin-bottom: .12rem;
        justify-content center
        align-items center
        flex-wrap wrap
        img
          width: 1.46667rem;
          height: 1.46667rem;
        span
          margin-top: .13333rem;
          text-align: center;
          font-size: .32rem;
          line-height: .48rem;
          white-space: nowrap;
  .promItem
    width 100%
    height 100%
  .sales01
    width:10rem;
    height:6.226666666666667rem;
    background:url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588);
    background-size:100% 100%;
    margin-top -1.4rem
    padding-top 1rem
    display flex
    justify-content center
    align-items center
    .sales01-item01
      width: 50%;
      height: 100%;
      img
        width 100%
        height 100%
    .sales01-item02
      width: 50%;
      height: 100%;
      display flex
      justify-content center
      align-items center
      flex-wrap wrap
      img
        height 50%
        width  100%
  .sales02
    width:10rem;
    height:2.9111111111111112rem;
    background:url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305);
    background-size:100% 100%;
    position flex
    justify-content center
    align-items center
    flex-wrap nowrap
    .sales02-item01
      float left
      width 50%
      height auto
  .freshmanModule
    background: #fff;
    margin-top: .26667rem;
    padding-bottom: .4rem;
    margin-bottom: .26667rem;
    .title
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .42667rem;
      .txt
        display: inline-block;
        position: relative;
        &::before
          content: '';
          position: absolute;
          top: .6rem;
          width: .32rem;
          height: .04rem;
          background: #333;
          left -.53333rem
        &::after
          content: '';
          position: absolute;
          top: .6rem;
          width: .32rem;
          height: .04rem;
          background: #333;
          right  -.53333rem
    .content
      padding-left: .4rem;
      overflow: hidden;
      .left
        display: block;
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333;
        .left-txt
          font-family: PingFangSC-Medium;
          font-size: .42667rem;
          padding: .4rem 0 0 .4rem;

        .img-warp
          margin: .66667rem auto;
          width: 3.04rem;
          height: 3.05333rem;
          position: relative;
          img
            width: 100%;
            height: 100%;
      .right
        float: left;
        .right-item1
          background: #FBE2D3;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          margin-bottom: .05333rem;
          .activityItem
            display: block;
            color: #333;
            width: 4.57333rem;
            height: 2.93333rem;
            float: left;
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem;
</style>
