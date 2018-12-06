<template>
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="itme in focuslist.data">
            <img :src="itme.picUrl" alt="">
          </div>
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
        <ul  v-if="msite.data">
          <li v-for="itme in msite.data.kingKongModule.kingKongList">
            <img :src="itme.picUrl" alt="">
            <span>{{itme.text}}</span>
          </li>
        </ul>
      </div>
      <img src="./img/promItem.gif" alt="" class="promItem">
      <div class="sales01" v-if="msite.data">
        <div class="sales01-item01">
          <img :src="msite.data.bigPromotionModule.bigPromotionList[1].data.contents[0].picUrl" alt="">
        </div>
        <div class="sales01-item02">
          <img :src="msite.data.bigPromotionModule.bigPromotionList[1].data.contents[1].picUrl" alt="">
          <img :src="msite.data.bigPromotionModule.bigPromotionList[1].data.contents[2].picUrl" alt="">
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
              <span class="activityItem1">福利社</span>
              <span class="activityItem2">今日特价</span>
              <img src="http://yanxuan.nosdn.127.net/2aa6c2c0c74258a3c895de220c79a875.png" alt="">
              <span class="price">
                <span class="price1">￥9.99</span>
                <span class="price2">￥299</span>
              </span>
            </span>
            <span class="right-item2">
              <span class="activityItem1">新人拼团</span>
              <span class="activityItem2">1元起包邮</span>
              <img src="http://yanxuan.nosdn.127.net/c95a4d1daa62d7a9004208752a1a2098.png" alt="">
              <span class="price">
                <span class="price1">￥9.99</span>
                <span class="price2">￥299</span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div class="manufacturer">
        <div class="moduleTitle">
          <span class="title">品牌制造商直供</span>
          <span class="more">更多</span>
        </div>
        <div class="moduleList">
          <span class="item">
            <span class="item-top">海外制造商</span>
            <span class="item-middle">9.9元起</span>
          </span>
          <span class="item">
            <span class="item-top">海外制造商</span>
            <span class="item-middle">9.9元起</span>
          </span>
          <span class="item">
            <span class="item-top">海外制造商</span>
            <span class="item-middle">9.9元起</span>
          </span>
          <span class="item">
            <span class="item-top">海外制造商</span>
            <span class="item-middle">9.9元起</span>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    name: "Home",
    mounted(){
      new BScroll('.nav-list', {
        click: true, // 触发自定义click
        scrollX: true
      });
      this.$store.dispatch('getMsite')
      this.$store.dispatch('getFocusList',()=>{
        this.$nextTick(()=>{
          new Swiper(".swiper-container",{
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
        })

      })
    },
    methods:{
      c(){
        console.log(this.$store.state.msite)
      }
    },
    computed:{
      ...mapState(['msite','focuslist'])
    },
    watch:{
    }
  }
</script>

<style scoped lang="stylus">
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
      font-size: .42667rem;
      padding-left: .4rem;
      overflow: hidden;
      display flex
      .left
        flex-shrink 0
        display: block;
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333;
        .left-txt
          display inline-block
          font-family: PingFangSC-Medium;
          font-size: .42667rem;
          margin: .4rem 0 0 .4rem;
        .img-warp
          display block
          margin: .26667rem auto;
          width: 3.04rem;
          height: 3.05333rem;
          position: relative;
          img
            width: 100%;
            height: 100%;
      .right
        float: left;
        .right-item1
          display block
          background: #FBE2D3;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          margin-bottom: .05333rem;
          position relative
          .activityItem1
            position absolute
            display inline-block
            font-family: PingFangSC-Medium;
            font-size: .42667rem;
            top .25333rem
            left .25333rem;
          .activityItem2
            position absolute
            color: #7F7F7F;
            font-size: .32rem;
            top .95333rem
            left .25333rem;
          img
            position absolute
            width: 2.66667rem;
            height: 2.66667rem;
            top .25333rem
            right  .25333rem;
          .price
            position absolute
            top .25333rem
            right  .65333rem;
            width: 1.06667rem;
            height: 1.06667rem;
            opacity: .8;
            background: #F59524;
            border-radius: 50%;
            padding-top: .13333rem;
            color: #fff;
            text-align: center;
            .price1
              display block
              font-size: .32rem;
            .price2
              display block
              font-size: .26667rem;
              margin-top: -.09333rem;
              text-decoration: line-through;
        .right-item2
          display block
          background: #FFECC2;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          position relative
          .activityItem1
            position absolute
            display inline-block
            font-family: PingFangSC-Medium;
            font-size: .42667rem;
            top .25333rem
            left .25333rem;
          .activityItem2
            position absolute
            color: #fff;
            top .95333rem
            left .25333rem;
            background: #CBB693;
            border-radius: .05333rem;
            font-size: .29333rem;
            line-height: .42667rem;
            text-align: center;
          img
            position absolute
            width: 2.66667rem;
            height: 2.66667rem;
            top .25333rem
            right  .25333rem;
          .price
            position absolute
            top .25333rem
            right  .65333rem;
            width: 1.06667rem;
            height: 1.06667rem;
            opacity: .8;
            background: #F59524;
            border-radius: 50%;
            padding-top: .13333rem;
            color: #fff;
            text-align: center;
            .price1
              display block
              font-size: .32rem;
            .price2
              display block
              font-size: .26667rem;
              margin-top: -.09333rem;
              text-decoration: line-through;
  .manufacturer
    padding-bottom: .10667rem;
    .moduleTitle
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
      .title
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regular;
      .more
        display: block;
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
    .moduleList
      position: relative;
      overflow: hidden;
      background: #fff;
      margin-bottom: .26667rem;
      padding: 0 .34667rem .34667rem .4rem;
      display flex
      flex-wrap wrap
      .item
        flex-shrink 0
        display: flex;
        flex-direction column
        justify-content center
        align-items center
        position: relative;
        margin: 0 .05333rem .05333rem 0;
        width: 4.57333rem;
        height: 3.46667rem;
        overflow: hidden;
        background-color: #f4f4f4;
        border-radius: .05333rem;
        background-image:url(http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1);
        background-size:100% 100%;
        .item-top
          margin-top -2rem
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #333;
          font-family: PingFangSC-Medium;
          font-size: .37333rem;
          line-height: .45333rem;
          margin-bottom: .04rem;
        .item-middle
          color: #7F7F7F;
          font-size: .32rem;

</style>
