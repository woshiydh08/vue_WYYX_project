<template>
    <div  class="personalBody">
      <div class="header">
        <div class="headerWrapper">
          <div class="headerInner">
            <div class="left">
              <img class="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" >
              <div class="info">
                <p class="nickName">{{user.phone? user.phone:user.name}}</p>
                <div class="level">普通用户</div>
              </div>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="menu">
          <ul>
            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>

            <li>
              <div class="item">
                <i class="icon"></i>
                <span class="txt">我的订单</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="logout">
        <button @click="logout">退出登录</button>
      </div>
    </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'

  import {mapState} from 'vuex'
    export default {
        name: "Personal",
      methods:{
        logout(){
          MessageBox.confirm("是否退出登录?").then(
            action => {
              this.$store.dispatch('logout')
              this.$router.replace('/login')
            },
            action => {

            }
          )
        }





      },
      computed:{
        ...mapState(['user'])
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .personalBody
    height 100%
    background-color: #f3f3f3;
    .header
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      .headerWrapper
        height: 3.6rem;
        background-image: url('http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png');
        background-size: 100%;
        background-position: bottom center;
        padding-left: .4rem;
        overflow: hidden;
        .headerInner
          width: 9.6rem;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          -moz-align-items: center;
          align-items: center;
          .left
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -moz-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            -moz-justify-content: flex-start;
            justify-content: flex-start;
            padding: .85333rem 0;
            width: 7.2rem;
            .avatar
              vertical-align: middle;
              width: 1.89333rem;
              height: 1.89333rem;
              border-radius: 50%;
            .info
              flex: 1;
              margin-left: .4rem;
              line-height: 1;
              overflow: hidden;
              .nickName
                color: #fff;
                font-size: .48rem;
                line-height: 1.2;
                text-align: left;
                margin-bottom: .13333rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              .level
                color: #fff;
                font-size: .37333rem;
                vertical-align: middle;

          .right
            position: relative;
            width: 2.8rem;
            padding-left: .22667rem;
            height: 100%;

    .content
      margin-top -.55rem
      width:100%;
      margin-right: auto;
      margin-left: auto;
      .menu
        margin-bottom: .53333rem;
        background: #fff;
        ul
          /*zoom: 1;*/
          clearFix()
          li
            background-color: #fff
            float: left;
            width: 33.33333%;
            border-right: 1px solid rgba(0,0,0,.15);
            border-bottom: 1px solid rgba(0,0,0,.15);
            .item
              display: block;
              height: 2.4rem;
              padding-top: .6rem;
              text-align: center;
              .icon
                width: .66667rem;
                height: .66667rem;
                vertical-align: middle;
                margin-bottom: .21333rem;
                background-position: 0 -10.32rem;
                display: inline-block;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s4184c581c7-cc8ba9695e.png);
                background-repeat: no-repeat;
                background-size: .85333rem 15.68rem;
              .txt
                display: block;
                font-size: .32rem;
                line-height: 1;
                color: #333;
    .logout
      padding-top .5rem
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      button
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        color: #000;
        background-color: #ffffff;
        border-radius: 4px;
        overflow: hidden;
        height: 1.28rem;
        line-height: 1.28rem;
        display: block;
        width: 100%;
        border 0
</style>
