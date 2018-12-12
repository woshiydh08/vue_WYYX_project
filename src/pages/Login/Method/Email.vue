<template>
  <div class="content">
    <input type="text" class="num" placeholder="账号" v-model="name">
    <div class="line"></div>
    <input type="password" class="code" placeholder="密码" v-model="pwd">
    <div class="line"></div>
    <div class="other">
      <div class="question">注册账号</div>
      <div class="loginForPWD">忘记密码</div>
    </div>
    <div class="login" @click="login">登录</div>
    <div class="otherFun" @click="$router.replace('/login')">其他登录方式</div>
  </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'

  import {reqPwdLogin} from '../../../api'
  export default {
    name: "PhoneLogin",
    data(){
      return{
        name:'',
        pwd:''
      }
    },
    methods:{
      async login () {
        // 1. 进行前台表单验证
        const { name, pwd} = this
        let result

        if(!name) {
          return MessageBox.alert('用户名必须指定')
        } else if (!pwd) {
          return MessageBox.alert('密码必须指定')
        }
        // 2. 发送登陆的请求
        result = await reqPwdLogin({name, pwd})
        if(result.code===0) { // 登陆请求成功
          // 保存user到state中
          const user = result.data
          this.$store.dispatch('saveUser', user)
          // 跳转到个人中心
          this.$router.replace('/personal')
        } else { // 失败
          MessageBox.alert('登陆请求失败')
        }
      },

    }
  }
</script>

<style scoped lang="stylus">
  .content
    padding: 0 0.555556rem;
    position: relative;
    padding-top: 1.6rem;
    /*display flex*/
    /*justify-content center */
    .num
      width: 8.27rem;
      height: 0.6rem;
      font-size: 0.4rem;
      line-height: 0.6rem;
      margin: 0.39rem 0;
      padding-left: 0;
      -webkit-tap-highlight-color: transparent;
      letter-spacing: normal;
      outline none
    .line
      width 100%
      height 1px
      background-color #f3f3f3
    .code
      width: 8.27rem;
      height: 0.6rem;
      font-size: 0.4rem;
      line-height: 0.6rem;
      margin: 0.39rem 0;
      padding-left: 0;
      -webkit-tap-highlight-color: transparent;
      letter-spacing: normal;
      outline none
      button
        flex-shrink 0
        display: block;
        width: 2.3rem;
        height: 0.75rem;
        text-align: center;
        color: #333;
        font-size: 14px;
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #7F7F7F;
        border-radius: 4px;


    .other
      height: 0.582rem;
      line-height: 0.582rem;
      padding: 0.533rem 0 2.24rem;
      display flex
      justify-content space-between
      .question
        float: left !important;
        height: 0.6rem;
        text-decoration: none;
        cursor: pointer;
        color: #7f7f7f !important;
        font-size: 0.4rem;
        line-height: 0.6rem;

      .loginForPWD
        background: none;
        color: #333;
        font-size: 0.4rem;
        height: 0.6rem;
        padding: 0;
        line-height: 0.6rem;

    .login
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
    .otherFun
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
</style>
