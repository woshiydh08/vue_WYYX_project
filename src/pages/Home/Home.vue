<template>
    <div>
      <div class="topHeader">
        <div class="search">
          <router-link to="/"><span class="logo"/></router-link>
          <div class="input">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共19914款好物</span>
          </div>
          <a href="javascript:;" class="loginButton">登录</a>
        </div>
        <div class="nav-list">
          <div class="listWarp">
            <ul class="listInner">
              <li><router-link to="/home/recommend" replace>推荐</router-link></li>
              <li><router-link to="/home/recommend" replace>居家</router-link></li>
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
      <router-view></router-view>

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

        })
      },
      methods:{
        goto(path){
          this.$router.replace(path);
        }
      }
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

</style>
