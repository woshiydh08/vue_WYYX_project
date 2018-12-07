<template>
    <div class="main">
      <div class="headerWrapper">
        <div class="headerInner">
          <div class="title">
            购物车
          </div>
          <div class="right">
            <div class="text">
              领券
            </div>
          </div>
        </div>
      </div>
      <div class="reactid">
        <ul>
          <li>
            <i class="icon"></i>
            <span class="text">30天无忧退款</span>
          </li>
          <li>
            <i class="icon"></i>
            <span class="text">40小时快速退款</span>
          </li>
          <li>
            <i class="icon"></i>
            <span class="text">满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="container">
          <div class="img"></div>
          <div class="txt">
            <div class="login">
              <div class="title">去添加点什么吧</div>
              <div class="btn">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopCart"
    }
</script>

<style scoped lang="stylus">
  .main
    width 100%
    height 100%
    background #f4f4f4
    .headerWrapper
      position: fixed!important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      .headerInner
        height: 1.17333rem;
        padding: 0 .4rem;
        line-height: 1.17333rem;
        text-align: center;
        background-color: #fff;
        position: relative;
        .title
          display: inline-block;
          font-size: .48rem;
        .right
          position: absolute;
          top: 0;
          right: .4rem;
          font-size: .4rem;
          .text
            position: relative;
            color: #B4282D;
            right: .4rem;

    .reactid
      margin-top 1.17333rem
      ul
        position: relative;
        z-index: 1;
        height: .93333rem;
        padding: 0 .4rem;
        background: #f4f4f4;
        display: -moz-flex;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        li
          align-items: center;
          font-size: .32rem;
          color: #666;
          .icon
            margin-right: .08rem;
            position: relative;
            top: -1px;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);
            background-repeat: no-repeat;
            width: .13333rem;
            height: .13333rem;
            background-size: 98%;

    .content
      position: fixed;
      top: 1.17333rem;
      left: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      background-color: #f4f4f4;
      text-align: center;
      .container
        position: absolute;
        top: -.66667rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto;
        .img
          display: inline-block;
          vertical-align: middle;
          width: 3.30667rem;
          height: 3.30667rem;
          margin-bottom: .10667rem;
          background-size: 3.30667rem 3.30667rem;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        .txt
          font-size: .37333rem;
          line-height: 1;
          color: #7f7f7f;
          .login
            margin-top: -.26667rem;
            .title
              margin-bottom: .66667rem;
              line-height: 1;
              font-size: .37333rem;
              color: #999;
            .btn
              margin: auto;
              width: 6.4rem;
              height: 1.22667rem;
              font-size: .4rem;
              line-height: 1.22667rem;
              color: #fff;
              background-color: #b4282d;
              border-radius: .04rem;
</style>
