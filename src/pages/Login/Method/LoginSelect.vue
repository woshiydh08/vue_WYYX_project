<template>
    <div>
      <div class="content">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
        <div class="btnWrap">
          <div class="phoneLogin" @click="$router.replace('/login/login_method/phone')">
            <i class="icon"></i>
            <span class="text">手机号码登录</span>
          </div>
          <div class="emailLogin" @click="$router.replace('/login/login_method/email')">
            <i class="icon"></i>
            <span class="text">邮箱账号登录</span>
          </div>
          <div class="fastLogin">
            <span class="text">手机号快捷注册</span>
            <i class="icon"></i>
          </div>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="itemWrap">
          <div class="item">
            <i class="icon"></i>
            <span class="text">微信</span>
          </div>
        </div>
        <div class="itemWrap">
          <div class="item">
            <i class="icon"></i>
            <span class="text">QQ</span>
          </div>
        </div>
        <div class="itemWrap">
          <div class="item">
            <i class="icon"></i>
            <span class="text">微博</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="stylus">
  .content
    position: relative;
    height: 100%;
    background: #F2F5F4;
    top 1.17333rem;
    .logoWrap
      text-align: center;
      padding-top: 2.13333rem;
      padding-bottom: 2.13333rem;
      img
        width: 3.57333rem;
        height: 1.2rem;
    .btnWrap
      padding: 0 .53333rem;
      margin-bottom: 2.73333rem;
      .phoneLogin
        margin-bottom: .42667rem;
        border-radius: 2px
        display: block;
        width: 100%;
        height: 1.25333rem;
        line-height: 1.25333rem;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        overflow: hidden;
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-repeat: no-repeat;
          background-size: .53333rem 3.86667rem;
          width: .53333rem;
          height: .53333rem;
          background-position: 0 -.66667rem;
          margin-right: .21333rem;
          position: relative;
          top: -.02667rem;
      .emailLogin
        margin-bottom: .42667rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 1.25333rem;
        line-height: 1.25333rem;
        border: 1px solid #b4282d;
        color: #b4282d;
        background-color: transparent;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        overflow: hidden;
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-repeat: no-repeat;
          background-size: .53333rem 3.86667rem;
          width: .53333rem;
          height: .53333rem;
      .fastLogin
        color: #333;
        font-size: .37333rem;
        text-align: center;
        width: 100%;
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
  .thirdWrap
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: .53333rem;
    text-align: center;
    .itemWrap
      height: .53333rem;
      border-right: 1px solid #979797;
      display: inline-block;
      /*text-align: center;*/
      padding: 0 .53333rem;
      &:nth-child(2)
        .item
          .icon
            background: url('../img/QQ.png') no-repeat;
            background-size: 98%;
      &:nth-child(3)
        border-right 0
        .item
          .icon
            background: url('../img/weixin.png') no-repeat;
            background-size: 98%;
      .item
        height: .53333rem;
        position: relative;
        top: -.23333rem;
        .icon
          background: url('../img/weibo.png') no-repeat;
          background-size: 98%;
          position: relative;
          display: inline-block;
          width: .53333rem;
          height: .53333rem;
          vertical-align middle
        .text
          font-size: .37333rem;
          line-height: .53333rem;
          height: .53333rem;
          color: #7F7F7F;
          margin-left: .06667rem;
          vertical-align middle
</style>
